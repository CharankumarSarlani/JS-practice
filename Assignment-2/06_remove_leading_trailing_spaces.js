// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "  a   aa  ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
// let modifiedString = "";
// let charIndex = 0;
// for (let currentIndex = 0; currentIndex < string.length; currentIndex++) {
//     if (string[currentIndex] === " ") {
//         continue;
//     } else {
//         charIndex = currentIndex;
//     }

//     if (currentIndex > 0)
//         break;
// }

// let charIndex1 = 0;
// for (let currentIndex = string.length - 1; currentIndex > 0; currentIndex--) {
//     if (string[currentIndex] === " ") {
//         continue;
//     } else {
//         charIndex1 = currentIndex;
//     }

//     if (charIndex1 > 0)
//         break;
// }



const stringLength = string.length;
let currentIndex = 0;

while (string[currentIndex] === " ") {
    currentIndex++;
}

const startIndex = currentIndex;
currentIndex = stringLength - 1;

while (string[currentIndex] === " ") {
    currentIndex--;
}

const endIndex = currentIndex; 

for (let currentIndex = charIndex; currentIndex <= charIndex1; currentIndex++) {
    modifiedString += string[currentIndex];
}

console.log(modifiedString);