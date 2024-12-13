const ValidParanthesis = (input) => {
  let stack = [];
  let map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  for (let i = 0; i < input?.length; i++) {
    if (map.has(input[i])) {
      if (stack.length > 0 && stack[stack.length - 1] === map.get(input[i])) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(input[i]);
    }
  }
  return stack.length === 0;

  //   let stack = [];
  //   for (let i = 0; i < input?.length; i++) {
  //     if (input[i] === "(" || input[i] === "{" || input[i] === "[") {
  //       stack.push(input[i]);
  //     } else if (
  //       (stack.length > 0 &&
  //         input[i] === ")" &&
  //         stack[stack.length - 1] === "(") ||
  //       (input[i] === "}" && stack[stack.length - 1] === "{") ||
  //       (input[i] === "]" && stack[stack.length - 1] === "[")
  //     ) {
  //       stack.pop();
  //     } else {
  //       return false;
  //     }
  //   }
  //   return stack.length === 0;
};

export default ValidParanthesis;
