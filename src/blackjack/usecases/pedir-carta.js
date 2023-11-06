
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck  Se envia el Deck ya creado
 * @returns {String}  Returns el valor de la carta removida del Deck
 */

export const pedirCarta= (deck) => {

    if(!deck || deck.length === 0) 
        throw new Error('El deck debe esta creado y contener al menos 1 carta almacenada.')

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}