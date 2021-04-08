//https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors.json

const printTable = (mentorsArray) => {
    let table = document.getElementById("mentor-table")
    //console.log(mentorsArray.lenght)
    while (table.lastElementChild) {
        table.removeChild( table.lastElementChild );
    }

    mentorsArray.forEach( ( mentor, index ) => {
        
        let mentorRow = document.createElement("tr")

        let indexTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let phoneTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let buttonTd = document.createElement("td")
        
        let mentorIndex = document.createTextNode(index + 1)
        let mentorName = document.createTextNode(mentor.data.name)
        let mentorPhone = document.createTextNode(mentor.data.phone)
        let mentorAge = document.createTextNode(mentor.data.age)
        

        let deleteButton = document.createElement("button")
        deleteButton.className = "btn btn-danger btn-delete"
        deleteButton.dataset.mentorId = mentor.id

        let deleteButtonText = document.createTextNode("Eliminar")

        deleteButton.appendChild( deleteButtonText)
        
        indexTd.appendChild( mentorIndex )
        nameTd.appendChild( mentorName )
        phoneTd.appendChild( mentorPhone )
        ageTd.appendChild( mentorAge )
        buttonTd.appendChild( deleteButton )

        mentorRow.appendChild( indexTd )
        mentorRow.appendChild( nameTd )
        mentorRow.appendChild( phoneTd )
        mentorRow.appendChild( ageTd )
        mentorRow.appendChild( buttonTd )

        table.appendChild( mentorRow )

        

    })
}             


const getMentors = () => {
    let newMentorsArray=[]
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let mentors = JSON.parse(xhttp.responseText)
           
            for( key in mentors ){
                newMentorsArray.push({"id": key , "data": mentors[key] })           
            }
            printTable(newMentorsArray)
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors.json", false);

    xhttp.send();
}

const deleteMentor = event => {
    let mentorKey = event.target.dataset.mentorId 
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log('delete;', response  )
            getMentors()            
        }
    }

    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors/${mentorKey}.json`, true);

    xhttp.send( );
}

const addDeleteListeners = () =>{
    let buttons = document.querySelectorAll(".btn-delete")
    buttons.forEach( button => {
    button.addEventListener( "click", deleteMentor ) 
})
}
//console.log(newMentorsArray)
const postMentor = (mentorObject) => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
            getMentors()
            addDeleteListeners()
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/beto/mentors.json", true);

    xhttp.send( JSON.stringify(mentorObject) );
}

//postMentor(mentor)




//

getMentors()
addDeleteListeners()




document.getElementById("guardar").addEventListener( "click", function(){ 
    let inputName   = document.getElementById("name").value;
    let inputPhone  = document.getElementById("phone").value;
    let inputAge    = document.getElementById("age").value;
    let nameHelp    = document.getElementById("nameHelp");
    let phoneHelp   = document.getElementById("phoneHelp");
    let ageHelp     = document.getElementById("ageHelp");

    //validation
    let sendForm=true;
    if(inputName ==""){
        sendForm=false;
        nameHelp.removeAttribute("hidden");
    }else{
        nameHelp.setAttribute("hidden", true);
    }
    if(inputPhone ==""){
        sendForm=false;
        phoneHelp.removeAttribute("hidden");
    }else{
        phoneHelp.setAttribute("hidden", true);
    }
    if(inputAge ==""){
        sendForm=false;
        ageHelp.removeAttribute("hidden");
    }else{
        ageHelp.setAttribute("hidden", true);
    }
    if (sendForm===true){
        let newMentor   = { name: inputName, phone: inputPhone, age: inputAge };
        postMentor(newMentor);
        document.getElementById("formNewMentor").reset();
    }
    
})

// Object
/*************************************
let mentor = {
    "age":20,
    "name":"Fernanda Palacios Vera",
    "phone":"555555555"
}
**************************************/
/*

    //destructuring
    let { name, phone, age } = mentor2
    let [ one, two, three ] = lettersArray
       
*/

/*Object.keys( objeto ) => devuelve un array con las llaves del objeto */
/*Object.values( objeto ) => devuelve un array con los values de cada llave del objeto */
/*Object.entries( objeto ) => devuleve un array bidimensional con las llaves y los valores del objeto */
/*for( key in object){}*/

