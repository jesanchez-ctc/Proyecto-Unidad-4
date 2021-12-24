// Mostrar y Ocultar botones con javascript 

let btn1= document.getElementById("btnOcultar");
let btn2= document.getElementById("btnMostrar");
btn1.onclick = ocultaTexto;
btn2.onclick=mostrarTexto;

function ocultaTexto(evento) {
    document.getElementById("parrafo").style.display='none';
}

function mostrarTexto(evento) {
    document.getElementById("parrafo").style.display= 'block';
}


// Mostrar  y Ocultar botones con jquery 

$(document).ready(function(){
$("#btnOcultar2").click(function(){
$("#parrafo").hide("slow");
});

$("#btnMostrar2").click(function(){
    $("#parrafo").show("slow");
    });
});