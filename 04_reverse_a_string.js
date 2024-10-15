// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'asd';
// Reverse the given string
// If string = "reverse" then output should be "esrever"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let reverseOfString = "";

for (let currentIndex = (string.length - 1); currentIndex >= 0; currentIndex--) {
    reverseOfString += string[currentIndex];
}

console.log(reverseOfString);