//  Snack 1

// // Richiedo il primo numero
// const numberFirst = parseInt(prompt("Inserisci il primo numero"));
// console.log("Primo numero: " + numberFirst);

// // Richiedo il primo numero
// const numberSecond = parseInt(prompt("Inserisci il secondo numero"));
// console.log("Secondo numero: " + numberSecond);

// let numberRandom;

// // Genero il numero casuale
// if (numberFirst > numberSecond) {
//   numberRandom =
//     Math.floor(Math.random() * (numberFirst - numberSecond)) + numberSecond;
// } else if (numberFirst < numberSecond) {
//   numberRandom =
//     Math.floor(Math.random() * (numberSecond - numberFirst)) + numberFirst;
// } else {
//   numberRandom = numberFirst;
// }

// // Stampo il numero casuale
// console.log(numberRandom);

//  ------------------------------------------------------------------- //

// Snack 2

// // Chiedo all'utente la prima parola
// const firstWord = prompt("Scrivi una parola");
// console.log("Prima parola: " + firstWord);

// // Chiedo all'utente la seconda parola
// const secondWord = prompt("Scrivi una parola");
// console.log("Seconda parola: " + secondWord);

// let printWord;

// // Verifico quale parola è più lunga
// if (firstWord.length > secondWord.length) {
//   printWord = firstWord;
// } else if (firstWord.length < secondWord.length) {
//   printWord = secondWord;
// } else {
//   printWord = firstWord + " " + secondWord;
// }

// // Stampo la parola
// console.log(printWord);

//  ------------------------------------------------------------------- //

// Snack 4

// // - Creo una lista vuoto
// const listNumbers = [];

// let i = 0;

// let numberMedia = 0;

// // - la lista non è minore di 50
// while (i < 50) {
//   // - chiedo all'utente dei valori
//   let number = parseInt(prompt("Inserisci un numero"));
//   console.log("numero scritto: " + number);

//   i = i + number;

//   // - aggiungo quel valore come elemento dentro la lista
//   listNumbers.push(number);

//   // Calcolo la media dei valori inseriti dall'utente
//   numberMedia = parseInt(i / listNumbers.length);
// }

// // Stampo la tabella
// console.table(listNumbers);

// // Stampo la media dei valori
// console.log("Media dei valori inseriti: " + numberMedia);

// Snack 5

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);

// dovrebbe restituire [1,3,5]
