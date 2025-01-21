
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function iniciarJuego(){
    console.log("se reinicio el juego");
    //se crea el numero secreto
    numeroSecreto=generarNumeroAleatorio();
    console.log("el numero nuevo es "+numeroSecreto);
    //se limpia la caja
    limpiarCaja();
    //document.getElementById('reiniciar').set;
    //se reinician los parrafos
    mensajesIniciales();
    //se deshabilita el boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log("el numero secreto es "+numeroSecreto);
    while (intentos<3){
        if (numeroDeUsuario==numeroSecreto){
            intentos++;
            asignarTextoElemento("p", `acertaste el numero en ${intentos} ${(intentos==1)? 'intento':'intentos'}`);
            document.getElementById('reiniciar').removeAttribute("disabled");
            return;
            
        }else{
            if (numeroDeUsuario>numeroSecreto){
                asignarTextoElemento("p", "el numero es menor");
                
            }
            else if (numeroDeUsuario<numeroSecreto){
                asignarTextoElemento("p", "el numero es mayor");

            }
        }
        intentos++;
        limpiarCaja();
        return;
    }
    asignarTextoElemento("p", "excediste el numero de intentos");
    document.getElementById('reiniciar').removeAttribute("disabled");
    return;   
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value='';
}

function generarNumeroAleatorio(){
    intentos=0;
    return Math.floor(Math.random() * 10) + 1;
}

function mensajesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero entre 1 y 10');

}

mensajesIniciales();
iniciarJuego();
