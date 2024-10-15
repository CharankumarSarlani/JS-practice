// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'bcdAf';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let vowelCount = 0;
let vowels = "AEIOUaeiou";

for (let currentIndex = 0; currentIndex < string.length; currentIndex++) {
    const currentAlphabet = string[currentIndex];

    for (let vowelsCurrentIndex = 0; vowelsCurrentIndex < vowels.length; vowelsCurrentIndex++) {
        if (currentAlphabet === vowels[vowelsCurrentIndex]) {
            vowelCount++;
        }
    }
}

console.log(vowelCount); 