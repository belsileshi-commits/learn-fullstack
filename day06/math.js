// export makes these functions available to other files
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default add;

export function square(n) {
  return n * n;
}

// This variable has NO export keyword, so it stays completely private to math.js!
const secret = 42;