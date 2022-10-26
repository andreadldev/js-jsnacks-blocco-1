const firstWord = prompt("Inserisci parola 1");
console.log(`${firstWord}`);

const secondWord = prompt("Inserisci parola 2");
console.log(`${secondWord}`);

if (firstWord.length > secondWord.length) {
    console.log(`parola più corta: ${secondWord} - parola più lunga: ${firstWord}`);
} else 
    console.log(`parola più corta: ${firstWord} - parola più lunga: ${secondWord}`);