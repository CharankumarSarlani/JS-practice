// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 153;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let armstrongNumCandidate = a;
let tenMultiples = 1;
let numOfDigits = 0;

// check number of digits
while (tenMultiples < armstrongNumCandidate + 1) {
    tenMultiples = 10 * tenMultiples;
    numOfDigits = numOfDigits + 1;
}

// finding armstrong 
let sumOfLsd = 0;
while (armstrongNumCandidate > 0) {
    let leastSignificantDigit = armstrongNumCandidate % 10;
    sumOfLsd = leastSignificantDigit ** numOfDigits + sumOfLsd;
    armstrongNumCandidate = (armstrongNumCandidate - leastSignificantDigit) / 10;
}

// validating is armstrong or not
console.log(sumOfLsd === a);


