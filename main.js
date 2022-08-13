// Simulador de rock, paper, scissors


const opciones = document.querySelectorAll('button')
const opcionUser = document.getElementById('valueUser')
const opcionCPU = document.getElementById('valueCPU')
const result = document.getElementById('result')
const botonHistorial = document.getElementById('historial')
const reset = document.getElementById('reset')
let valorUser,valorHistorial,botonh
let historial =[];


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
    opcionCPU.innerHTML = valor;
    (decision == valor) ? result = 'Empate' :
    ((decision == 'piedra') && (valor == 'tijera')) ? result = 'Victoria' :  ((decision == 'piedra') && (valor == 'papel')) ? result = 'Derrota' :
    ((decision == 'papel') && (valor == 'piedra')) ?  result = 'Victoria' :  ((decision == 'papel') && (valor == 'tijera')) ? result = 'Derrota' :
    ((decision == 'tijera') && (valor == 'papel')) ?  result = 'Victoria' :  ((decision == 'tijera') && (valor == 'piedra')) ? result = 'Derrota' : null
    localStorage.setItem('ValorCPU', valor);
    localStorage.setItem('ValorUser', decision);
    return result;
}

opcionCPU.innerHTML = localStorage.getItem('ValorCPU');
opcionUser.innerHTML = localStorage.getItem('ValorUser')
result.innerHTML = localStorage.getItem('Resultado')
botonh = document.createElement('h2');

if ((localStorage.getItem('Victorias') != null) && (localStorage.getItem('Derrotas') != null) && ((localStorage.getItem('Empates') != null))){
        botonh.innerHTML = `    <h2> Usted ha ganado:   ${(localStorage.getItem('Victorias'))} </h2>
                                <h2> Usted ha perdido:  ${(localStorage.getItem('Derrotas'))} </h2>
                                <h2> Usted ha empatado: ${(localStorage.getItem('Empates'))} </h2>`
                                for(i=0; i< (localStorage.getItem('Victorias')); i++){ historial.push('Victoria')}
                                for(i=0; i< (localStorage.getItem('Derrotas')); i++){ historial.push('Derrota')}
                                for(i=0; i< (localStorage.getItem('Empates')); i++){ historial.push('Empate')}
                                console.log(historial)
                    }       

opciones.forEach(opcion => opcion.addEventListener('click', (e) => {
    valorUser = e.target.id
    valorHistorial = resultado(valorUser);
    
    switch (valorHistorial){
        case 'Victoria':
            historial.push ('Victoria');
            result.innerHTML = 'Ganaste!'
            localStorage.setItem('Resultado', result.innerHTML);
            break;
        case 'Derrota':
            historial.push ('Derrota');
            result.innerHTML = 'Perdiste!'
            localStorage.setItem('Resultado', result.innerHTML);
            break;
        case 'Empate':
            historial.push ('Empate');
            result.innerHTML = 'Es un empate!'
            localStorage.setItem('Resultado', result.innerHTML);
            break;
    }

    botonh.innerHTML = `  <h2> Usted ha ganado :  ${historial.filter(valor => valor == 'Victoria').length} </h2>
                          <h2> Usted ha perdido:  ${historial.filter(valor => valor == 'Derrota').length} </h2>
                          <h2> Usted ha empatado: ${historial.filter(valor => valor == 'Empate').length} </h2>`

    localStorage.setItem('Victorias', historial.filter(valor => valor == 'Victoria').length);
    localStorage.setItem('Derrotas', historial.filter(valor => valor == 'Derrota').length);
    localStorage.setItem('Empates', historial.filter(valor => valor == 'Empate').length);
}))

botonHistorial.addEventListener('click', (e) => {
    e.preventDefault();
    if (botonHistorial.querySelectorAll('h2').length === 0){
    botonh.classList.add('historial');
    botonHistorial.appendChild(botonh);
}
})


reset.addEventListener('click', (e) => {
    e.preventDefault();
    historial = [];
    botonh.innerHTML;
})



   


