/* 
problem link:
https://leetcode.com/problems/merge-two-sorted-lists/description/
 */

function topK(words, k) {
  const map = new Map();
  for (const word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  let arr = new Array();
  for (let key of map.keys()) {
    arr.push(key);
  }
  arr.sort();
  arr.sort((a, b) => map.get(b) - map.get(a));
  return arr.slice(0, k);
}
