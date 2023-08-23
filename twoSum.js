////////////////////////////////////////////////////////////////////
// Date Completed 08-23-23

////////////////////////////////////////////////////////////////////
// Difficulty Easy

////////////////////////////////////////////////////////////////////
// Prompt
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

///////////////////////////////////////////////////////////////////
// My Solution

const twoSum = (nums, target) => {
  let returnArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        returnArr.push(i, j);
      }
    }
  }
  return returnArr;
};

////////////////////////////////////////////////////////////////////
// What I learned
// My solution was pretty easy after the containsDuplicate problem. I did a similar action where I
// selected a value with i, then compared it with every other number using a nested loop, then performed the
// action again with the next value i. The only change was the if statement where I checked if those two values
// when added === the target. If they did, I pushed the indicies (not the values) onto an array which I initalized
// at the beginning.
var mapSolution = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
// This is a better solution. Here, instead of checking each value to see if they add up to the target, we take
// the target and subtract it from the current num and see if that number exists in the map. If it doesn't, we try
// again with the next number. Much faster solution and pretty smart!
