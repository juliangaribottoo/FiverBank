let usuario = localStorage.getItem("usuarios");
let usuariosLocal = JSON.parse(usuario);

/*nombe de usuario*/
document.getElementById('user__name').innerHTML = usuariosLocal.namer;
document.getElementById('saludo__user').innerHTML = `Bienvenid@ ${usuariosLocal.namer}`;

/*simulacion maquina de escribir*/
let efectoMaquina = document.getElementById('maquina__escribir');
let str = efectoMaquina.innerHTML;
let speed = 200;
let i = 0; 
efectoMaquina.innerHTML = "";
/*efecto*/
function escribir() {
    if(i < str.length){
        efectoMaquina.innerHTML += str.charAt(i);
        i++;
        setTimeout(escribir,speed)
    }
}
setTimeout (escribir, speed)

/*Mostrar Saldo*/
let mostrar = document.getElementById('ojo');
let valoresSaldos = document.getElementById('saldos');
let ocultar = valoresSaldos.innerHTML;
mostrar.addEventListener('click', ()=>{
    if (ocultar == "$120.000"){
        valoresSaldos.innerHTML = "****"
        ocultar = valoresSaldos.innerHTML
    }else {
        valoresSaldos.innerHTML = "$120.000"
        ocultar = valoresSaldos.innerHTML
    }
})




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
    let resultadoPrestamo = Swal.fire(`En total abonara ${valorCuota} cuotas de $${cuotaFinal}, el CFT anual es del 144%. En caso de querer solicitar el prestamo póngase en contacto con nuestro equipo. Muchas gracias`)
    setTimeout (()=>{
        Swal.fire({
            title: 'Queres que te enviemos la cotizacion a tu mail?',
            text: `llegara directamente a tu mail registrado ${usuariosLocal.mail}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si envienmelo!'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Enviado!',
                'se a enviado correctamente',
                'success'
            )
            }
        })
    },5000)
}



