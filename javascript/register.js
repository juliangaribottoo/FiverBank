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
    }    /*redireccion*/else{
        location.href = "login.html"
        }
});

//Proceso de guardar usuario

const usuario = [];
const password = [];
const names = [];
const lastName = [];
const Cel = [];

let guardarUsuario = document.getElementById ('guardar');

guardarUsuario.addEventListener ('click',registarUsuario);

function registarUsuario(){
    let userG = document.getElementById('user__New').value;
    let passwordG = document.getElementById ('password__New').value;
    let nameC = document.getElementById ('name__New').value;
    let lastNameG = document.getElementById ('last__Name__New').value;
    let celG = document.getElementById ('cel__New').value;
    
usuario.push(userG);
password.push(passwordG);
names.push(nameC);
lastName.push(lastNameG);
Cel.push(celG);


localStorage.setItem("usuario", JSON.stringify(usuario));
localStorage.setItem("password", JSON.stringify(password));
localStorage.setItem("name", JSON.stringify(names));
localStorage.setItem("lastname", JSON.stringify(lastName));
localStorage.setItem("cel", JSON.stringify(Cel));

console.log(localStorage)



}
