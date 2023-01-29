const imagenResultado = document.querySelector("#imagen-resultado");
const ctnTextos = document.querySelectorAll(".ctn-textos");

const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");

const contenedorResultado = document.querySelector(".contenedor-resultado");

const textArea = document.querySelector("#input-mensaje");

textArea.addEventListener("keypress", limpiar);

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);

function procesarResultado() {}

function encriptar() {

  limpiar()
  if(textArea.value != "" && textArea.value.trim().length != 0 ){
    const texto = textArea.value;
    let mensajeEnc = "";
    for (let i = 0; i < texto.length; i++) {
      switch (texto[i]) {
        case "a":
          mensajeEnc = mensajeEnc.concat("ai");
          break;
        case "e":
          mensajeEnc = mensajeEnc.concat("enter");
          break;
        case "i":
          mensajeEnc = mensajeEnc.concat("imes");
          break;
        case "o":
          mensajeEnc = mensajeEnc.concat("ober");
          break;
        case "u":
          mensajeEnc = mensajeEnc.concat("ufat");
          break;
        default:
          mensajeEnc = mensajeEnc + texto[i];
      }
    }
    crearVistaResultado(mensajeEnc);
    mostrarTextoEncriptado()
  }

}

function desencriptar() {

  limpiar()

  if(textArea.value != "" && textArea.value.trim().length != 0){
  let texto = textArea.value;
    texto = texto
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    crearVistaResultado(texto);
  }
}

function crearVistaResultado(texto) {
  const imagenResultado = document.querySelector("#imagen-resultado");
  const ctnTextos = document.querySelectorAll(".ctn-textos");

  contenedorResultado.classList.remove = "sinMensaje";

  imagenResultado.parentNode.removeChild(imagenResultado);
  ctnTextos.forEach((texto) => {
    texto.parentNode.removeChild(texto);
  });

  contenedorResultado.classList="conMensaje contenedor-resultado"

  const resultadoEncriptar = document.createElement("p");
  resultadoEncriptar.id= "resultado-encriptar";
  resultadoEncriptar.innerHTML = texto;

  const botonCopair = document.createElement("button");
  botonCopair.classList.add("btn", "btn-copiar");
  botonCopair.id = "btn-desencriptar";
  botonCopair.innerHTML = "Copiar";

  botonCopair.addEventListener("click", copiarTexto);

  contenedorResultado.appendChild(resultadoEncriptar);
  contenedorResultado.appendChild(botonCopair);

  textArea.value = "";
}

function copiarTexto() {
    const texto = document.querySelector("#resultado-encriptar").innerHTML;
    navigator.clipboard.writeText(texto);
    limpiar();
}

function limpiar(){

    const imagen = document.createElement("img");
    imagen.src = "img/Muñeco.png";
    imagen.setAttribute("alt", "Imagen de resultado");
    imagen.setAttribute("id","imagen-resultado");

    const contenedor_mensaje = document.createElement("div");
    contenedor_mensaje.classList = "ctn-textos";
    const mensaje = document.createElement("span");
    mensaje.innerHTML = "Ningún mensaje fue encontrado";
    mensaje.className = "font-i";
    mensaje.setAttribute("id", "resultado-mensaje");


    const contenedor_instruccion = document.createElement("div");
    contenedor_instruccion.classList = "ctn-textos";
    const instruccion = document.createElement("span");
    instruccion.innerHTML = "Ingrese el texto que desees encriptar o desencriptar";
    instruccion.className = "font-i";
    instruccion.setAttribute("id", "info-text");

    contenedor_mensaje.appendChild(mensaje)
    contenedor_instruccion.appendChild(instruccion)


    contenedorResultado.innerHTML = "";

    contenedorResultado.appendChild(imagen)
    contenedorResultado.appendChild(contenedor_mensaje)
    contenedorResultado.appendChild(contenedor_instruccion)
    contenedorResultado.classList = "contenedor-resultado sinMensaje";
    
}

function mostrarTextoEncriptado(){
    location.hash = "#resultado-encriptar";
}