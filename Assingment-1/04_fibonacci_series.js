// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let nextNumber = 0;
let secondLastNumber = 0;
let lastNumber = 1;

for (let currentTerm = 1; currentTerm <= n; currentTerm++) {
    console.log(secondLastNumber);

    nextNumber = secondLastNumber + lastNumber;
    secondLastNumber = lastNumber;
    lastNumber = nextNumber;
}
