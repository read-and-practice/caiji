/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  let i = 0, len = nums.length;
  while(i < len) {
    if (i === nums[i]) {
      return i
    } else if (i < nums[i]) {
      i = nums[i]; // 跳跃优化
    } else {
      i++
    }
  }
  return -1;
};

module.exports.findMagicIndex = findMagicIndex;

