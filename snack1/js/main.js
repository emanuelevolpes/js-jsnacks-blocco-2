'use strict';

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// let sum = 0;

// for(let i = 0; i < 5; i++) {
//     const number = Number(prompt('inserisci un numero'));
//     console.log(number);
//     sum = sum + number;
// }

// console.log(sum);

let sum = 0;
let i = 0;

while (i < 5) {
    const number = Number(prompt('inserisci un numero'));
    console.log(number);
    sum = sum + number;
    i++;
}

console.log(sum);