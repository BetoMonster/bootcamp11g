/********************************************************************************

    var phrase = "La mejor forma de predecir el futuro es creándolo"
    1- saber la cantidad de palabras
    2- saber la cantidad de "a"
    3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
        "amjrf"
    4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares

********************************************************************************/

let phrase = "La mejor forma de predecir el futuro es creándolo";
let lengthPrase= phrase.length;

//1
let words=phrase.split(' ');
console.log('numero de palabras: ',words.length);
//2
let arrayA=phrase.match(/[aá]/gi);
console.log('numero que aparece la letra "a": ',arrayA.length);


evenCharacters="";
oddCharacters="";
for(var i = 0; i < lengthPrase; i++) {
    if(i%2===0){
        evenCharacters += phrase.charAt(i);
    }else{
        oddCharacters += phrase.charAt(i);
    }
	
}
//3
console.log('Frase con caracteres nones: ',oddCharacters);
//4
console.log('Frase con caracteres pares: ',evenCharacters);
