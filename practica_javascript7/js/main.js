/*********************************************************************
la práctica :
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*********************************************************************/

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
const getTotalScores = array => array.reduce( (  accum, current ) => accum + current.score, 0);

const getAverageScores = (array) => {
    total = getTotalScores(array);
    items = array.length;
    return total/items;
}

const getScore = (arrayScores,signature) =>{
    let signatureScore = arrayScores.filter( (item) => item.signature === signature);
    return signatureScore[0].score;
}

const getArrayBySignature = (originalArray,signature) =>{
    let arrayByCategory=[];
    originalArray.forEach( (mentor, index) => {
    
        scoreSignature=getScore(mentor.scores,signature);
        arrayByCategory[index] =({ name: mentor.name, score: scoreSignature});   

    })
    return arrayByCategory;
}

let arrayHtml    = getArrayBySignature(mentorsArray,"HTML");
let arrayCSS     = getArrayBySignature(mentorsArray,"CSS");
let arrayJS      = getArrayBySignature(mentorsArray,"JS");
let arrayReactJS = getArrayBySignature(mentorsArray,"ReactJS");

let averageHtml    = getAverageScores(arrayHtml);
let averageCSS     = getAverageScores(arrayCSS);
let averageJS      = getAverageScores(arrayJS);
let averageReactJS = getAverageScores(arrayReactJS);

console.log('HTML: ', averageHtml );
console.log('CSS: ', averageCSS );
console.log('JS: ', averageJS );
console.log('ReactJS: ', averageReactJS );


/*******************************************************
-Obtener el promedio individual de cada mentor
*******************************************************/ 

let AverageArray = mentorsArray.map( (mentor,index) => {
    let average=getAverageScores(mentor.scores);
    return ({ name: mentor.name, average: average })
});  

console.log( AverageArray );

/*******************************************************
-Obtener un array de strings con la siguiente forma:
"Mi nombre es {nombre} y mi promedio es de {promedio}"
*******************************************************/ 

let AverageText = AverageArray.map( (mentor) =>  `Mi nombre es ${mentor.name} mi promedio es de  ${mentor.average}`);

console.log( AverageText );

/*******************************************************
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*******************************************************/

filterAverage = AverageArray.filter( (mentor) => mentor.average > 9.5 );

console.log( filterAverage.length>0?filterAverage:'No se encontro ningún mentor con promedio superor a 9.5' );