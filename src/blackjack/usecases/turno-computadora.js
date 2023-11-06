import { pedirCarta, valorCarta, htmlCarta } from "./";


/**
 * 
 * @param {Number} puntosMinimos  puntos minimos para ganar
 * @param { Array<String> } deck 
 * @param {HTMLElement} puntosHTML HTML para mostrar las cartas
 */
export const turnoComputadora = ( puntosMinimos, deck=[], puntosHTML, divCartasComputadora ) => {

    if(!puntosMinimos || !deck || !puntosHTML) 
        throw new Error('puntosMinimos - deck - puntosHTML son obligatorio')

        let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
       
        const imgCarta =  htmlCarta( carta )
        divCartasComputadora.append( imgCarta ); 
        if( puntosMinimos > 21 ) break;
        

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 500 );
}
