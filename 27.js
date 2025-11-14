/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement_t = function (nums, val) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(nums);
  return nums.length;
};

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
