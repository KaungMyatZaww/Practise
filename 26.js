/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const array = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (!array.includes(nums[i])) {
      array.push(nums[i]);
    } else {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);

  return nums.length;
};
// console.log(removeDuplicates([1, 1, 2]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates_t = function (nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      console.log(nums);
      k++;
    }
  }
  return k;
};

console.log(removeDuplicates_t([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
