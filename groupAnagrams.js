////////////////////////////////////////////////////////////////////
// Date Completed 08-24-23

////////////////////////////////////////////////////////////////////
// Difficulty Medium

////////////////////////////////////////////////////////////////////
// Prompt
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lowercase English letters.

///////////////////////////////////////////////////////////////////
// My Solution
const groupAnagrams = (strs) => {
  let map = new Map();
  for (let str of strs) {
    let sorted = [...str].sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return [...map.values()];
};

////////////////////////////////////////////////////////////////////
// What I learned
// So this one was a little harder to figure out. I learned about the concept of keys which is how I checked
// to see if the selected value (str) is unique or not.
var objectSolution = function (strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  return Object.values(obj);
};
