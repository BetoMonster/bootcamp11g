namesArray=["Jaime","Beto","Mariana"]

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

const printTable =() =>{
    
    let table1 = document.createElement("table")
    //thead
    let thead = document.createElement("thead")
    let arrayTitles=["NOMBRE","HTML","CSS","JS","REACT","PROMEDIO"]
        let rowTitles=document.createElement("tr")
        arrayTitles.forEach(title=>{
            let td=document.createElement("td")
            let tdText=document.createTextNode(title)
            td.appendChild(tdText)
            rowTitles.appendChild(td)
    })
    thead.appendChild(rowTitles)
    table1.appendChild(thead)
    //tbody
    let tbody = document.createElement("tbody")
    mentorsArray.forEach(element => {
  
        let rowItem=document.createElement("tr")
        let tdName=document.createElement("td")
        let tdNameText=document.createTextNode(element.name)
        rowItem.appendChild(tdName)
        tdName.appendChild(tdNameText)
        let sumScores=0
        element.scores.forEach(item=>{
            let td=document.createElement("td")
            let tdText=document.createTextNode(item.score)
            td.appendChild(tdText)
            rowItem.appendChild(td)
            sumScores+=item.score
        })
        average=sumScores/element.scores.length
        //console.log(average)

        let tdAverage=document.createElement("td")
        let tdAverageText=document.createTextNode(average)
        tdAverage.appendChild(tdAverageText)
        rowItem.appendChild(tdAverage)
        

       tbody.appendChild(rowItem)  
       table1.appendChild(tbody) 
    });

    //
    let tfoot = document.createElement("tfoot")
    //let 

    table1.appendChild(tfoot)
    document.body.appendChild(table1)
}
printTable()