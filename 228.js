/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let res = [];
  let res_two = [];

  for (let i = 0; i < nums.length; i++) {
    let k = i + 1;
    if (nums[i] + 1 === nums[k]) {
      while (nums[k] + 1 === nums[k + 1]) {
        k++;
      }

      console.log(k);
      res.push(`${nums[i]}->${nums[k]}`);
      i = k;
    } else {
      res.push(nums[i].toString());
    }
  }

  return res;
};

const one = [0, 1, 2, 4, 5, 7];
const two = [0, 2, 3, 4, 6, 8, 9];

console.log(summaryRanges(one));
// console.log(summaryRanges(two));
