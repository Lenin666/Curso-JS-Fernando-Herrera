/*
2C = TWO OF CLUBS
2D = TWO OF DIAMONDS
2H = TWO OF HEARTS
2S = TWO OF SPADES
*/


let deck = [];
const tipos = ['C','D','H','S']
const especiales = ['A','J','S','Q','K']
let puntosJugador = 0,
    puntosComputadora = 0;
//Referencias HTML
const btnPedir = document.querySelector('#btnpedir');
const puntosHTML = document.querySelectorAll('small')
const divCartasJugador = document.querySelector('#jugador-cartas')


// Esta función crea un nuevo deck
const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}
crearDeck()

const pedirCarta = () => {

    if (deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    // console.log(deck);
    // console.log(carta);
    return carta;
}
pedirCarta()

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return( isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1
    // if ( isNaN(valor)){
    //     puntos  === 'A' ? 11 : 10;


    // } else {
    //     console.log('Es un número')
    //     puntos = valor * 1 //se multiplica por uno para convertir a número un string    

    // }
    // console.log(puntos)

}

const valor = valorCarta(pedirCarta());
// console.log({valor});


//Eventos

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
});