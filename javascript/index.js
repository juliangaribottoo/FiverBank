addEventListener('load',inicio,false);

function inicio(){
    document.getElementById('rango').addEventListener('change',cambioPrestamo,false);
}
function cambioPrestamo(){
    document.getElementById('rango__prestamo').innerHTML= document.getElementById('rango').value;
}

addEventListener('load',inicioCuota,false);

function inicioCuota(){
    document.getElementById('rango__cuotas').addEventListener('change',cambioCuotas,false);
}
function cambioCuotas(){
    document.getElementById('rango__cuotas1').innerHTML= document.getElementById('rango__cuotas').value;
}

function calculador(prestamo, cuotas){
    return prestamo / cuotas;
}

let cont1=document.getElementById('cont1'),
cont2=document.getElementById('cont2'),
cont3=document.getElementById('cont3')
let c1=0, c2=0, c3=0,
tiem=25

let timpo1 = setInterval(() => {
    cont1.textContent=c1+=100
    if(c1===65000){
        clearInterval(timpo1)
    }
}, 1);

let timpo2 = setInterval(() => {
    cont2.textContent=c2+=100000
    if(c2===75000000){
        clearInterval(timpo2)
    }
}, 1);

let timpo3 = setInterval(() => {
    cont3.textContent=c3+=1
    if(c3===5){
        clearInterval(timpo3)
    }
}, 600);

const operacion = prompt("Indiquenos que operacion desea realizar:1)Simular un prestamo, 2)solicitar tarjeta de credito, 3)cerrar mi cuenta, 4)contactarme con un asesor");
const buscado = opciones.find(opcion => opcion.id == operacion);
