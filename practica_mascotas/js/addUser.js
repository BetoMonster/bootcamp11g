
const saveUser = () => {

    let inputName = $('#name').val()
    let inputAvatar = $('#avatar').val()

    if(inputName!="" && inputAvatar!=""){

        $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/users/.json",
        data: JSON.stringify({
            userId: Date.now(),
            name: inputName,
            avatar: inputAvatar,
            login: 0
        }),
        success: (response) => {
            console.log(response);
            $(`#addUserForm`)[0].reset();
        },
        error: (error) => {
            console.log(error);
        },
        });
    }else{alert("Escriba Nombre y URL del avatar de usuario")
    }
  };


  $('#btnAddUser').click(saveUser)

  
  const goHome = () => {
    $(location).attr('href','../index.html')
  }
  
  $('#btn-back').click(goHome)
  $('.logo').click(goHome)

  
