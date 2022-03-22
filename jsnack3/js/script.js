console.log('JS OK!')

/*Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

const stringaGenerata = prompt('scrivi una parola');

const parolaGirata = reverseString(stringaGenerata);

console.log(parolaGirata)


function reverseString(stringa) {


    return stringa.split("").reverse().join("");

}

const container = document.getElementById('container');

container.innerHTML = `<h1 class="reverse-word"> ${parolaGirata} </h1>`;
