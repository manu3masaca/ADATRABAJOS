//vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima. 
// Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes
//(asignándoles los valores numéricos 18 y 99 respectivamente). Por último, Deberás pedirle al usuario que 
// ingrese su edad para validarla usando parseInt.

const prompt = require('prompt-sync')();

//fijar las constantes
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

//pedir al usuario que ingrese su edad
let edad = parseInt(prompt('Ingrese su edad: '));

//validar la edad
 if (edad < EDAD_MINIMA || edad > EDAD_MAXIMA) {
     console.log("¡ALERTA! acceso denegado");}
 else {console.log(" acceso permitido");}
