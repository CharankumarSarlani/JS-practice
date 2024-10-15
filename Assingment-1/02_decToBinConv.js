// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 3;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let decimalNum = a;

if (decimalNum === 0) {
      console.log(0);
}

while (decimalNum > 0) {
      let bit = decimalNum % 2;
      decimalNum = (decimalNum - bit) / 2;
      
      console.log(bit);
}
