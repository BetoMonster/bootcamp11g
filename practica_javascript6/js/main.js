var kodersList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]
/*
    -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
*/
const createNewArray = () => {
    let newArray = []
    for( i = 0; i < kodersList.length; i++){
      newArray.push( kodersList[i].join(" "))
    }
    return newArray
  }

  const findName = (name,arrayNames) => {
    for( i = 0; i < arrayNames.length; i++){
       (kodersList[i].search(name)>=0) ? exists=true;
    }
    return newArray
  }  

var joinNames=createNewArray();
console.log(joinNames);

let name=prompt('Nombre a buscar');




/*

function printNames(m,n){
    for (i = m; i <= n; i++) {     
        console.log(arrayNamesKoders[i]);
    }    
}

let arrayLegnth= arrayNamesKoders.length;

printNames(0,arrayLegnth-1);

let aditionalNumber=parseInt(prompt('¿Deseas agregar mas koder? Escribe el número de koders a registrar o 0 para rinalizar'));

for ( i = arrayLegnth+1; i  <= arrayLegnth+aditionalNumber; i++) {
    getName(i);
}
printNames(arrayLegnth,arrayNamesKoders.length-1);

let deleteItem=confirm('¿desea borrar aleatoreamente un nombre de la lista?');
if (deleteItem){
    let randomElement = arrayNamesKoders[Math.floor(Math.random() * arrayNamesKoders.length-1)];
    arrayNamesKoders.splice(randomElement, 1);
}
printNames(0,arrayNamesKoders.length-1);
*/