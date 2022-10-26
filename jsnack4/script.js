list = [];

for (let i = 1; i <= 6; i++) {
    const number = parseInt(prompt("Inserisci un numero"));
    if(number % 2 !== 0)
    list.push(`${number}`);
}
console.log(list);