//definicion de constantes
const user = document.getElementById('user')
const password = document.getElementById ('password')
const form = document.getElementById ('form')
const parrafo = document.getElementById ('warning')

//validacion datos
form.addEventListener("submit", e=> {
    e.preventDefault()
    let warning = ""
    let entrar = false
    if(user.value.length <6){
        warning += `el usuario no es valido <br>`
        entrar = true
    }else if(user.value !== localStorage.getItem('usuario'.value)){
        warning += `el usuario es incorrecto <br>`
        entrar = true       
    }
    if(password.value.length <8){
        warning += `la contraseña no es valida <br>`
        entrar = true
    }else if(password.value !== "coderhouse"){
        warning += `la contraseña es incorrecta <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warning
    }
    /*redireccion*/else{
        location.href = "../index.html"
        }
});



