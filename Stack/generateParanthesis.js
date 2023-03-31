//22.Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//openCount < n
//  closedCount < openCount
// return when closeCount and openCount is equal to ' n'

var generateParenthesis = function (n) {
  let stack = [];
  let res = [];

  const comboGenerator = (openCount, closedCount) => {
    if (openCount == closedCount && openCount == n) {
      res.push(stack.join(''));
      return;
    }
    if (openCount < n) {
      stack.push('(');
      comboGenerator(openCount + 1, closedCount);
      stack.pop();
    }
    if (closedCount < openCount) {
      stack.push(')');
      comboGenerator(openCount, closedCount + 1);
      stack.pop();
    }
  };
  comboGenerator(0, 0);
  return res;
};

console.log(generateParenthesis(2));
