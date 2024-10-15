// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 1;
const b = 0;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let min = a;
let max = b;

// if (max < min) {
//     min = b;
//     max = a;
// } 

let hcf = max;
let rem = min;

while (rem > 0) {
    hcf = min;
    rem = max % min;
    max = min;
    min = rem;
}

console.log(hcf)