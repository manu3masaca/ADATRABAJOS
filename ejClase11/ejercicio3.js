// Crea un programa que le pida al usuario un número positivo. El programa deberá contar desde el 1 hasta ese número 
// e imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un número positivo
let numero = parseInt( prompt("Ingrese un número positivo: "));

// imprimir valores del 1 al número ingresado
for (let i = 1; i <= numero; i++) {
    console.log(i);
}