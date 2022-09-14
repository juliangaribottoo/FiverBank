
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


//SIMULADOR DE PRESTAMO

const rangoPrestamo = document.getElementById ('rango');
const textoPrestamo = document.getElementById ('rango__prestamo');
const rangoCuotas = document.getElementById ('rango__cuotas');
const textoCuotas = document.getElementById ('rango__cuotas1');

rangoPrestamo.oninput = ()=>{
    textoPrestamo.innerHTML = rangoPrestamo.value
}

rangoCuotas.oninput = ()=>{
    textoCuotas.innerHTML = rangoCuotas.value
}

//caputar y mostrar resultado prestamo

function caputarValores(){
    let valorPrestamo = document.getElementById ('rango').value;
    let valorCuota = document.getElementById ('rango__cuotas').value;

    function calculador(valorPrestamo, valorCuota){
        return valorPrestamo / valorCuota;
    }
    let valor= calculador(valorPrestamo, valorCuota);
    let cuotaFinal = (valor * 12) / 100 + valor;
    let resultadoPrestamo = document.getElementById('resultado__prestamo');
    resultadoPrestamo.textContent = `En total abonara ${valorCuota} cuotas de $${cuotaFinal}, el CFT anual es del 144%. En caso de querer solicitar el prestamo póngase en contacto con nuestro equipo. Muchas gracias`
}


