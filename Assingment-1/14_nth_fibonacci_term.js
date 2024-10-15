// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 3;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let secondLastNum = 0;
let lastNum = 1;
let nextNum = 0;

for (let currentTerm = 1; currentTerm < n; currentTerm++) {
    nextNum = secondLastNum + lastNum;
    secondLastNum = lastNum;
    lastNum = nextNum;
}

console.log(secondLastNum);
