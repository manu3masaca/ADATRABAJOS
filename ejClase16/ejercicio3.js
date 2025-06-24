//Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer
// número de la lista que sea mayor a 10. Recuerda que el resultado debe ser
// únicamente el primer número que cumpla esta condición, no todos los
// números que lo hagan.

// Lista de números
let numeros = [5, 8, 12, 20, 3];

// Encontrar el primer número mayor a 10
let mayorA10 = numeros.find(function(numero) {
  return numero > 10;
});

// Mostrar el resultado en consola
console.log(mayorA10);