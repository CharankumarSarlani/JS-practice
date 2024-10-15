// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 13;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let numOfFactors = 0;

for (let divisors = 2; divisors < a / 2 ; divisors++) {
    if (a % divisors === 0) {
        numOfFactors++;
    }
}

console.log(numOfFactors === 0);
