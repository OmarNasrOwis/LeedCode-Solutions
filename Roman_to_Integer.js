/* 
problem link:
https://leetcode.com/problems/roman-to-integer/description/
 */

//solution
/**
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let ans = 0;
  for (let i = s.length - 1; ~i; i--) {
    let num = roman[s.charAt(i)];
    if (4 * num < ans) ans -= num;
    else ans += num;
  }
  return ans;
};
