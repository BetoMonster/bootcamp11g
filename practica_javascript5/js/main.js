/********************************************************************************************************

    -Crear una función que pida al usuario el número de koders a registrar
    -tantas veces como koders se deseen registrar:
        -Pedir el nombre del koder
        -Pedir el apellido del koder
        -Imprimir el nombre completo del koder

*********************************************************************************************************/
/*
let i=0;
let number=parseInt(prompt('Escribe el número de koders a registrar:'));
function getName(n){
    let name=prompt('Escribe su nombre:');
    let lastname=prompt('Escribe tu apellido:');
    console.log(`${i}. ${name} ${lastname}`);
}
for (i = 1; i <= number; i++) {
    getName(i);
}
*/

/********************************************************************************************************

    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders

    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista


*********************************************************************************************************/        

let i=0;
let number=parseInt(prompt('Escribe el número de koders a registrar:'));
var arrayNamesKoders = [];

function getName(n){
    let name=prompt('Escribe  nombre y apellido:');
    arrayNamesKoders.push(`${n} ${name}`);
    
}

function printNames(m,n){
    for (i = m; i <= n; i++) {     
        console.log(arrayNamesKoders[i]);
    }    
}
for (i = 1; i <= number; i++) {
    getName(i);
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