//definicion de constantes
const user = document.getElementById('user')
const password = document.getElementById ('password')
const form = document.getElementById ('form')
const parrafo = document.getElementById ('warning')
let usuario = localStorage.getItem("usuarios");
let usuariosLocal = JSON.parse(usuario);

//validacion datos
form.addEventListener("submit", e=> {
    e.preventDefault()
    let warning = ""
    let entrar = false
    if(user.value.length <6){
        warning += `el usuario no es valido <br>`
        entrar = true
    }else if(user.value !== usuariosLocal.users){
        warning += `el usuario es incorrecto <br>`
        entrar = true       
    }
    if(password.value.length <8){
        warning += `la contraseña no es valida <br>`
        entrar = true
    }else if(password.value !== usuariosLocal.pass){
        warning += `la contraseña es incorrecta <br>`
        entrar = true
    }else{
        alertify.success('Sesion iniciada')
    }
    entrar === false?  setTimeout((redireccionar) => {
        window.location = "pageuser.html"
    }, 3001):parrafo.innerHTML = warning 
});

