// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 7;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let primeCandidate = a + 1;

for (let checkDivisibilityFrom = 2; checkDivisibilityFrom < primeCandidate; checkDivisibilityFrom++) {
    if (primeCandidate % checkDivisibilityFrom == 0) {
        primeCandidate++;
    }
} 

console.log(primeCandidate);

