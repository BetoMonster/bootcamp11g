/*namesArray=["Jaime","Beto","Mariana"]

const printList =() =>{
    let list = document.createElement("ul")

    namesArray.forEach(element => {
        let listItem=document.createElement("li")
        let itemText=document.createTextNode(element)
        listItem.appendChild(itemText)
        list.appendChild(listItem)  
    });

    document.body.appendChild(list)
}
printList()
*/
let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:10
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]



/*******************************************************
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
*******************************************************/
/*
const getTotalScores = array => array.reduce( (  accum, current ) => accum + current.score, 0);

const getAverageScores = (array) => {
    total = getTotalScores(array);
    items = array.length;
    return total/items;
}

const getScore = (arrayScores,signature) =>{
    let signatureScore = arrayScores.filter( (item) => item.signature === signature);
    return signatureScore[0].score;
}*/

/*******************************************************
-Obtener el promedio individual de cada mentor
*******************************************************/ 
/*
let AverageArray = mentorsArray.map( (mentor,index) => {
    let average=getAverageScores(mentor.scores);
    return ({ name: mentor.name, average: average })
});  
*/
//console.log( AverageArray );

const createTd =(child,parent) =>{
    let td=document.createElement("td")
    td.appendChild(child)
    parent.appendChild(td)
    return td
}
let table1 = document.createElement("table")
    table1.setAttribute('id', 'tableMentors');

const printTable =() =>{
    
    
    //thead
    let thead = document.createElement("thead")
    let arrayTitles=["NOMBRE","HTML","CSS","JS","REACT","PROMEDIO",""]
    let rowTitles=document.createElement("tr")
    arrayTitles.forEach(title=>{       
        let tdText=document.createTextNode(title)
        createTd(tdText,rowTitles)
    })
    thead.appendChild(rowTitles)
    table1.appendChild(thead)
    //tbody
    let tbody = document.createElement("tbody")
    let sumAverages=0
    mentorsArray.forEach((element,index) => {
  
        let rowItem=document.createElement("tr")
        let tdNameText=document.createTextNode(element.name)
        createTd(tdNameText,rowItem)
        let sumScores=0
        element.scores.forEach(item=>{
            let tdScoreText=document.createTextNode(item.score)
            td=createTd(tdScoreText,rowItem)          
            sumScores+=item.score
            item.score<9? td.classList.add("bg-warning"): td.classList.add("bg-success")
        })
        average=sumScores/element.scores.length
        sumAverages+=average
        let tdAverageText=document.createTextNode(average)
        tdAverage=createTd(tdAverageText,rowItem)
        //average<9? tdAverage.classList.add("bg-warning"): tdAverage.classList.add("bg-success")
        //
        let bntDelMentor=document.createElement("button")
        bntDelMentor.setAttribute('data-mentor-id', index);
        bntDelMentor.setAttribute('id', index);
        bntDelMentor.setAttribute('class', 'btn-delete');
        bntDelMentor.textContent = 'borrar';
        createTd(bntDelMentor,rowItem)
        tbody.appendChild(rowItem)  
        table1.appendChild(tbody) 
    });
    
    
    //
    
    let tfoot = document.createElement("tfoot")
    let rowfoot=document.createElement("tr")
    
    for(i=1;i<6;i++){
        createTd(document.createTextNode(""),rowfoot)        
    }
    let avgGeneral=sumAverages/mentorsArray.length
    //console.log(avgGeneral)
    let tdAverageGeneralText=document.createTextNode(avgGeneral)
    tdAverageGeneral = createTd(tdAverageGeneralText,rowfoot)
    tfoot.appendChild(rowfoot)
    //avgGeneral<9? tdAverageGeneral.classList.add("bg-warning"): tdAverageGeneral.classList.add("bg-success")
    
    table1.appendChild(tfoot)
    table1.setAttribute('class', 'p-3 m-3 w-75 border text-center');
}
document.body.appendChild(table1)

printTable()

const addTableFunctions = () =>{
    alltd=document.querySelectorAll("td")

    alltd.forEach(celda=>{
        celda.classList.add("border")
    })

    allButtonsDelete=document.querySelectorAll("td button.btn-delete")

    allButtonsDelete.forEach(bntDelete=>{
        bntDelete.addEventListener('click', event => {
            console.log( event.target.innerText )
            console.log( event.target.dataset )
            let mentorId = event.target.dataset.mentorId
            console.log( mentorId )
            deleteMentor(mentorId)
            
           // addTableFunctions()
            console.log(mentorsArray)
        })
    })
    
}    
addTableFunctions()

const countWarningScores = () =>{
    warningScore= document.querySelectorAll("td.bg-warning")
    console.log(warningScore.length)
    return warningScore.length
}

let btn=document.createElement("button")
btn.setAttribute('id', 'countScores');
//btn.textContent = 'Calificaciones en Riesgo';
document.body.appendChild(btn);

document.getElementById('countScores').innerText="Calificaciones en Riesgo"
document.getElementById('countScores').addEventListener('click', function(){
    alert("El numero de calificaciones en riesgo es: " + countWarningScores())
})



const deleteMentor= (idMentor)=>{
    
    mentorsArray.splice(idMentor, 1);
    while (tableMentors.lastElementChild) {
        tableMentors.removeChild( tableMentors.lastElementChild );
    }
    printTable()
    addTableFunctions()
    
}