/*Pregunta 1*/ 
/*    let bella = prompt(`Responde con un "si" o un "no"¿Eres bellisimo/a?.`);

        if (bella=="si"){
            console.log(`Ciertamente`);
        }else if (bella=="no"){
            console.log(`No te creo`)
        }else{
            console.log(`Opcion Errada`);
        }


/*Pregunta 2*/ 
/*   let numero = prompt("Ingrese un número: ");

        if (numero % 2 === 0) {
        console.log(numero + " es divisible por 2");
        } else {
        console.log(numero + " no es divisible por 2");
        }


/*Pregunta 3*/ 
/*    let numero = prompt("Ingrese un número: ");

        if (numero % 2 === 0) {
        alert(numero + " Es Par");
        } else {
        alert(numero + " Es Inpar");
        }


/*Pregunta 4*/
/*    let numero = prompt("Ingrese un número boleto: ");

        if (numero == 1000) {
        console.log("Ganaste un premio");
        } else {
        console.log("Lo sentimos, sigue participando");
        }


/*Pregunta 5*/ 
/*    let numero1 = prompt("Ingrese el primer numero: ");
    let numero2 = prompt("Ingrese el segundo numero:"):
        if (numero1 > numero2) {
            console.log(`El ${numero2} es menor que ${numero1}`);
        } else if (numero1 < numero2){
            console.log(`El ${numero1} es menor que ${numero2}`);
        }else{
            console.log(`los numeros son iguales`)
        }

/*pregunta 6*/ 
/*    let numero1 = prompt("Ingrese el primer numero: ");
    let numero2 = prompt("Ingrese el segundo numero: ");
    let numero3 = prompt("Ingrese el tercer numero: ");
       
    if(numero1 == numero2 && numero1 > numero3){
            console.log(`El ${numero1} y el numero ${numero2} son iguales y mayores que el ${numero3}`);
        }else if(numero2 == numero3 && numero2 > numero1){
            console.log(`El ${numero2} y el numero ${numero3} son iguales y mayores que el ${numero1}`);
        }else if(numero3 == numero1 && numero3 > numero2){
            console.log(`El ${numero3} y el numero ${numero1} son iguales y mayores que el ${numero2}`);
        }else if (numero2 > numero1 && numero2 > numero3){
            console.log(`El ${numero2} es mayor que ${numero1} y ${numero3}`);
        }else if(numero3 > numero1 && numero3 > numero2){
            console.log(`El ${numero3} es mayor que ${numero1} y ${numero2}`);
        }else if (numero1 > numero2 && numero1 > numero3) {
            console.log(`El ${numero1} es mayor que ${numero2} y ${numero3}`);
        }


/*pregunta 7*/
    /*let diaSemana = prompt(`Ingrese el dia de la semana: ("Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo)`);

        if(diaSemana === "Lunes" || diaSemana === "lunes"){
            console.log(`No ganaste, lo siento :'(`);
            }else if(diaSemana === "Martes" || diaSemana === "martes"){
                console.log(`Uff casi ganas!!`);
            }else if(diaSemana === "Miercoles" || diaSemana === "miercoles"){
                console.log(`No Aun no, pero estas serca`);
            }else if(diaSemana === "Jueves" || diaSemana === "jueves"){
                console.log(`¡Tan serca pero tan lejos!`);
            }else if(diaSemana === "Viernes" || diaSemana === "viernes"){
                console.log(`Ganaste!!! :D `);
            }else if(diaSemana === "Sabado" || diaSemana === "sabado"){
                console.log(`Creo que te alejaste un poco :S`);
            }else if(diaSemana === "Domingo" || diaSemana === "domingo"){
                console.log(`No, este no es!`);
            }else{
                console.log(`Estas seguro que leiste bien?`);
            }

/*Pregunta 8*/
    /*let nota = prompt(`Digite la nota del estudiante: `);

        if(nota > 0 && nota < 11 ){
            if(nota < 6){
                console.log(`Reprobado`);
            }else if(nota >= 6 && nota <= 8 ){
                console.log(`Regular`);
            }else if(nota == 9){
                console.log(`Bien`);
            }else if(nota == 10){
                console.log(`Excelente`);
            }
        }else{
            alert(`¡Error! Nota fuera de los rangos establecidos, Intente nuevamente.`);
        }

/*Pregunta 9*/
/*let costoTopping = prompt(`Porfavor seleccione el topping que desea en su helado:
1. Sin topping
2. Topping de Oreo
3. Topping de KitKat
4. topping de Brownie
`)
        if(costoTopping == 1 || costoTopping === "Sin topping" || costoTopping === "Sin Topping" || costoTopping === "sin topping"){
            alert(`El costo es de: 50 MXN`);
        }else if(costoTopping == 2 || costoTopping === "Topping de oreo" || costoTopping === "Topping De Oreo" || costoTopping === "topping de oreo" || costoTopping === "Topping de Oreo" || costoTopping === "topping De oreo"){
            alert(`El costo es de: 60 MXN `);
        }else if(costoTopping == 3 || costoTopping === "Topping de kitkat" || costoTopping === "Topping De KitKat" || costoTopping === "topping de kitkat" || costoTopping === "Topping de Kitkat" || costoTopping === "topping De Kitkat"){
            alert(`El costo es de: 65 MXN`);
        }else if(costoTopping == 4 || costoTopping === "Topping de brownie" || costoTopping === "Topping De Brownie" || costoTopping === "topping de brownie" || costoTopping === "Topping de Brownie" || costoTopping === "topping De brownie"){
            alert(`El costo es de: 70 MXN`);
        }else{
            alert(`Seleccion errada, intente denuevo`);
        }

/*pregunta 10*/
let course = 4999;
let carrera = 3999;
let master = 2999;
let descuentoFacebook = 20;
let descuentoGoogle = 15;
let descuentoJesua = 50;
let tiempoCourse = 2;
let tiempoCarrera = 6;
let tiempoMaster = 12;

let carreraUni = prompt(`Porfavor seleccione una de las 3 distintas opciones que tenemos en el momento:
(Digite el numero correspondiente a la carrera)
1. Course
2. Carrera
3. Master
`);
        if(carreraUni == 1 ){
            alert(`El costo del curso es de $${course} MXN`);
            let beca = prompt(`¿Cuenta usted con alguna de estas becas?
            (Digite el numero correspondiente a la carrera)
            1. Beca facebook
            2. Beca Google
            3. Beca Jesua
            4. Ninguna
            `);
            if(beca == 1){
                
                alert(`el precio es ($${course} MXN)
                El precio de la opcion que tomaste en total seria de ($`+ ((( course * descuentoFacebook) * tiempoCourse)/100)+ ` MXN)por la duracion del curso (`+ tiempoCourse + ` meses)
                `);
                
            }else if (beca == 2){

                alert(`el precio es $ ${course} Mxn
                El precio de la opcion que tomaste en total seria de ($`+ ((( course * descuentoGoogle) * tiempoCourse)/100)+ ` MXN)por la duracion del curso (`+ tiempoCourse + ` meses)
                `);

            }else if (beca == 3){

                alert(`el precio es $ ${course} Mxn
                El precio de la opcion que tomaste en total seria de ($`+ ((( course * descuentoJesua ) * tiempoCourse)/100)+ ` MXN)por la duracion del curso (`+ tiempoCourse + ` meses)
                `);

            }else if (beca == 4){

                alert(`el precio es $ ${course} Mxn
                El precio de la opcion que tomaste en total seria de ($`+  course * tiempoCourse + ` MXN)por la duracion del curso (`+ tiempoCourse + ` meses)
                `);

            }
        }else if(carreraUni == 2 ){

            alert(`El costo del curso es de $${carrera} MXN`);
            let beca = prompt(`¿Cuenta usted con alguna de estas becas?
            (Digite el numero correspondiente a la carrera)
            1. Beca facebook
            2. Beca Google
            3. Beca Jesua
            4. Ninguna
            `);
            if(beca == 1){
                
                alert(`el precio es ($${carrera} MXN)
                El precio de la opcion que tomaste en total seria de ($`+ ((( carrera * descuentoFacebook) * tiempoCarrera)/100)+ ` MXN)por la duracion del curso (`+ tiempoCarrera + ` meses)
                `);
                
            }else if (beca == 2){

                alert(`el precio es $ ${carrera} Mxn
                El precio de la opcion que tomaste en total seria de ($`+ ((( carrera * descuentoGoogle) * tiempoCarrera)/100)+ ` MXN)por la duracion del curso (`+ tiempoCarrera + ` meses)
                `);

            }else if (beca == 3){

                alert(`el precio es $ ${carrera} Mxn
                El precio de la opcion que tomaste en total seria de ($`+ ((( carrera * descuentoJesua ) * tiempoCarrera)/100)+ ` MXN)por la duracion del curso (`+ tiempoCarrera + ` meses)
                `);

            }else if (beca == 4){

                alert(`el precio es $ ${carrera} Mxn
                El precio de la opcion que tomaste en total seria de ($`+  carrera * tiempoCourse + ` MXN)por la duracion del curso (`+ tiempoCarrera + ` meses)
                `);

            }
            
        }

/*Variba*/ 