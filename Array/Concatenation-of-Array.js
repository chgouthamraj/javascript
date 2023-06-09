//1929 Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

var getConcatenation = function (nums) {
  let ans = [];
  let index = 0;
  let k = nums.length;
  for (i = 0; i < 2 * nums.length; i++) {
    if (index >= 0 && index != k) {
      ans[i] = nums[index];
      index++;
    } else {
      index = 0;
      ans[i] = nums[index];
      index++;
    }
  }
  return ans;
};
