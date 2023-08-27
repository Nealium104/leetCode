////////////////////////////////////////////////////////////////////
// Date Completed 08-27-23

////////////////////////////////////////////////////////////////////
// Difficulty Easy

////////////////////////////////////////////////////////////////////
// Prompt
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:
// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Example 2:
// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

// Constraints:

//     -1000 <= n <= 1000
//     At most 1000 calls to counter() will be made

///////////////////////////////////////////////////////////////////
// My Solution
const createCounter = (n) => {
  let count = 0;
  return function () {
    let result = n + count;
    count++;
    return result;
  };
};

////////////////////////////////////////////////////////////////////
// What I learned
// This one was a good stretch. I've never needed to actually use a closure outside of building web applications.
// This function starts with count = 0 outside the inner function so we can have a pass by reference being 0 and then
// 'store' the modified data within the inner function. The only thing that gave me a little trouble was working around
// the early return of JS. I was putting count at the end at first, not realizing that when the function gets to a return,
// it's not going to run the rest of the function. I ended up deciding to store the result in its own variable
// and then returning it after the increment.
