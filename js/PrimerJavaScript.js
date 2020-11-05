//Java Script :3

var segundos=0, centesimas=0, tiempo;
var estado = 0;

function introducirTexto(){
    document.getElementById("id_Text").innerHTML = "<b>Buenos días</b>";
}

function  cambiaEstilo(){
    document.getElementById("id_Text").style.color = "red";
    document.getElementById("id_Text").style.fontSize = "36px";
}

function fLog(){
    console.log("Mensaje por log cat");
}

function chronometer(){
    centesimas++;
    if(centesimas==100){
        segundos++;
        centesimas=0;
    }
    document.getElementById("id_timeChronometer").innerHTML = segundos+":"+centesimas;
}

function  comprobar(valor){
    if(valor && (estado==0)){
        tiempo=setInterval(chronometer, 10);
        estado = 1;
    }else if(!valor){
        clearInterval(tiempo);
        estado = 0;
    }
}

function getInfo(){
   var sizeWidth = window.outerWidth;
   var sizeHeight = window.outerHeight;
   navigator.geolocation.getCurrentPosition(succes);

    document.getElementById("id_sizeWindow").innerHTML = "Anchura: "+sizeWidth+"px<br>Altura: "+sizeHeight+"px";
}

function succes(pos){
    var crd = pos.coords;
    console.log("Ubicación: "+crd.latitude+" "+crd.longitude+" "+crd.accuracy);
}

function move(){
    document.body.style.height=2000+"px";
    window.scrollBy(0, 2000);
}
window.onload = function () {
    var posicion = document.getElementById("id_LuffyImg").getBoundingClientRect();
    var posX = posicion.x;
    var posY = posicion.y;
    document.onkeydown = function (e) {
        if (e.keyCode == 37) {
            posX = posX - 30;
            document.getElementById("id_LuffyImg").style.left = posX + "px";
        } else if (e.keyCode == 39) {
            posX = posX + 30;
            document.getElementById("id_LuffyImg").style.left = posX + "px";
        } else if (e.keyCode == 40) {
            posY = posY + 30;
            document.getElementById("id_LuffyImg").style.top = posY + "px";
        } else if (e.keyCode == 38) {
            posY = posY - 30;
            document.getElementById("id_LuffyImg").style.top = posY + "px";
        }
    }
}

function llenaRegistros(){
    document.getElementById("id_inputNombre").value = "Pepa";
    document.getElementById("id_inputApellido").value = "Pig";
    document.getElementById("id_inputEmail").value = "elCorreoDelaPepaPig@gmail.com";
}

function deleteRegistros(){
    document.getElementById("id_formulario").reset();
}

function validateEmail(){
    var email = document.getElementById("id_inputEmail").value;
    var comprobaciones = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(!comprobaciones.test(email)){
        alert("Email no válido");
    }else{
        alert("Email válido")
    }
}

function addRow(){
    var nombre = document.getElementById("id_inputNombre").value;
    var apellido = document.getElementById("id_inputApellido").value;
    var email = document.getElementById("id_inputEmail").value;

    var fila = document.createElement("tr");
    var columnaNombre = document.createElement("td");
    var columnaApellido = document.createElement("td");
    var columnaEmail = document.createElement("td");

    columnaNombre.append(nombre);
    columnaApellido.append(apellido);
    columnaEmail.append(email);
    fila.append(columnaNombre, columnaApellido, columnaEmail);

    document.getElementById("id_tablaRegistros").appendChild(fila);
}

function deleteLastRow(){
    var tabla = document.getElementById("id_tablaRegistros");
    document.getElementById("id_tablaRegistros").removeChild(tabla.lastChild);
}