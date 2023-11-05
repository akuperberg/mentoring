var isValid = function(s) {
    const parenthesisArray = [];

  for (let i = 0; i < s.length; i += 1) {
    const topOfArray = parenthesisArray[parenthesisArray.length - 1];

    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      parenthesisArray.push(s[i]);
    } else if (s[i] === ')' && topOfArray === '(' && parenthesisArray.length !== 0) {
      parenthesisArray.pop();
    } else if (s[i] === ']' && topOfArray === '[' && parenthesisArray.length !== 0) {
      parenthesisArray.pop();
    } else if (s[i] === '}' && topOfArray === '{' && parenthesisArray.length !== 0) {
      parenthesisArray.pop();
    } else {
      return false;
    }
  }
  if (parenthesisArray.length !== 0) {
    return false;
  } else return true;
};