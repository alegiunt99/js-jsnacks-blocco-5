console.log('JS OK!')

/* Crea un array di 10 oggetti che rappresentano una zucchina,
 indicando per ognuna varietà, peso e lunghezza. 
 Calcola quanto pesano tutte le zucchine.*/
 
 //creo un array con 10 oggetti 

const zuchinisGroup = [
     
    // Zucchina nera
    {
        varietà: 'nera',

        peso: 45, // grammi

        lunghezza: 15 // cm
    },
     
    // Zucchina romanesca
    {
        varietà: 'romanesca',

        peso: 60, // grammi

        lunghezza: 25 // cm
    }, 

    // Zucchina fiorentina
    {
        varietà: 'fiorentina',

        peso: 80, // grammi

        lunghezza: 13 // cm
    },
     
    // Zucchina napoletana
    {
        varietà: 'napoletana',

        peso: 75, // grammi

        lunghezza: 22  // cm
    },
     
    // Zucchine tonde
    {
        varietà: 'tonda',

        peso: 30, // grammi

        lunghezza: 11  // cm
    },
     
    // Zucchine trombetta
    {
        varietà: 'trombetta',

        peso: 90, // grammi

        lunghezza: 24  // cm
    },
     
    // Zucchina patisson
    {
        varietà: 'patisson',

        peso: 35, // grammi

        lunghezza: 17  // cm
    },
     
    // Zucchina gialla 
    {
        varietà: 'gialla',

        peso: 85, // grammi

        lunghezza: 12 // cm
    },
     
    // Zucchina rugosa friulana
    {
        varietà: 'rugosa friulana',

        peso: 55, // grammi

        lunghezza: 15  // cm
    },
     
    // Zucchina Crookneck
    {
        varietà: 'Crookneck',

        peso: 95, // grammi

        lunghezza: 19  // cm
    },
]
 
console.table(zuchinisGroup);
// devo fare la somma del peso di tutte le zucchine

const totWeight = calculTotalWeight(zuchinisGroup);

console.log('il peso totale delle zucchine è:', totWeight);
