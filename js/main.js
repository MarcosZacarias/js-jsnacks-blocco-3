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

// - Creo una lista vuoto
const listNumbers = [];

let i = 0;

let numberMedia = 0;

// - la lista non è minore di 50
while (i < 50) {
  // - chiedo all'utente dei valori
  let number = parseInt(prompt("Inserisci un numero"));
  console.log("numero scritto: " + number);

  i = i + number;

  // - aggiungo quel valore come elemento dentro la lista
  listNumbers.push(number);

  numberMedia = parseInt(i / listNumbers.length);
}

console.table(listNumbers);

console.log(numberMedia);
