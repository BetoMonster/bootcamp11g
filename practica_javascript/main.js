
//ejercicio 1
function ejercicio1() {
  var peso = parseFloat(prompt("Escribe tu peso en Kilogramos:"));

  var altura = parseFloat(prompt("Escribe tu altura en Metros:"));
  
  //var myIMC = parseFloat(prompt("Escribe tu valor de IMD del 15 al 50"));
  var myIMC = peso/(altura*altura)
  console.log(myIMC)

  switch(true){
      // Peso Inferior
      case myIMC < 18.5:
        alert("Tu peso es inferior al normal");
      break;
      // Peso Normal
      case myIMC >= 18.5 && myIMC <= 24.9:
        alert("Tu peso es normal");
      break;
      // Peso Superior al Normal!
      case myIMC >= 25.0 && myIMC <= 29.9:
        alert("Tu peso es superior al normal!");
      break;
      // Obesidad
      case myIMC >= 30.0:
        alert("TIENES OBESIDAD!!!");
      break;
  }
}


//ejercicio 2
function ejercicio2() {

  var myCountry = prompt("Escribe tu pais de origen: \n\nMexico \nAustralia \nCanada \nBrasil \nReino Unido");
  var myHeight = parseFloat(prompt("Escribe tu altura en cm. Ejem: 164, 174, 182:"));
  var isWoman = confirm("¿Eres Mujer?");
  var general = ""

  switch(myCountry){
      // MEXICO
      case "Mexico":
        switch(true){
          //  Inferior General
          case myHeight < 160.8:
            general = " e inferior al promedio general";
          break;
          //  Superior General
          case myHeight > 160.8:
            general =" y superior al promedio general";
          break;
          //  igual General
          default:
            general =" e igual al promedio general";
          break;
        }  
        if(isWoman){
          switch(true){
            
            //  Inferior
            case myHeight < 160.8:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Mujer" + general);
            break;
            //  Superior
            case myHeight > 160.8:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Mujer" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Mujer" + general);
            break;
          }  
        }else{
          switch(true){
            
            //  Inferior
            case myHeight < 170:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Varón" + general);
            break;
            //  Superior
            case myHeight > 170:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Varón" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Varón" + general);
            break;
          }  
        }
      break;

      // AUSTRALIA
      case "Australia":
        switch(true){
          //  Inferior General
          case myHeight < 172.6:
            general = " e inferior al promedio general";
          break;
          //  Superior General
          case myHeight > 172.6:
            general =" y superior al promedio general";
          break;
          //  igual General
          default:
            general =" e igual al promedio general";
          break;
        }  
        if(isWoman){
          switch(true){
            
            //  Inferior
            case myHeight < 165.9:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Mujer" + general);
            break;
            //  Superior
            case myHeight > 165.9:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Mujer" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Mujer" + general);
            break;
          }  
        }else{
          switch(true){
            
            //  Inferior
            case myHeight < 179.2:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Varón" + general);
            break;
            //  Superior
            case myHeight > 179.2:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Varón" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Varón" + general);
            break;
          }  
        }
      break;

      // CANADA
      case "Canada":
        switch(true){
          //  Inferior General
          case myHeight < 171.0:
            general = " e inferior al promedio general";
          break;
          //  Superior General
          case myHeight > 171.0:
            general =" y superior al promedio general";
          break;
          //  igual General
          default:
            general =" e igual al promedio general";
          break;
        }  
        if(isWoman){
          switch(true){
            
            //  Inferior
            case myHeight < 163.9:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Mujer" + general);
            break;
            //  Superior
            case myHeight > 163.9:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Mujer" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Mujer" + general);
            break;
          }  
        }else{
          switch(true){
            
            //  Inferior
            case myHeight < 178.1:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Varón" + general);
            break;
            //  Superior
            case myHeight > 178.1:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Varón" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Varón" + general);
            break;
          }  
        }
      break;

      // BRASIL
      case "Brasil":
        switch(true){
          //  Inferior General
          case myHeight < 167.3:
            general = " e inferior al promedio general";
          break;
          //  Superior General
          case myHeight > 167.3:
            general =" y superior al promedio general";
          break;
          //  igual General
          default:
            general =" e igual al promedio general";
          break;
        }  
        if(isWoman){
          switch(true){
            
            //  Inferior
            case myHeight < 160.9:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Mujer" + general);
            break;
            //  Superior
            case myHeight > 160.9:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Mujer" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Mujer" + general);
            break;
          }  
        }else{
          switch(true){
            
            //  Inferior
            case myHeight < 173.6:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Varón" + general);
            break;
            //  Superior
            case myHeight > 173.6:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Varón" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Varón" + general);
            break;
          }  
        }
      break;

      // REINO UNIDO
      case "Reino Unido":
        switch(true){
          //  Inferior General
          case myHeight < 171.0:
            general = " e inferior al promedio general";
          break;
          //  Superior General
          case myHeight > 171.0:
            general =" y superior al promedio general";
          break;
          //  igual General
          default:
            general =" e igual al promedio general";
          break;
        }  
        if(isWoman){
          switch(true){
            
            //  Inferior
            case myHeight < 164.4:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Mujer" + general);
            break;
            //  Superior
            case myHeight > 164.4:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Mujer" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Mujer" + general);
            break;
          }  
        }else{
          switch(true){
            
            //  Inferior
            case myHeight < 177.5:
              alert("Tu estatura "+myHeight +":\n\n Es inferior al promedio como Varón" + general);
            break;
            //  Superior
            case myHeight > 177.5:
              alert("Tu estatura "+myHeight +":\n\n Es superior al promedio como Varón" + general);
            break;
            //  igual
            default:
              alert("Tu estatura "+myHeight +":\n\n Es igual al promedio como Varón" + general);
            break;
          }  
        }
      break;

      // OTRO PAIS
      default:
      alert("no hay datos de estatura de este pais")
      break;
  }
}



//ejercicio 3
function ejercicio3() {
  var lado = parseFloat(prompt("¿Cuánto mide el lado del cubo?"));
    var sustancia = prompt("¿De qué sustancia es el cubo? \n\nAcero, Cobre, Oro, Plata o Diamante");
  
    var densidad = Math.pow(parseFloat(lado), 3);
    var dAcero = densidad * 7850;
    var dCobre = densidad * 8940;
    var dOro = densidad * 19300;
    var dPlata = densidad * 10490;
    var dDiamante = densidad * 3515;
    switch(true){
        // Acero
        case sustancia == "Acero":
          alert("Tu cubo de Acero tiene una densidad de: " + dAcero);
          console.log(lado)
          console.log(densidad)
          console.log(dAcero)
        break;
        // Cobre
        case sustancia == "Cobre":
          alert("Tu cubo de Cobre tiene una densidad de: " + dCobre);
        break;
        // Oro
        case sustancia == "Oro":
          alert("Tu cubo de Oro tiene una densidad de: " + dOro);
        break;
        // Plata
        case sustancia == "Plata":
          alert("Tu cubo de Plata tiene una densidad de: " + dPlata);
        break;
        // Diamante
        case sustancia == "Diamante":
          alert("Tu cubo de Diamante tiene una densidad de: " + dDiamante);
        break;
        case sustancia != "Diamante" || "Acero" || "Cobre" || "Oro" || "Plata":
          alert("Esa sustancia no esta en la lista");
        break;
    }
}

