/* 
problem link:
https://leetcode.com/problems/array-prototype-last/description/
 */

//can create frequency counter using object
function topK(words, k) {
  let frequencyObj = {};
  let result = [];
  for (let word of words) {
    frequencyObj[word] = (frequencyObj[word] || 0) + 1;
  }
  for (let key in frequencyObj) {
    if (frequencyObj[key] == k) {
        result.push(key);
    }
  }
  return result;
}

let  words= ["the","day","is","sunny","the","the","the","sunny","is","is"],
  k = 4;

console.log(topK(words,k));
