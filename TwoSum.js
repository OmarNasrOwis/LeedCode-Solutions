/* 
problem link:
https://leetcode.com/problems/two-sum/description/
*/

//solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //condition that array is not empty
  if (nums.length <= 0) {
    return 1;
  }
  // let num1index =0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // if (nums[i]==nums[j]) {
      //     j=i+1;
      // }
      if (target - nums[i] == nums[j]) {
        // console.log(`indexes are ${num1index} and ${i}`);
        return [i, j];
      }
    }
  }
};
