// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "   char";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let modifiedString = "";

for (let currentIndex = 0; currentIndex < string.length; currentIndex++) {
    if (string[currentIndex] !== " " || string[currentIndex + 1] !== " ") {
        modifiedString += string[currentIndex];
    } 
}

console.log(modifiedString);