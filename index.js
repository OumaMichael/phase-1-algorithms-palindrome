function isPalindrome(word) {
  // Reverse the string
  const reversedStr = word.split('').reverse().join('');

  // Check if original and reversed strings are the same
  return word === reversedStr;
}

// Test Cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false

/* 
1. Define function isPalindrome(word)
2. Reverse the string
3. Compare original string with reversed string
4. If both are equal, return true (it’s a palindrome)
5. Otherwise, return false (not a palindrome)
*/

/*
Explanation:
- I take the input string and split it into an array of characters.
- I then reverse this array and join it back into a string.
- Finally, I compare the reversed string with the original string.
- If both are equal, the word is a palindrome and I return `true`; otherwise, return `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
