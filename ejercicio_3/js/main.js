/*ejercicio 1 */
/*let numero = parseInt(prompt("Introduce un número:"));

if (!isNaN(numero)) {
  let i = 1;

  while (i <= numero) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
} else {
  console.log("No ingresaste un número válido.");
}

/*ejercicio 2*/

/*let numero1 = parseInt(prompt("Introduce el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Introduce el segundo número (entre 1 y 50):"));

if (!isNaN(numero1) && !isNaN(numero2) && numero1 >= 1 && numero1 <= 50 && numero2 >= 1 && numero2 <= 50) {
  let i = 1;

  while (i <= 50) {
    if (i === numero1 || i === numero2) {
      console.log(i + " ¡Lotería!");
    } else {
      console.log(i);
    }
    i++; 
  }
} else {
  console.log("Uno o ambos números ingresados no son válidos. Asegúrate de ingresar números entre 1 y 50.");
}
/*ejercicio 3 */

// Declarar un arreglo para almacenar los números
const numeros = [];

let numero = parseInt(prompt("Introduce un número (ingresa 0 para terminar):"));

while (numero !== 0) {
  if (!isNaN(numero)) {
    numeros.push(numero);
  }
  numero = parseInt(prompt("Introduce otro número (ingresa 0 para terminar):"));
}
console.log(numeros);
/*ejercicio 4 */
// Declarar una cadena para almacenar las palabras capturadas
/*let palabras = "";

let entrada = prompt("Introduce una letra o palabra (presiona Enter para terminar):");
while (entrada !== "") {
  palabras += entrada + " ";
  entrada = prompt("Introduce otra letra o palabra (presiona Enter para terminar):");
}
console.log(palabras);

/*ejercicio 5 */


let diaSemana = prompt("Introduce un día de la semana: (por favor utilizar solo minusculas)");

while (diaSemana !== "domingo") {

  switch (diaSemana) {
    case "lunes":
      alert("¡Es lunes y vamos con toda!");
      break;
    case "martes":
      alert("¡Es martes que la energia no se pierda!");
      break;
    case "miercoles": 
      alert("¡Es miércoles porfin es mitad de semana!");
      break;
    case "jueves":
      alert("¡Animo  porque hoy es Juernes!");
      break;
    case "viernes":
      alert("A descansar!!!");
      break;
    case "sabado": 
      alert("Puedes hacer lo que quieras!");
      break;
    default:
      alert("el dia ingresado no es valido, por favor intenta de nuevo");
      break;
  }

  diaSemana = prompt("Introduce un dia de la semana: (por favor utilizar solo minusculas)");
}

// Mostrar mensaje específico para domingo y finalizar el programa
alert("Ve a descansar");
