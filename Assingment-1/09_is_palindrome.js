// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 121;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let palindromeCandidate = a;
let revNum = 0;

while (palindromeCandidate > 0) {
    let lSD = palindromeCandidate % 10;
    revNum = revNum * 10 + lSD;
    palindromeCandidate = (palindromeCandidate - lSD) / 10;
}

console.log(a === revNum)
