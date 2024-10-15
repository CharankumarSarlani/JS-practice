// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 12;
const b = 6;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// let min = a;
// let lcm = b;

// if (b < a) {
//     lcm = a;
//     min = b;
// }

// while (min > 0) {
//     if(lcm % min === 0) {
//         break;
//     }
//     lcm += lcm;
// }

// console.log(lcm);


// let hcf = 1;
// let divisor = a;
// let dividend = b;
// let rem = 1;

// if (a == 0) {
//     hcf = b;
//     rem = 0;
// }

// if (b == 0) {
//     hcf = a;
//     rem = 0;
// }
// if (b < a) {
//     let swapVar = a;
//     divisor = dividend;
//     dividend = swapVar;
// }
// while (rem > 0) {
//     hcf = divisor;
//     rem = dividend % divisor;
//     dividend = divisor;
//     divisor = rem;
// }

// let lcm = (a * b) / hcf;
// if (hcf == 0) {
//     lcm = 0;
// }
// console.log(lcm);


let min = a;
let max = b;

if (b < a) {
    min = b;
    max = a;
} 

let hcf = max;
let rem = min;

while (rem > 0) {
    hcf = min;
    rem = max % min;
    max = min;
    min = rem;
}

let lcm = (a * b) / hcf;
console.log(lcm)
