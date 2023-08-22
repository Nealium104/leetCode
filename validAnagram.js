////////////////////////////////////////////////////////////////////
// Date Completed

////////////////////////////////////////////////////////////////////
// Difficulty

////////////////////////////////////////////////////////////////////
// Prompt

///////////////////////////////////////////////////////////////////
// My Solution
const isAnagram = (s, t) => {
  // Check if the strings are of different lengths. If so, they can't be anagrams.
  if (s.length !== t.length) return false;

  let hash1 = new Map();
  let hash2 = new Map();

  // Populate a Map with character counts
  const populateMap = (str, map) => {
    for (let char of str) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  };

  populateMap(s, hash1);
  populateMap(t, hash2);

  // Compare the maps
  for (let [key, value] of hash1) {
    if (hash2.get(key) !== value) return false;
  }

  return true;
};

// In this example, we first check and see if the strings are the same length or not. If they aren't, then they can't
// be anagrams, and so we return false immediately. Then, we create new empty maps so that we can create a hash table.
// The hash map is a good data structure for this problem because it allows us to use keys, similar to an object. I decided
// to use the hash map to get used to using Map. Next in our solution, we have populateMap which I'm using to create the map.
// We're using a for of loop where we set a map to the key of char, and a value that we have to take some additional steps to make.
// We first try to get the current value of that char, or we set the value to 0. Then we add 1 to it. After that, we populate our two hashes
// and then compare the values, returning false if they are not the same and returning true at the very end if they are.

////////////////////////////////////////////////////////////////////
// What I learned
// For this one, I definitely had to do a bit of research to figure out the best way to do it. I already knew about map, but I didn't really
// know how I'd manipulate it. So I had to look up how to add the key-value pairs.

var easyAnagram = function (s, t) {
  s = s.split("").sort();
  t = t.split("").sort();

  if (s.length !== t.length) return false;

  for (var i = 0; i < s.length; i++) if (s[i] !== t[i]) return false;

  return true;
};

// I really like this solution because it's a little easier to tell what's going on. First, they redefine the strings as arrays that are sorted
// because they are sorted, all they need to do is test and see if each character is the same in the same order. This isn't optimal as you'd need
// to do .sort which has a time complexity of O(nlogn) and a loop O(n).
