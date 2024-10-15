// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 0;
const endOfRange = 7;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

for (let primeCandidate = startOfRange; primeCandidate <= endOfRange; primeCandidate++) {
    let noOfFactors = 0;

    for (let factors = 1; factors <= primeCandidate; factors++) {
        if (primeCandidate % factors === 0) {
            noOfFactors = noOfFactors + 1; 
        }
    }
    
    if (noOfFactors === 2) {
        console.log(primeCandidate);
    }
}

