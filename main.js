// Simulador de rock, paper, scissors


const opciones = document.querySelectorAll('button')
const opcionUser = document.getElementById('valueUser')
const opcionCPU = document.getElementById('valueCPU')
const result = document.getElementById('result')
const botonHistorial = document.getElementById('historial')
const reset = document.getElementById('reset')
let valorUser,valorHistorial,botonh
let historial =[];
let picU = document.getElementById('PicUser');
let picC = document.getElementById('PicCPU');
let piedra, papel, tijera
let tijeraNames = ['scyther','binacle','scizor','barbaracle']


    fetch('https://pokeapi.co/api/v2/pokemon/kartana') //Como el pokemon papel en este caso
    .then(response => response.json())
    .then(data => {
        papel = data.sprites.front_default;
    })
    
    
    let randomizerPiedra = () => {
    fetch('https://pokeapi.co/api/v2/type/rock')  // interpreta a la roca, aunque algunas veces salen otros
    .then(response => response.json())
    .then(out => {
        let ub = out.pokemon[Math.floor(Math.random() * 93)];
        fetch(`${ub.pokemon.url}`)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                piedra = data.sprites.front_default; 
            })
    })}
    
    let randomizerTijera = ()=> {             
    fetch(`https://pokeapi.co/api/v2/pokemon/${tijeraNames[Math.floor(Math.random() * 4)]}`)
    .then(response => response.json())
    .then(data => {
        tijera = data.sprites.front_default;
    })}

    // https://pokeapi.co/api/v2/pokemon/binacle
    // https://pokeapi.co/api/v2/pokemon/scizor
    // https://pokeapi.co/api/v2/pokemon/barbaracle
    
    

function resultado(decision) {
    let valor, result
    let numero = Math.floor(Math.random() * 3);
    //opcionUser.innerHTML = decision
    switch (numero){
        case 0:
            valor = 'piedra';
            picC.src = piedra;
            break;
        case 1:
            valor = 'papel';
            picC.src = papel;
            break;
        case 2:
            valor = 'tijera';
            picC.src = tijera;
            break;
    }

    //opcionCPU.innerHTML = valor;
    (decision == valor) ? result = 'Empate' :
    ((decision == 'piedra') && (valor == 'tijera')) ? result = 'Victoria' :  ((decision == 'piedra') && (valor == 'papel')) ? result = 'Derrota' :
    ((decision == 'papel') && (valor == 'piedra')) ?  result = 'Victoria' :  ((decision == 'papel') && (valor == 'tijera')) ? result = 'Derrota' :
    ((decision == 'tijera') && (valor == 'papel')) ?  result = 'Victoria' :  ((decision == 'tijera') && (valor == 'piedra')) ? result = 'Derrota' : null
    localStorage.setItem('ValorCPU', valor);
    localStorage.setItem('ValorUser', decision);

    switch (decision){
        case 'piedra':
            picU.src = piedra;
            break;
        case 'papel':
            picU.src = papel;
            break;
        case 'tijera':
            picU.src = tijera;
            break;
    }

    return result;
}

//opcionCPU.innerHTML = localStorage.getItem('ValorCPU');
//opcionUser.innerHTML = localStorage.getItem('ValorUser')
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
    randomizerTijera();
    randomizerPiedra();
    
    switch (valorHistorial){
        case 'Victoria':
            historial.push ('Victoria');
            result.innerHTML = 'Ganaste!'
            localStorage.setItem('Resultado', result.innerHTML);
            swal({
                title: "Ganaste!",
                icon: "success",
                button: "Ok",
              });
            break;
        case 'Derrota':
            historial.push ('Derrota');
            result.innerHTML = 'Perdiste!'
            localStorage.setItem('Resultado', result.innerHTML);
            swal({
                title: "Has Perdido!",
                icon: "error",
                button: "Ok",
              });
            break;
        case 'Empate':
            historial.push ('Empate');
            result.innerHTML = 'Es un empate!'
            localStorage.setItem('Resultado', result.innerHTML);
            swal({
                title: "Empate!",
                icon: "warning",
                button: "Ok",
              });
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



   


