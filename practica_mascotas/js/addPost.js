
const savePosts = () => {

    let inputTitle = $('#title').val()
    let inputContent = $('#content').val()
    let inputImg = $('#coverUrl').val()

    if(inputTitle!="" && inputContent!="" && inputImg!=""){
      $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/posts/.json",
        data: JSON.stringify({
          postId: Date.now(),
          userId: 2,
          title: inputTitle,
          content: inputContent,
          creationDate: moment().format("l"),
          creationTime: moment().format("LT"),
          coverUrl: inputImg,
        }),
        success: (response) => {
          console.log(response);
          $(`#addPostForm`)[0].reset();
          
        },
        error: (error) => {
          console.log(error);
        },
      });
    }else{
      alert("Llene los 3 campos antes de enviar")
    }
  };

  $('#btnAddPost').click(savePosts)

  //$('#btn-back').click($(location).attr('href','../index.html'))


  const goHome = () => {
    $(location).attr('href','../index.html')
  }
  
  $('#btn-back').click(goHome)
  $('.logo').click(goHome)

  
