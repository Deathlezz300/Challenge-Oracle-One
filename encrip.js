
function encriptar(){
    if(document.getElementById("valor1").value.trim()==""){
        alert("No hay ninguna mensaje a encriptar");
    }else{
        var valor=document.getElementById("valor1");
        var valor2=valor.value;
        var valor3;
        valor2=valor2.replace('e','enter');
        valor2=valor2.replace('i','imes');
        valor2=valor2.replace('a','ai');
        valor2=valor2.replace('o','ober');
        valor2=valor2.replace('u','ufat');
        var cambiar=document.getElementById("valor2").innerText=valor2;
        var hola3=document.getElementById("botones21").style.display="flex";
        var hola1=document.getElementById("valor2").style.display="inline";
        var hola4=document.getElementById("inicio1").style.display="none";
    }
}


function desencriptar(){
    if(document.getElementById("valor1").value.trim()==""){
        alert("No hay ningun mensaje a desencriptar");
    }else{
        var valor4=document.getElementById("valor1");
        var valor5=valor4.value;
        valor5=valor5.replace('enter','e');
        valor5=valor5.replace('imes','i');
        valor5=valor5.replace('ai','a');
        valor5=valor5.replace('ober','o');
        valor5=valor5.replace('ufat','u');
        var cambiar=document.getElementById("valor2").innerText=valor5;
        var hola3=document.getElementById("botones21").style.display="flex";
        var hola1=document.getElementById("valor2").style.display="inline";
        var hola4=document.getElementById("inicio1").style.display="none";
    }
}

function copiar(){
    var content = document.getElementById("valor2");
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}




var encriptar2=document.querySelector(".boton1");
encriptar2.onclick=encriptar;

var desencriptar2=document.querySelector(".boton2");
desencriptar2.onclick=desencriptar;

var copiar3=document.querySelector(".copiar");
copiar3.onclick=copiar;


var hola=document.getElementById("botones21").style.display="none";
var hola1=document.getElementById("valor2").style.display="none";
