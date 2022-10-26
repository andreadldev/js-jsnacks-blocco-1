let sum = 0;

for (let i = 1; i <= 10; i++) {
    const number = parseInt(prompt('Inserisci numero'));
    sum = sum + number;
}

console.log(`${sum}`);