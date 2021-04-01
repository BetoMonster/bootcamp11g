/*
Realizar una función que reciba como parametro el nombre completo de un koder y retorne sus iniciales. Ejemplo:

 Input: 'Fernanda Palacios Vera'
 Output: F. P. V.
Realizar una función que reciba n parametros de tipo string y validar por cada string cuantas vocales tiene y retornar el resultado en un objeto. Ejemplo:

Input:
   string1: 'Hola Mundo'
   string2: 'Soy fullsctack',
   .
   .
   .
Output: 
   {
     HolaMundo: 4,
     fullsctack: 3
   }
*/
/*const initials = (name) =>{
    let res =  name.split(" ");
    let firstLetter='';
    res.forEach((item)=> {
        firstLetter += item.charAt(0) +'. '
    }    
    )    
    return firstLetter
}*/

const initials = (name) =>{
    let res =  name.split(" ");    
    firstLetter= res.reduce((accum,item)=> accum += item.charAt(0) +'. ' ,'')    
    return firstLetter
}
console.log(initials('Fernanda Palacios Vera'))

const countVowels = (...string) =>{
    console.log() 
    let object={}   
    string.forEach((item)=> {
        const quantity = item.match(/[aeiou]/g).length 
        object[item.replace(/\s/,"")]=quantity
    }    
    )    
    return object
}
console.log(countVowels('Hola Mundo','Soy fullsctack'))


///******** */

//Del siguiente arreglo llamada 'arrayNames':

const arrayNames = [
     ["Ruben", "Flores"],
     ["Andre", "Vazquez"],
     ["Fernanda", "Palacios"],
     ["Goerge", "Camarillo"],
     ["Ale", "Paez"],
     ["Shari", "Andrade"],
     ["Erick", "Trujillo"],
     ["Arce", "Gutiérrez"],
     ["Juan", "Hernandez"]
 ]
/*
obtener de cada nombre la siguiente salida:

Ruben Flores R.B.
Andre Vazquez A.V.
Fernanda Palacios F.P.
George Camarillo G.C.
Ale Paez A.P.
*/

let completeName = arrayNames.map((name)=>{
    let fullName=''
    name.forEach((words)=> {
        fullName +=words +" "
        
    })
    
    return fullName + initials(fullName.trim())
})

console.log(completeName)


/*
Del siguiente arreglo:
*/
arrayKoders = [
	[
		["name", "Ruben"],
		["lastName", "Alvarez"],
		["generation", 1],
        	["bootcamp", "python"],
        	["score", 90]
	],
	[
		["name", "Andre"],
		["lastName", "Alvarez"],
		["generation", 1],
        	["bootcamp", "python"],
        	["score", 90]
	],
	[
		["name", "Ale"],
		["lastName", "Paez"],
		["generation", 1],
        	["bootcamp", "python"],
        	["score", 98]
	],
	[
		["name", "Juan Pi"],
		["lastName", "López"],
		["generation", 10],
        	["bootcamp","JavaScript"],
        	["score", 95]
	],
    [
	
		["name", "Cintia"],
		["lastName", "Gomez"],
		["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 85]
	],
	[
		["name", "Shari"],
		["lastName", "Andrade"],
		["generation", 10],
        	["bootcamp", "JavaScript"],
        	["score", 90]
	],
	[
		["name", "Arce"],
		["lastName", "Gutierrez"],
		["generation", 10],
        	["bootcamp", "JavaScript"],
        	["score", 90]
	],
	[
		["name", "JC"],
		["lastName", "Hernandez"],
		["generation", 10],
        	["bootcamp", "JavaScript"],
        	["score", 90]
	],
	[
		["name", "Erick"],
		["lastName", "Trujillo"],
		["generation", 10],
        ["bootcamp", "JavaScript"],
        ["score", 90]
	]
]

/*Crear un array de objetos de tipo Koder que se encuentran en el array arrayKoders. quedando de la siguiente manera:

newArrayKoders = [
    {
        name: "Ruben",
        lastName: "Flores",
        generation: 1,
        bootcamp: "python",
        score: 90
    },
    {
        name: "Andre",
        lastName: "Vazquez",
        generation: 1,
        bootcamp: "python",
        score: 90
    },
    .
    .
    .
 
]*/

const newArrayKoders =arrayKoders.map((arrayProperties) =>{

	const objectKoder = arrayProperties.reduce((object,koderProperty)=>{
		const key = koderProperty[0]
		const value= koderProperty[1]
		object[key]=value
		return object
	},{})
	
	//return new Koder(objectKoder.name,objectKoder.lastName.......)
    return objectKoder

})

console.log(newArrayKoders)

/*
Una vez teniendo el array de newArrayKoders obtener los siguientes datos:

Obtener los koders que se encuentren en el Bootcamp de Python
Obtener los koders que se encuentren en el bootcamp de JS
Obtener el promedio general de los todos los koders registrados
DOM -> Pintar los koders en una tabla (utilizando los métodos para manipular el DOM)*/