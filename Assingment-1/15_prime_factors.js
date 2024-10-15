// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 12;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let naturalNumber = a;
let primeFactorCandidate = 2;
let productOfPrimes = 1;

for(primeFactorCandidate = 2; primeFactorCandidate <= naturalNumber; primeFactorCandidate+=2 ){
    let remainder = naturalNumber % primeFactorCandidate;
    if (remainder === 0) {
       

        productOfPrimes = productOfPrimes * naturalNumber;
        naturalNumber = naturalNumber / primeFactorCandidate;
    } 
}

console.log(primeFactorCandidate-1);
