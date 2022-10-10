//Contador
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

/*funcion para poder enviar novedades a posible cliente y crecer base de datos*/
function capturar(){
    let enviarInfo = document.getElementById('mail__Envio__Info');
    enviarInfo.value == "" ? alertify.success('Mail error') : alertify.success('Mail enviado');
    if(enviarInfo.value !== ""){
        localStorage.setItem("mailInfo", JSON.stringify(enviarInfo.value));
    }
    if(enviarInfo.value !== ""){
        enviarInfo.value = ""; 
    }
    console.log(enviarInfo.value)
}

