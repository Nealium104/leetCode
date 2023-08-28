////////////////////////////////////////////////////////////////////
// Date Completed 08-29-23

////////////////////////////////////////////////////////////////////
// Difficulty Easy

////////////////////////////////////////////////////////////////////
// Prompt
// Given an integer x, return true if x is a
// palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:
//     -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

///////////////////////////////////////////////////////////////////
// My Solution
var isPalindrome = function (x) {
  return x == x.toString().split("").reverse().join("");
};

////////////////////////////////////////////////////////////////////
// What I learned
// So I know this is another two pointer problem, but I've forgotten how to implement that, so the
// rest of this explanation is going to be me reviewing how to do that. That will also solve
// the followup.

var pointerSolution = function (x) {
  x = x.toString();
  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left] !== x[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

// I was reminded that numbers don't have a length property, so that was frustrating to realize. This is
// a proper two-pointer solution. We look at the right and left sides comparing them until we reach the middle
// at which we break from the loop and return true. I think I've gotten the value I needed from this leetCode, but I
// did want to include a solution that doesn't require us to change to string. This uses math to reverse the digits
// instead of using a string method.

var noStringSolution = function (x) {
  if (x < 0) return false; // Negative numbers cannot be palindromes
  let original = x;
  let reversed = 0;

  while (x > 0) {
    let lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
};
