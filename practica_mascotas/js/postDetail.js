let urlParams = new URLSearchParams(window.location.search);
let postKey = urlParams.get("postkey");

console.log(postKey);

const getPost = (key) => {
  let dbPosts = [];
  $.ajax({
    method: "GET",
    url: `https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/posts/${key}.json`,
    success: (response) => {
      console.log(response);
      dbPosts = response;
      /*for (key in response) {
        dbPosts.push({ id: key, data: response[key] });
      }*/
    },
    error: (error) => {
      console.log(error);
    },
    async: false,
  });

  console.log("getPost", dbPosts);
  return dbPosts;
};
console.log(getPost(postKey));

/*get Replies*/
const getReplies = () => {
  let dbReplies;
  $.ajax({
    method: "GET",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/replies/.json",
    success: (response) => {
      //console.log(response)
      dbReplies = response;
    },
    error: (error) => {
      console.log(error);
    },
    async: false,
  });

  // console.log( d bData )
  return dbReplies;
};

/*get Users*/
const getUsers = () => {
  let dbUsers;
  $.ajax({
    method: "GET",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/users/.json",
    success: (response) => {
      //console.log(response);
      dbUsers = response;
    },
    error: (error) => {
      console.log(error);
    },
    async: false,
  });

  // console.log( d bData )
  return dbUsers;
};
const getUser = (userId) => {
  let newUser = {};
  let users = getUsers();
  for (key in users) {
    if (users[key].userId == userId) {
      newUser["name"] = users[key].name;
      newUser["avatar"] = users[key].avatar;
      newUser["userId"] = users[key].userId;
    }
  }

  return newUser;
};
//let otherData = getUsers()
//console.log( otherData )

const printUser = (userId) => {
  let user = getUser(userId);
  //console.log(user.avatar);
  return `<div class="autor">
  <img src="${user.avatar}" alt=""> 
  <span class="comment-autor text-blue"><small>&nbsp ${user.name}</small></span>
  </div>`;
};

const printReplies = (postId) => {
  $(`#replies-wrapper li`).remove();
  let replies = getReplies();
  let copy = { ...replies };

  for (key in replies) {
    if (replies[key].post === postId) {
      //let user = getUser(replies[key].userId);
      //console.log(user.avatar);
      // console.log("traeusercomment", user);
      let h3Id = Date.now();

      let liHTML = `<li class="list-group-item">
                                <div class="reply-box">
                                    <h3 id="${h3Id}"></h3>
                                    
                                    <p class="mb-0 text-muted comment-text">${replies[key].content}</p>
                                    <p class="mb-0 text-right text-muted comment-date">
                                        <span class="date">${replies[key].creationDate}</span> 
                                        <span class="time">${replies[key].creationTime}</span>   
                                    </p>
                                </div>
                            </li>
                        `;
      // console.log(ulHtml)
      /*
      let ulHTML = document.createElement("ul");
      ulHTML.classList = "list-group bg-white border rounded m-2";

      $(ulHTML).append(liHTML);*/

      let repWrapp = `#replies-wrapper`;

      $(repWrapp).prepend(liHTML);
      //////////////////////////////////////////////
      //print user
      let userinfo = printUser(replies[key].userId);
      $(`#${h3Id}`).append(userinfo);
    }
  }
};

const printPostData = (data) => {
  let {
    content,
    coverUrl,
    creationDate,
    creationTime,
    postId,
    title,
    userId,
  } = data;
  //console.log(data.content);
  $(".post-wrapper div img").attr("src", data.coverUrl);
  $(".post-wrapper div h5").append(data.title);
  $(".content").append(data.content);
  let dateTimeHtml = `Creado el <span class="text-dark creation">${data.creationDate}
                      ${data.creationTime}</span>`;
  $(".creation").append(dateTimeHtml);
  $(".btn-save-replie").attr("data-commentkey", data.postId);
  printReplies(data.postId);
};
printPostData(getPost(postKey));

const goAddPost = () => {
  $(location).attr("href", "/views/addPost.html");
};

const activeComment = (event) => {
  let comment = $(event.target).val().trim();
  let lengthComment = comment.length;
  //console.log(lengthComment);
  lengthComment >= 3 && comment != ""
    ? $(event.target).next("button").attr("disabled", false)
    : $(event.target).next("button").attr("disabled", true);
};

const saveReplie = (event) => {
  let postId = $(event.target).data("commentkey");
  let comment = $(`.reply-comment form div input`).val();
  //let message = `<div class="error-comment">Ingresa un comentario<div>`;
  //$(`#replies-wrapper-${postId}`).append(message);
  //console.log(moment().format("LT"));

  $.ajax({
    method: "POST",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/replies/.json",
    data: JSON.stringify({
      content: comment,
      creationDate: moment().format("l"),
      creationTime: moment().format("LT"),
      post: postId,
      userId: 3,
    }),
    success: (response) => {
      console.log(response);
      printReplies(postId);
      $(`.reply-comment form`)[0].reset();
    },
    error: (error) => {
      console.log(error);
    },
  });
};

$(".comment-input").keyup(activeComment);

$(".btn-save-replie").click(saveReplie);

$("#go-add-post-detail").click(goAddPost);
