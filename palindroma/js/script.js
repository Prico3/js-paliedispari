// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

//chiedo all'utente di inserire una parola
const userWord = prompt("Dimmi una parola");


// funzione per capire se una parola è palindroma o meno

function checkPalindrome(userWord) {

    // converto la stringa in un array
    const arrayValues = userWord.split('');

    // inverto il valore dell'array
    const reverseArrayValues = arrayValues.reverse();

    // riconverto l'array in una stringa
    const reverseString = reverseArrayValues.join('');

    if(userWord == reverseString) {
        console.log('Questa parola è palindroma');
    }
    else {
        console.log('Questa parola non è palindroma');
    }
}


checkPalindrome(userWord);
