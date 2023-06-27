const nombre = document.getElementById("nombre_input")
const email = document.getElementById("email_input")
const telefono = document.getElementById("telefono_input")
const seleccion = document.getElementById("seleccion_input")
const mensaje = document.getElementById("mensaje_input")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar=false
    parrafo.innerHTML=""
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length<=2){
        warnings+='El nombre es corto<br>'
        entrar=true
    }
    if(!isNaN(nombre.value)) {
        warnings+='El nombre no pueden ser numeros<br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings+='El email no es valido<br>'
        entrar=true
    }
    if(telefono.value.length!=10 || isNaN(telefono.value)){
        warnings+='El telefono no es valido<br>'
        entrar=true
    }
    if(seleccion.value=='Seleccionar'){
        warnings+='Seleccione un tipo de mensaje<br>'
        entrar=true
    }
    if(mensaje.value==''){
        warnings+='Ingrese un mensaje<br>'
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML=warnings
    }else{
        parrafo.innerHTML="Enviado<br>"
    }
})