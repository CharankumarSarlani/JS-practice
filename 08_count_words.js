// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = '      ';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let numOfWords = 0;

for (let currentIndex = 0; currentIndex < string.length - 1 ; currentIndex++) {

    const isWordFound = (currentIndex === 0 || (string[currentIndex] === " " && string[currentIndex + 1] !== " "));
    if (isWordFound) {
        numOfWords++;
    }

}

numOfWords = string === ("" || " ") ? 0 : numOfWords;
console.log(numOfWords);