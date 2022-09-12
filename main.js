// Simulador de rock, paper, scissors

const opciones = document.querySelectorAll('button')
const opcionUser = document.getElementById('valueUser')
const opcionCPU = document.getElementById('valueCPU')
const result = document.getElementById('result')
const botonHistorial = document.getElementById('historial')
const reset = document.getElementById('reset')
const fondo1 = document.getElementsByClassName('img1')
const fondo2 = document.getElementsByClassName('img2')
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

// interpreta a la tijera, de un array de 4
let randomizerTijera = ()=> {             
fetch(`https://pokeapi.co/api/v2/pokemon/${tijeraNames[Math.floor(Math.random() * 4)]}`)  
.then(response => response.json())
.then(data => {
    tijera = data.sprites.front_default;
})}
// https://pokeapi.co/api/v2/pokemon/binacle
// https://pokeapi.co/api/v2/pokemon/scizor
// https://pokeapi.co/api/v2/pokemon/barbaracle

/* Funcion para variar el contenido del historial */

function innerHistorial () {
    botonh.innerHTML = `    <img src= ${picU.src}>
                            <img src= ${picC.src}>
                            <h2>${valorHistorial} </h2>`
                            
}

{/*                         <h2> Usted ha ganado :  ${historial.filter(valor => valor == 'Victoria').length} </h2>
                            <h2> Usted ha perdido:  ${historial.filter(valor => valor == 'Derrota').length} </h2>
                            <h2> Usted ha empatado: ${historial.filter(valor => valor == 'Empate').length} </h2> */}


/* function newRow (newPerro){
    const row = document.createElement("tr");
    // podemos poner un animacion por cada fila de perro encontrado
    row.classList.add("dropTabla");

    let aux= document.createElement("th");
    let refperro= document.createElement("button")
    refperro.setAttribute("id",${newPerro.nombre}); //podemos en vez de un href ponerle un ID y addevent...

    refperro.classList.add("link")
    refperro.innerText = newPerro.nombre;
    row.append(aux);
    aux.append(refperro);


    aux= document.createElement("th");
    aux.innerText = newPerro.raza;
    row.append(aux)

    aux= document.createElement("th");
    aux.innerText = newPerro.tamaño;
    row.append(aux)

    aux= document.createElement("th");
    aux.innerText = newPerro.color;
    row.append(aux)

    aux= document.createElement("th");
    aux.innerText = newPerro.sexo;
    row.append(aux);

    tabla.append(row);

    animaciontabla();
};
 */


function resultado(decision) {
    let valor, result
    let numero = Math.floor(Math.random() * 3);
    //opcionUser.innerHTML = decision
    switch (numero){
        case 0:
            valor = 'piedra';
            picC.src = piedra;
            fondo2[0].style.background = "url('./Images/piedraFondo.png')"
            break;
        case 1:
            valor = 'papel';
            picC.src = papel;
            fondo2[0].style.background = "url('./Images/papelFondo.png')"
            break;
        case 2:
            valor = 'tijera';
            picC.src = tijera;
            fondo2[0].style.background = "url('./Images/tijerasFondo.png')"
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
            fondo1[0].style.background = "url('./Images/piedraFondo.png')"
            break;
        case 'papel':
            picU.src = papel;
            fondo1[0].style.background = "url('./Images/papelFondo.png')"
            break;
        case 'tijera':
            picU.src = tijera;
            fondo1[0].style.background = "url('./Images/tijerasFondo.png')"
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
    randomizerTijera();
    randomizerPiedra();
    valorHistorial = resultado(valorUser);
    
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
    innerHistorial();

    localStorage.setItem('Victorias', historial.filter(valor => valor == 'Victoria').length);
    localStorage.setItem('Derrotas', historial.filter(valor => valor == 'Derrota').length);
    localStorage.setItem('Empates', historial.filter(valor => valor == 'Empate').length);
    
}))

botonHistorial.addEventListener('click', (e) => {
    e.preventDefault();
    if (botonHistorial.querySelectorAll('h2').length === 0){
    botonh.classList.add('historial');
    $("body").append(botonh);
}
})


reset.addEventListener('click', (e) => {
    e.preventDefault();
    historial = [];
    innerHistorial();
})



   


