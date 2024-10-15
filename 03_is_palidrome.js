// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "a a";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let reverseOfString = "";

for (let currentIndex = (string.length - 1); currentIndex >= 0; currentIndex--) {
    reverseOfString += string[currentIndex];
}

const isPalindrome = string === reverseOfString ? true : false;
console.log(isPalindrome);