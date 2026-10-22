const globalName = "global";

function outer() {
  const outerName = "outer";

  function inner() {
    const innerName = "inner";
    console.log(globalName, outerName, innerName);
  }

  inner();
  // console.log(innerName);   // uncomment: what happens?
}

outer();
// console.log(outerName);     // uncomment: what happens?

// let and const are block-scoped
if (true) {
  let blockLet = "only inside this block";
  const blockConst = "also only inside this block";
  console.log(blockLet, blockConst);
}
// console.log(blockLet);   // ReferenceError: blockLet is not defined
// console.log(blockConst); // ReferenceError: blockConst is not defined

// var is not block-scoped
if (true) {
  var blockVar = "available outside the block";
}
console.log(blockVar);

// var is function-scoped; let and const are also limited to the function
function showFunctionScope() {
  if (true) {
    var functionVar = "var belongs to the function";
    let functionLet = "let belongs to this block";
    const functionConst = "const belongs to this block";
    console.log(functionLet, functionConst);
  }

  console.log(functionVar); // Works: var is function-scoped
  // console.log(functionLet);   // ReferenceError: let is block-scoped
  // console.log(functionConst); // ReferenceError: const is block-scoped
}

showFunctionScope();
// console.log(functionVar); // ReferenceError: functionVar is inside the function

// const prevents reassignment, but an array or object declared with const can be changed
const favoriteColors = ["blue", "green"];
favoriteColors.push("purple");
console.log(favoriteColors);
// favoriteColors = ["red"]; // TypeError: cannot reassign a const variable
const foods = ["injera", "kitfo", "doro wat"];
foods.push("shiro");
console.log(foods);
// foods =["pizza" , "burger"]; // TypeError: cannot reassign a const variable

function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}
console.log(calculateTotal([10, 20, 25])); // Output: 55

// applyDiscount(total, discountPercent)

// Accepts a total and a discount percentage.
// Returns the total after applying the discount.
function applyDiscount(total, discountPercent) {
  const discount = total * (discountPercent / 100);
  return total - discount;
}
console.log(applyDiscount(55, 20)); // Output: 44

// Closure: the returned function remembers the variable from createCounter
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3


// exercise 4
const isEven = (n) => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(5));
// trying to see if the function isEven can be used to check if a number is odd
const isOdd = (n) => n % 2 !== 0;
console.log(isOdd(4));
console.log(isOdd(5));
// 2
const square = (n) => n * n;
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// 3

function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log(greet("Abel")); // Output: "Hello, Abel!"
console.log(greet("Bob", "Hi")); // Output: "Hi, Bob!"

// Write a function average(numbers) that takes an array and returns the average. Use reduce.
function average(numbers) {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}
console.log(average([1, 2, 3, 4, 5])); // Output: 3

function average2(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((total, n) => total + n, 0);
  return sum / numbers.length;
}
console.log(average2([1, 2, 3, 4, 5])); // Output: 3

/* Write makeGreeter(greeting) that returns a function. Then create sayHi = makeGreeter("Hi")
  and sayHello = makeGreeter("Hello") and test both.*/
function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}
const sayHi = makeGreeter("Hi");
const sayHello = makeGreeter("Hello");
console.log(sayHi("Abel")); // Output: "Hi, Abel!"
console.log(sayHello("Bob")); // Output: "Hello, Bob!"


// challenge
function once(fn) {
  let called = 0
  return function(...args){
    if (called) return;
    called = 1;
    return fn(...args);
  }
}
const greetOnce = once((name) => `Hello, ${name}!`);

console.log(greetOnce("Abel")); // "Hello, Abel!"
console.log(greetOnce("Bob"));  // undefined

function makeAdder(amount){
  return function(number){
    return number + amount;
  }
}
const addTen = makeAdder(10);
console.log(addTen(5));

