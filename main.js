// Simulador de rock, paper, scissors
/* 
class Jugador {
    constructor(nombre,historialJugadas){
        this.nombre = nombre;
        this.historialJugadas = historialJugadas;
    }

}    */
/* 
function verificar(){
    let choice
   do{
     choice = prompt('Juego de piedra, papel o tijera' + '\n Elija la opcion que va a usar').toLowerCase();
    } while((choice != 'piedra') && (choice != 'papel') && (choice != 'tijera'));
    return choice;
}
 */
/* 
function verificarSiNo(text){
    let a
    do{
        a = prompt(text).toLowerCase();
       } while((a != 'si') && (a != 'no'));
       return a;
}
 */
//const texto = ['Quiere volver a jugar? (Si o No)', 'Desea ver el Historial de partidas? (Si o No)']

const opciones = document.querySelectorAll('button')
const opcionUser = document.getElementById('valueUser')
const opcionCPU = document.getElementById('valueCPU')
const result = document.getElementById('result')
let valorUser

function resultado(decision) {
    let valor, result
    let numero = Math.floor(Math.random() * 3);
    opcionUser.innerHTML = decision
    switch (numero){
        case 0:
            valor = 'piedra';
            break;
        case 1:
            valor = 'papel';
            break;
        case 2:
            valor = 'tijera';
            break;
    }
    opcionCPU.innerHTML = valor
    if (decision == valor){
        return result = 'Empate'
    }

    //opcion piedra
    if((decision == 'piedra') && (valor == 'tijera')){
        return result = 'Victoria'
    } else if ((decision == 'piedra') && (valor == 'papel')){
        return result = 'Derrota'
    }

    //opcion papel
    if((decision == 'papel') && (valor == 'piedra')){
        return result = 'Victoria'
    } else if ((decision == 'papel') && (valor == 'tijera')){
        return result = 'Derrota'
    }

    //opcion tijera
    if((decision == 'tijera') && (valor == 'papel')){
        return result = 'Victoria'
    } else if ((decision == 'tijera') && (valor == 'piedra')){
        return result = 'Derrota'
    }
}



let valorHistorial
const historial =[];
const botonHistorial = document.getElementById('historial')




opciones.forEach(opcion => opcion.addEventListener('click', (e) => {
    valorUser = e.target.id
    console.log(valorUser)
    valorHistorial = resultado(valorUser);
    switch (valorHistorial){
        case 'Victoria':
            historial.push ('Victoria');
            result.innerHTML = 'Ganaste!'
            break;
        case 'Derrota':
            historial.push ('Derrota');
            result.innerHTML = 'Perdiste!'
            break;
        case 'Empate':
            historial.push ('Empate');
            result.innerHTML = 'Es un empate!'
            break;
    }

    console.log(historial)   
}))


    
botonHistorial.addEventListener('click', (e) => {
    e.preventDefault();
    let informaV = historial.filter(valor => valor == 'Victoria')
    let informaD = historial.filter(valor => valor == 'Derrota')
    let informaE = historial.filter(valor => valor == 'Empate')

    botonHistorial.innerHTML = `<h2> Usted ha ganado :  ${informaV.length} </h2>
                                <h2> Usted ha perdido:  ${informaD.length} </h2>
                                <h2> Usted ha empatado: ${informaE.length} </h2>`

})



   


