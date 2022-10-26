const firstWord = prompt("Inserisci parola 1");

const secondWord = prompt("Inserisci parola 2");

if (firstWord.length > secondWord.length) {
    console.log(`parola più corta: ${secondWord} - parola più lunga: ${firstWord}`);
} else 
    console.log(`parola più corta: ${firstWord} - parola più lunga: ${secondWord}`);