console.log('JS OK!')

/*Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

// creo 2 array vuoti dove inserire quelle più corte e quelle più lunghe di 15cm

const zucchineCorte = [];

console.log(zucchineCorte);


const zucchineLunghe = [];

console.log(zucchineLunghe);


// creo 10 oggetti come zucchine 
const zucchNera = {
    varietà: 'nera',

    peso: 45, // grammi

    lunghezza: 9 // cm
};

// Zucchina romanesca
const zucchRoma = {
    varietà: 'romanesca',

    peso: 60, // grammi

    lunghezza: 25 // cm
}; 

// Zucchina fiorentina
const zucchFiore = {
    varietà: 'fiorentina',

    peso: 80, // grammi

    lunghezza: 13 // cm
};
 
// Zucchina napoletana
const zucchNapoli = {
    varietà: 'napoletana',

    peso: 75, // grammi

    lunghezza: 22  // cm
};
 
// Zucchine tonde
const zucchTonda = {
    varietà: 'tonda',

    peso: 30, // grammi

    lunghezza: 11  // cm
};
 
// Zucchine trombetta
const zucchTromb = {
    varietà: 'trombetta',

    peso: 90, // grammi

    lunghezza: 24  // cm
};
 
// Zucchina patisson
const zucchPatis = {
    varietà: 'patisson',

    peso: 35, // grammi

    lunghezza: 17  // cm
};
 
// Zucchina gialla 
const zucchGialla = {
    varietà: 'gialla',

    peso: 85, // grammi

    lunghezza: 12 // cm
};
 
// Zucchina rugosa friulana
const zucchFriul = {
    varietà: 'rugosa friulana',

    peso: 55, // grammi

    lunghezza: 14  // cm
};
 
// Zucchina Crookneck
const zucchCrook = {
    varietà: 'Crookneck',

    peso: 95, // grammi

    lunghezza: 19  // cm
};


// aggiungo gli oggetti ai due array in base alla lunghezza

addObjToArray(zucchCrook);

addObjToArray(zucchFiore);

addObjToArray(zucchFriul);

addObjToArray(zucchGialla);

addObjToArray(zucchNapoli);

addObjToArray(zucchNera);

addObjToArray(zucchPatis);

addObjToArray(zucchRoma);

addObjToArray(zucchTonda);

addObjToArray(zucchTromb);

// calcolo la somma del peso di ogni array

const pesoTotaleCorte = calculTotalWeight(zucchineCorte);

console.log('le zucchine corte pesano: ', pesoTotaleCorte + 'kg');

const pesoTotaleLunghe = calculTotalWeight(zucchineLunghe);

console.log('le zucchine lunghe pesano: ', pesoTotaleLunghe + 'kg');