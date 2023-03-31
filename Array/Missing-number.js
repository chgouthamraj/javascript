//268. Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
  let n = nums.length;
  let values = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i <= n; i++) {
    if (values[i] !== i) {
      return i;
    }
  }
};
