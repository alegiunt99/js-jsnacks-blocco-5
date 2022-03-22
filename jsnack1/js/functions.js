// FUNCTIONS

function calculTotalWeight(arrayZucchine) {
    //dichiaro la somma a 0
    let somma = 0;

    // creo un ciclo che scorra all'interno dell'arrey delle zucchine
    for (let i = 0; i <arrayZucchine.length; i++){
    
    // dichiaro tutte le zucchine con una costante
    const zucchine = arrayZucchine[i];

    // di quelle zucchine prendo il valore "peso"
    const pesoOgniZucchina = zucchine.peso;

    somma += pesoOgniZucchina;
    }
    
    return somma;
}