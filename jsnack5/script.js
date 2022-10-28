const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = [];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
        oddNumbers.push(numbers[i]),
        sum += numbers[i];
    }
}

console.log(`Numeri dispari: ${oddNumbers}`);
console.log(`Somma numeri dispari: ${sum}`);