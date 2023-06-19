const semaforo = [`Images/amarillo.png`,`Images/verde.png`,`Images/rojo.png`];

let i = 0;

setInterval(cambiaLuz, 3000)
function cambiaLuz(){
    i= (i + 1) % semaforo.length;
    const imgSema = document.getElementById(`semafo`);
    imgSema.src = semaforo[i];
}