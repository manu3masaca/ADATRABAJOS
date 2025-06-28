// Para practicar la implementación del algoritmo de búsqueda binaria,
// vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
// la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la
// solución.
// Dada la siguiente lista: let lista = [1,2,3,4,5,6,7,8,9,10,11];
// Utilizar el algoritmo de búsqueda binaria para responder los siguientes
// ítems:
// o ¿Cuál es la posición del número 1?
// o ¿Cuál es la posición del número 5?
// o ¿Cuál es la posición del número 6?
// o ¿Cuál es la posición del número 9?
// o ¿Cuál es la posición del número 11?
// Sabemos que responder estas preguntas es extremadamente fácil, ya
// que podemos leer el array, y determinar con un cálculo visual la posición
// de cada elemento, pero, la propuesta que les hago es que codeen un
// algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
// 6, y nos indique por consola la posición del mismo.
// El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir
// complejidad extra

// Lista de números 
let lista = [1,2,3,4,5,6,7,8,9,10,11];

// Función de búsqueda binaria
function busquedaBinaria(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === objetivo) {
      return medio; // Retorna la posición
    } else if (arr[medio] < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1; // No encontrado
}

// Resultados por consola
console.log("Posición del número 1:", busquedaBinaria(lista, 1));
console.log("Posición del número 5:", busquedaBinaria(lista, 5));
console.log("Posición del número 6:", busquedaBinaria(lista, 6));
console.log("Posición del número 9:", busquedaBinaria(lista, 9));
console.log("Posición del número 11:", busquedaBinaria(lista, 11));