'use strict';

// Inserisci un numero, se è pari stampa il numero
// se è dispari stampa il numero successivo


let number = Number(prompt('inserisci un numero'));

if (number % 2 == 0) {
    console.log(number);
} else {
    number++;
    console.log(number);
};
