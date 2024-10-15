// Do not rename a, d or n, use them as input for your program.
// While testing we will change their values.
const a = 5;
const d = 8;
const n = 6;
// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let sumOfAp = 0;
let nthTerm = a;

for (let numOfTerms = 0; numOfTerms < n; numOfTerms++) {
    sumOfAp = sumOfAp + nthTerm;
    nthTerm = nthTerm + d;
}

console.log(sumOfAp);
