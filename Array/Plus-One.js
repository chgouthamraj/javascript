// 66.You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

var plusOne = function (digits) {
  let value = digits.join('');
  let x = (BigInt(value) + BigInt(1)).toString().split('');
  return x;
};
