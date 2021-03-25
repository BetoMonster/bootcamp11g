/********************************************************************************************************

    Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados:
    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 

*********************************************************************************************************/

let phrase = "La mejor forma de predecir el futuro es creándolo";

//1
let snakeCasePhrase=phrase.replace(/\s/g, "_").toLowerCase();
console.log('frase en snake_case: ',snakeCasePhrase);

//2
let kebabCasePhrase=phrase.replace(/\s/g, "-").toLowerCase();
console.log('frase en kebab-case: ',kebabCasePhrase);

//3
let phraseVowelToUpperCase='';
for (var i = 0; i < phrase.length; i++) {
    phrase.charAt(i).match(/[áéíóúàèìòùäëïöüaeiou]/)?phraseVowelToUpperCase+=phrase.charAt(i).toUpperCase():phraseVowelToUpperCase+=phrase.charAt(i);    
}
console.log('Frase con todas las vocales en mayúscula: ',phraseVowelToUpperCase);

//4
let firstTenLetters=phrase.substr(0, 10);
console.log('Los primeros 10 caracteres de la frase: ',firstTenLetters);

//5
let lastTenLetters=phrase.slice(-10);
console.log('Los últimos 10 caracteres de la frase: ',lastTenLetters);