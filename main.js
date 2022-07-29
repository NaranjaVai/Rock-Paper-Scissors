// Simulador de rock, paper, scissors

function resultado(decision) {
    alert('La IA esta decidiendo su opcion');
    let valor, result
    let numero = Math.floor(Math.random() * 3);
    console.log(numero);
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
    console.log(valor);
    if (decision == valor){
        alert('Es un empate, la IA ha decidido lo mismo que vos ' + valor);
        return result = 'Empate'
    }

    //opcion piedra
    if((decision == 'piedra') && (valor == 'tijera')){
        alert('Has ganado!, la IA ha elegido tijeras');
        return result = 'Victoria'
    } else if ((decision == 'piedra') && (valor == 'papel')){
        alert('Has perdido!, la IA ha elegido papel');
        return result = 'Derrota'
    }

    //opcion papel
    if((decision == 'papel') && (valor == 'piedra')){
        alert('Has ganado!, la IA ha elegido piedra');
        return result = 'Victoria'
    } else if ((decision == 'papel') && (valor == 'tijera')){
        alert('Has perdido!, la IA ha elegido tijeras');
        return result = 'Derrota'
    }

    //opcion tijera
    if((decision == 'tijera') && (valor == 'papel')){
        alert('Has ganado!, la IA ha elegido papel');
        return result = 'Victoria'
    } else if ((decision == 'tijera') && (valor == 'piedra')){
        alert('Has perdido!, la IA ha elegido piedra');
        return result = 'Derrota'
    }
}

function verificar(){
    let choice
   do{
     choice = prompt('Juego de piedra, papel o tijera' + '\n Elija la opcion que va a usar').toLowerCase();
    } while((choice != 'piedra') && (choice != 'papel') && (choice != 'tijera'));
    return choice;
}

function verificarSiNo(text){
    let a
    do{
        a = prompt(text).toLowerCase();
       } while((a != 'si') && (a != 'no'));
       return a;
}

let valorHistorial,restart = true
const texto = ['Quiere volver a jugar? (Si o No)', 'Desea ver el Historial de partidas? (Si o No)']
const historial =[];


while (restart){
    alert('Va a comenzar el Juego');
    valorHistorial = resultado(verificar());
    switch (valorHistorial){
            case 'Victoria':
                historial.push ('Victoria');
                break;
            case 'Derrota':
                historial.push ('Derrota');
                break;
            case 'Empate':
                historial.push ('Empate');
                break;
    }

    restart = verificarSiNo(texto[0]);
    if (restart == 'si'){
        restart = true} 
        else { restart = false}
}   
let informa = verificarSiNo(texto[1]);
if (informa == 'si'){
    let informaV = historial.filter(valor => valor == 'Victoria')
    let informaD = historial.filter(valor => valor == 'Derrota')
    let informaE = historial.filter(valor => valor == 'Empate')
    alert('Usted ha ganado: ' + informaV.length + '\n Perdido: ' + informaD.length + '\n Empatado: ' + informaE.length);
     console.log(historial)
}
alert('El juego ha terminado');


