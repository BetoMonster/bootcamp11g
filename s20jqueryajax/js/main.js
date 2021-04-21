/*
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors.json", true);

    xhttp.send( JSON.stringify(mentor) )
*/


/*

$.ajax({
        method:  "GET", /*"GET" || "POST" || "PATCH" ||"DELETE" || "PUT"
        data:,  aquí va lo que vamos a enviar
        url: a donde haremos la petición
        success:  callback para cuando la petición es exitosa
        error: callback para cuando hay error en la petición

    })
*/
const printData = (mentorsArray) =>{
    //console.log('prindata:',mentorsArray)
    /*while ( $('#content-wrapper').lastElementChild) {
        $('#content-wrapper').removeChild(  $('#content-wrapper').lastElementChild );
    }*/
    $('#content-wrapper .card').remove();

    mentorsArray.forEach( ( mentor, index ) => {
    
        $('#content-wrapper').append(
        `<div class="card" >
            <div class="card-body">
                <h5 class="card-title">${mentor.data.name}</h5>
                <div class="card-text">
                <ul>
                    <li>Edad: ${mentor.data.age}</li>
                    <li>Teléfono: ${mentor.data.phone}</li>
                </ul>
                <button class="btn btn-danger btn-delete" data-mentor-id="${mentor.id}" id="btn-delete-${index}">Borrar</button>
                
                <button class="btn btn-primary btn-edit" data-toggle="modal" data-target="#modalMentor" data-mentor-id="${mentor.id}" data-mentor-index="${index}">Editar</button>

            </div>
        </div>`)
    })
    //<!--<button class="btn btn-primary btn-edit" data-mentor-id="${mentor.id}" id="btn-edit-${index}">Editar</button>-->
    $(".btn-delete").click(function (event) {
        let mentorKey = event.target.dataset.mentorId 
        console.log(mentorKey)
        deleteData(mentorKey)
    });
    
    /*$('.btn-edit').on('shown.bs.modal', function () {
        $('#modalMentor #name').trigger('focus')
      })*/
      $('.btn-edit').click(function (event) {
        $("#key").val(event.target.dataset.mentorId)
        $("#actionForm").val('edit')
        let mentorIndex = event.target.dataset.mentorIndex 
        let {name,age,phone} = mentorsArray[ mentorIndex].data

        $("#name").val(name)
        $("#phone").val(phone)
        $("#age").val(age)
        $('#modalMentor #name').trigger('focus')
        
        
    });  

}

const getData = () => {
    let newMentorsArray=[]
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors.json",
        success: response => {
            console.log(response)
            let mentors = response
            for( key in mentors ){
                newMentorsArray.push({"id": key , "data": mentors[key] })           
            }
            console.log(newMentorsArray)
            printData(newMentorsArray)
        },
        error: error => {
            console.log(error)
        }
    })
}

getData()

const saveData = (mentorObject) => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors/.json",
        data: JSON.stringify(mentorObject),
        success : response => {
            console.log('Mentor agregado exitosamente ',response)
            getData()
        },
        error : error => {
            console.log(error)
        }
    })
}

const deleteData = key => {
   
    $.ajax({
        method:"DELETE",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors/${key}.json`,
        success: response => {
            console.log('Mentor borrado exitosamente ', response)
            getData()
        },
        error: error => {
            console.log( error )
        }
    })
}

const updateData = key => {
    $.ajax({
        method:"PATCH",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors/${key}.json`,
        data: JSON.stringify({ gender:"Symphonic Metal"}),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( error )
        }
    })
}


const putData = (key,mentorObject) => {
    $.ajax({
        method:"PUT",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors/${key}.json`,
        data: JSON.stringify(mentorObject),
        success: response => {
            console.log( 'Mentor actualizado exitosamente: ', response ) 
            getData()
        },
        error: error => {
            console.log( error )
        }
    })
}

let cardHtml = `<div class="card">
<div class="card-body">
    <div class="card-title">Un título</div>
    <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor est, maiores a illum quod laboriosam fugit ut esse aliquid quos?</div>
</div>
</div>`



$('#guardar').click(function(){
    let inputName   = $('#name').val();
    let inputPhone  = $('#phone').val();
    let inputAge    = $('#age').val();
    let mentorKey   = $('#key').val();
    let actionForm  = $('#actionForm').val();
    let nameHelp    = $('#nameHelp');
    let phoneHelp   = $('#phoneHelp');
    let ageHelp     = $('#ageHelp');


    //validation
    let sendForm=true;
    if(inputName ==""){
        sendForm=false;
        nameHelp.removeAttr("hidden");
    }else{
        nameHelp.attr("hidden", true);
    }
    if(inputPhone ==""){
        sendForm=false;
        phoneHelp.removeAttr("hidden");
    }else{
        phoneHelp.attr("hidden", true);
    }
    if(inputAge ==""){
        sendForm=false;
        ageHelp.removeAttr("hidden");
    }else{
        ageHelp.attr("hidden", true);
    }
    if (sendForm===true){
        let mentor   = { name: inputName, phone: inputPhone, age: inputAge };
        if(actionForm==='edit'){
            putData(mentorKey,mentor);
            //console.log(mentorKey,mentor);
            
        }else{
            //saveData(mentor);
        }
        $('#formMentor')[0].reset();
        $('#modalMentor').modal('hide');
    }
    
})

/*
$('#content-wrapper').on("click", ".btn-delete", function (event) {
    let mentorKey = event.target.dataset.mentorId 
    console.log(mentorKey)
    deleteData(mentorKey)
});  */




