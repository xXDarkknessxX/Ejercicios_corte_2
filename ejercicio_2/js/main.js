/*Ejercicio 1*/

/*let numeros = [];

for (let i = 0; i < 10; i++) {
  let numero = Math.floor(Math.random() * 100); // Generar un número aleatorio entre 0 y 99
  numeros.push(numero); // Agregar el número al array
}

console.log(numeros);

/*Ejercicio 2 */

/*let usuario = prompt(`digite los valores que desea guardar, todos separados por comas`);
let arreglo1 = usuario.split(`,`);

console.log(arreglo1)
/*ejecicio 3 */

let numerosOrdenar = [10, 40, 30, 20, 15, 5];

numerosOrdenar.sort(function(a, b) {
  return a - b;
});

let numeroMenor = numerosOrdenar[0];
let numeroMayor = numerosOrdenar[numerosOrdenar.length - 1];

console.log("El arreglo ordenado de menor a mayor:", numerosOrdenar);
console.log("El número menor es:", numeroMenor);
console.log("El número mayor es:", numeroMayor);