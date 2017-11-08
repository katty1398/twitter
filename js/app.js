window.addEventListener("load", cargar);
//vamos a obtener el id = "boton" y guardarlo en la variable boton
var boton = document.getElementById('boton');
//vamos a obtener el id= "texto" y guardarlo en la var textArea
var textArea = document.getElementById("texto");
// vamos a obtener el id= "contador" y guardarlo en la var contdor 
var contador = document.getElementById("contador");
//cambiar el contenido a cotador a 140
var caracteres = contador.innerHTML = 140;



function cargar() {
    // cuando de click se jecutara la cuncion enviar
    boton.addEventListener("click", enviar);
    // cuando suelte una clave se jecutara la cuncion validar
    textArea.addEventListener("keyup", validar);
    // cuando se precione una tecla se jecutara la cuncion enviar
    textArea.addEventListener("keydown", crecer);
}
   
function enviar(send) {
    //evitar que se envie
    send.preventDefault();
    //cambiar el valor de un campo de texto (textArea)
    var texto = textArea.value;
    //a la funcion agregar mensaje le daremos el parametro de texto
    agregarMensaje(texto);
    //cambiar el contenido de textArea a vacio
    textArea.value = "";
    //contenido de cotador sera 140
    contador.innerHTML = 140;
    contador.classList.remove("azul");
    contador.classList.remove("rojo");
    resize();
    // sie esto se cumple se desavilitara el boton
    boton.disabled = true;
} 

//creamos la funcion validar
function validar() {
    // la desavilitacion del boton no se cumple
    boton.disabled = false;
    var longitud = textArea.value.trim().length;
   // a la funcion contarCaracteres le daremos el parametro longitud
    contarCaracteres(longitud);
    // a la funcuion cambioColor le daremos el parametro de longitud
    cambioColor(longitud);
}

//creamos la funcion agregarMensaje
function agregarMensaje(texto) {
    //crearemos un elemento div
    var publicacion = document.createElement("div");
    // a la var publicacion le dareos el contenido de texto
    publicacion.innerText = texto;
    // var contenedor, obtendremos el Id contenedor
    var contenedor = document.getElementById("contenedor");
    //insertar publicacion antes del segunto contenedor
    contenedor.insertBefore(publicacion, contenedor.childNodes[1]).classList.add("box");
}

//creamos la funcion contarCaracteres
function contarCaracteres(longitud) {

    if(longitud <= caracteres) {

        contador.innerHTML = caracteres - longitud;
    } else {
        contador.innerHTML = caracteres - longitud;
    }
    if(longitud == 0) {
        document.getElementById("boton").disabled = true;
    }
    if(longitud > caracteres) {
       document.getElementById("boton").disabled = true;
    }
}

function cambioColor(longitud) {
    
}

function crecer() {
    textArea.style.cssText = "height: auto";
    textArea.style.cssText = "height: " + textArea.scrollHeight + "px";
}

function resize() {
    textArea.style.cssText = "height: auto";
}
