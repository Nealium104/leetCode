////////////////////////////////////////////////////////////////////
// Date Completed 08-25-23

////////////////////////////////////////////////////////////////////
// Difficulty Easy

////////////////////////////////////////////////////////////////////
// Prompt
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
//     1 <= s.length <= 2 * 105
//     s consists only of printable ASCII characters.

///////////////////////////////////////////////////////////////////
// My Solution
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  return s === s.split("").reverse().join("");
};

////////////////////////////////////////////////////////////////////
// What I learned
// So I cheated just a little bit. I used chatGPT to write the regex for me, but other than that, this was insanely easy.
// I just changed s to fit the bill (no spaces or punctuation), and then checked s against a reversed s. It was a simple
// true/false so a ternary worked just fine.
// Upon looking at solutions, I see that this kind of defeats the purpose of learning the algorithm.
const pointerSolution = (s) => {
  let left = 0;
  let right = s.length - 1;

  const isLetter = (char) => {
    let code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122); // A-Z or a-z
  };

  const isDigit = (char) => {
    let code = char.charCodeAt(0);
    return code >= 48 && code <= 57; // 0-9
  };

  const isAlphanumeric = (char) => isLetter(char) || isDigit(char);

  while (left < right) {
    // Skip non-alphanumeric characters for left pointer
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    // Skip non-alphanumeric characters for right pointer
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Convert to lower case and compare
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// In this code, we first define our two pointers, left and right. Then, we check
// if it's a letter/number and then we set up a while loop. The condition we choose is
// if the left index is less than the right index, so when they meet in the middle, we can
// see if the string is a palindrome. we go through and skip the non-alphanumeric characters
// and then increment left and right. We add a false return condition if they are ever not equal
// because that would mean it's not a palindrome. Then, assuming it gets through that process
// without triggering a false, we return true.
