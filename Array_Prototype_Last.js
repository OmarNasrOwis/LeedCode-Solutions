/* 
problem link:
https://leetcode.com/problems/array-prototype-last/description/
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length <1){
        return -1;
    }
    return this[this.length-1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
