//9. Given an integer x, return true if x is a palindrome
// and false otherwise.
var isPalindrome = function (x) {
  var rem,
    temp,
    final = 0;
  var number = x;
  temp = number;
  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }
  if (final == temp) {
    return true;
  } else {
    return false;
  }
};
