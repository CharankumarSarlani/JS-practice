// A palindromoc number reads the same both the ways . 
// The largest palindrome made from the product of two digit numbers is 9009 = 91 * 99 .
// Find the largest palindrome made from the product of two 3 digit numbers .
const startRange = 100;
const endRange = 999;

let largestPalindromeNumber = 0;
for (let start = endRange; start >= startRange; start--) {
    let multiples = endRange;
  
    while (multiples >= startRange) {
        let palindromeCandidate = 0;

        // to multiply ranges
        let product = start * multiples;
        const copyProduct = product;
        multiples--;

        // to check whether the number is palindrome or not 
        while (product > 0) {
            let lastDigit = product % 10;
            palindromeCandidate = (palindromeCandidate * 10) + lastDigit;
            product = (product - lastDigit) / 10;
        }

        if (palindromeCandidate == copyProduct) {
            largestPalindromeNumber = palindromeCandidate;
            break;
        }

    }
}

console.log(largestPalindromeNumber);
