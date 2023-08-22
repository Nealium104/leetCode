////////////////////////////////////////////////////////////////////
// Date Completed
// 08-21-23

////////////////////////////////////////////////////////////////////
// Difficulty
// Easy

////////////////////////////////////////////////////////////////////
// Prompt
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109

///////////////////////////////////////////////////////////////////
// My Solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let set = new Set(nums);

  return nums.length !== set.size;
};

////////////////////////////////////////////////////////////////////
// What I learned
// First, I learned that set doens't have a length property, but instead a size property.
// There are some alternative solutions that are good. I personally already knew that set could do this, so I went with that approach.
// Based on looking at other solutions, I think this is probably the optimal one, but there are some other good options depending
// on what you need to conserve. Also, this solution is more illustrative of the important concept.

const sortSolution = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// This solution first sorts the array into ascending order in order to put duplicates next to each other in the solution.
// Then we can check the selected value (i) to the next value (i+1).
// If the two values are the same, then it returns true. If not, nothing happens and we run the loop again, the next time selecting the
// value one increment higher. This will continue until a duplicate is found, or the entire array is checked for duplication.
// This also takes advantage of short circuiting, since the function will attempt to return true at every stage,
// only returning false once the loop is complete. In JavaScript, functions can only return once per execution, so that's what is being taken
// advantage of here.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const bruteForceSolution = (nums) => {
  if (nums.length < 1) {
    return false;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] === nums[j]) {
        return true;
      }
      j++;
    }
  }
  return false;
};

// This solution first checks to see if the nums array is less than 1. If it is, obviously no duplicates exist and we can return false.
// After that, we set up a loop where we check a selected value (i) against the value next to it (j). Then we set up a second loop inside of it
// where we check if i is equal to j. If it is, we cut the function early and return true. If not, we run the inner loop again, this time with j
// selecting the value one step higher. We do this until we check the first selected value (i) against every other value (j) in the array. If still
// no duplicates are found, then we add 1 to the initial selected value (i), and repeat the whole process over again. This is the worst possible
// solution, but it is educationally helpful in understanding early returns and nested loops.
