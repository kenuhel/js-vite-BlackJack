

/**
 * pedirCarta();
 * @param {String} carta El string es el valor de la carta removida del Deck y entregada al jugador
 * @returns {Number} Retorna el valor numerico extraido de la carta
 */
export const valorCarta = ( carta ) => {

    if (!carta) throw new Error('Carta es obligatoria')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}