
/**
 * 
 * @param {String} carta el valor/nombre de la carta
 * @param {HTMLElement} divCartasComputadora posicion del div para la computadora
 * @param {HTMLElement} divCartasJugador posicion del div para el jugador
 */
// <img class="carta" src="assets/cartas/2C.png">
export const htmlCarta = (carta) => {

    if(!carta)
        throw new Error('divCartas es necesario');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta
}