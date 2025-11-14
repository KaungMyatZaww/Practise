// my solution beats 87.88%
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(); // to store value and index
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      // if the result is found return that and current i : 2 indexes
      return [map.get(complement), i];
    }
    map.set(nums[i], i); // if not store the current i and its value
  }
};
// console.log()
