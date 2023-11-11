/* 
problem link:
https://leetcode.com/problems/counter/description/
*/

//solution
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    let counter = n;
    return function () {
    const counterNew = counter;
    counter = counter + 1;
    return counterNew;
  };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
