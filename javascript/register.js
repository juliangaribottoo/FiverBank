//Registro de usuario
const userNew = document.getElementById('user__New')
const passwordNew = document.getElementById ('password__New')
const formNew = document.getElementById ('form2')
const parrafo = document.getElementById ('warning')
const revalidatePasword = document.getElementById ('password__revalidate')
const nameNew = document.getElementById ('name__New')
const lastnameNew = document.getElementById ('last__Name__New')
const celNew = document.getElementById ('cel__New')

//validacion datos
form2.addEventListener("submit", e=> {
    e.preventDefault()
    let warning = ""
    let entrar = false
    if(nameNew.value == ""){
        warning += `Debe ingresar su nombre</br>`
        entrar = true
    }
    if(lastnameNew.value == ""){
        warning += `Debe ingresar su apellido</br>`
        entrar = true
    }
    if(celNew.value == ""){
        warning += `Debe ingresar su numero</br>`
        entrar = true
    }
    if(userNew.value.length <6){
        warning += `Debe ingresar mas de 6 caracteres <br>`
        entrar = true
    }
    if(passwordNew.value.length <8){
        warning += `La contraseña es muy corta <br>`;
        entrar = true
    }if(revalidatePasword.value !== passwordNew.value){
        warning+= `Debe ingresar la misma contraseña`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warning;
    }   
});

//capturar datos
function guardarUsuarios(){
    let misObjetos = {
        users: document.getElementById('user__New').value ,
        pass: document.getElementById('password__New').value,
        namer: document.getElementById('name__New').value,
        lastName: document.getElementById ('last__Name__New').value,
        cel: document.getElementById ('cel__New').value,
    }
    guardadoLocalStorage(misObjetos)
}

let guardadoLocalStorage = function(misOb){
    let redireccionar = false
    if(nameNew.value == ""){
    }
    if(lastnameNew.value == ""){
    }
    if(celNew.value == ""){
    }
    if(userNew.value.length <6){
    }
    if(passwordNew.value.length <8){
    }
    else{
        localStorage.setItem("usuarios", JSON.stringify(misOb)),
        alert('El usuario se a generado correctamente, sera redirigido');
        redireccionar = true
    }
    if(redireccionar){
        location.href = "login.html"
    }
    //redireccion
}