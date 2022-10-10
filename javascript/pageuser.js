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


/*===PROCESO PARA OBTENER LOS VALORES DE LAS CRIPTOMONEDAS DESDE BINANCE*/
let endpoint = 'https://api.binance.com/api/v3/ticker/price';
fetch(endpoint)
.then(response => response.json())
.then( data => mostrarDatos(data))
.catch(e => console.log(e))
const mostrarDatos = (data)=>{
    let body = "";
    for (let i=0; i < data.length; i++){
        body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
    }
    document.getElementById('data').innerHTML = body;
}

/*====MOSTRAR VALORES CRIPTO EN PANTALLA=====*/

function mostrarValores(){
    let criptos= document.getElementById('valores__criptos');
    criptos.style.display= "block";
}

/*boton funcionamiento cerrar visor de valores */
function cerrarValores(){
    let close= document.getElementById('valores__criptos');
    close.style.display= "none";
}

/*====MOSTRAR VALORES CRIPTO EN PANTALLA=====*/

function mostrarValores2(){
    let divisas= document.getElementById('valores__Divisas');
    divisas.style.display= "block";
}

/*boton funcionamiento cerrar visor de valores */
function cerrarValores2(){
    let close= document.getElementById('valores__Divisas');
    close.style.display= "none";
}

/*====MOSTRAR VALORES DIVISAS EN PANTALLA=====*/

//tomando los valores del html
const moneda1 = document.getElementById('divisas');
const moneda2 = document.getElementById('divisas2');
const cantidad1 = document.getElementById('cantidad__1');
const cantidad2 = document.getElementById('cantidad__2');
const cambio = document.getElementById('cambio');
const btn= document.getElementById('taza')

//Fetch para traer los valores de api


function calcularDivisas(){
    const monedaOne = moneda1.value;
    const monedaTwo = moneda2.value;
    fetch(`https://open.er-api.com/v6/latest/${monedaOne}`)
    .then(response => response.json())
    .then(result => {
        const taza = result.rates[monedaTwo];
        cambio.innerText= `1 ${monedaOne} = ${taza} ${monedaTwo}`;
        
        cantidad2.value = (cantidad1.value * taza).toFixed(2)
    })
}

//eventos para calcular divisas
moneda1.addEventListener('change', calcularDivisas);
cantidad1.addEventListener('input', calcularDivisas);
moneda2.addEventListener('change', calcularDivisas);
cantidad2.addEventListener('input', calcularDivisas);
btn.addEventListener('click', ()=>{
    const temp = moneda1.value;
    moneda1.value = moneda2.value;
    moneda2.value = temp;
    calcularDivisas();
})

calcularDivisas()

