// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



//chiedo all'utente pari o dispari
const userChoice = prompt("Pari o Dispari?");
console.log(userChoice);

//chiedo all'utente un numero da 1 a 5
const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log(userNumber);

//creo il numero casuale del computer
const pcNumber = rndNumber(1, 5);
console.log(pcNumber);

function rndNumber(min, max) {
    const rndNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return rndNumber;
}

// eseguo la somma dei due numeri
const sumNumber = userNumber + pcNumber;
console.log(sumNumber);

//definisco se il numero è pari o dispari
let oddOrEven = ""
if(sumNumber % 2 == 0){
    oddOrEven = "pari"
} else {
    oddOrEven = "dispari"
}
console.log(oddOrEven);
  

//Dichiaro il vincitore
let defineWinner = "";
if(userChoice === oddOrEven){
    defineWinner = "Hai vinto"
}else {
    defineWinner = "Hai perso"
}
console.log(defineWinner);




