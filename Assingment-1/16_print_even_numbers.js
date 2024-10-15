// Do not rename startOfTheRange, endOfTheRange, use them as input for your program.
// While testing we will change their values.
const startOfTheRange = 10;
const endOfTheRange = 33;
// Print all the even numbers between startOfTheRange and endOfTheRange (both inclusive)
// For example, if startOfTheRange = 1 and endOfTheRange = 10, then the output should be
// 2
// 4
// 6
// 8
// 10
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
// let startOfTheRangeCopy=startOfTheRange

for (let evenNumCandidate = startOfTheRange; evenNumCandidate <= endOfTheRange; evenNumCandidate++) {
    if (evenNumCandidate % 2 == 0) {
        console.log(evenNumCandidate);
    }
}