// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 16;
// Print the square root of a
// Printing more than one output or printing anything other than square root might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let squareRoot = 0;

for(let integer = 1 ; integer * integer <= a ; integer++) {
    squareRoot = integer;
}

console.log(squareRoot);