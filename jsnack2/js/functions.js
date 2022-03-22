// FUNCTIONS

function addObjToArray(object) {

    const lunghezza = object.lunghezza;

    if (lunghezza < 15) {
        
        return zucchineCorte.push(object);

    } else if (lunghezza > 15) {
        
        return zucchineLunghe.push(object);
    }
        
}
