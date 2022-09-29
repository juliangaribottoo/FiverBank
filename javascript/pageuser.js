let usuario = localStorage.getItem("usuarios");
let usuariosLocal = JSON.parse(usuario);

/*nombe de usuario*/
document.getElementById('user__name').innerHTML = usuariosLocal.namer;
document.getElementById('saludo__user').innerHTML = `Bienvenido ${usuariosLocal.namer}`


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
function calculador(valorPrestamo, valorCuota){
    return valorPrestamo / valorCuota;
}

function caputarValores(){
    let valorPrestamo = document.getElementById ('rango').value;
    let valorCuota = document.getElementById ('rango__cuotas').value;


    let valor= calculador(valorPrestamo, valorCuota);
    let cuotaFinal = (valor * 12) / 100 + valor;
    let resultadoPrestamo = document.getElementById('resultado__prestamo');
    resultadoPrestamo.textContent = `En total abonara ${valorCuota} cuotas de $${cuotaFinal}, el CFT anual es del 144%. En caso de querer solicitar el prestamo póngase en contacto con nuestro equipo. Muchas gracias`
}

//Modificarresultado
let resultado__prestamo = document.getElementById('resultado__prestamo');
resultado__prestamo.style.border= "2px black solid";
resultado__prestamo.style.fontSize= "2rem";
resultado__prestamo.style.width = "50%";
resultado__prestamo.style.margin = "20px auto"

