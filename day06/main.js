// 1.  A module can have only one default export.
// 2. A named import looks for an export specifically named `greet`; if `greet` is only the default export, this import fails.
// 3. A default export can be imported with any local name, so `sayHi` becomes the name used in this file.
import { add as sum } from "./math.js";
import { greet } from "./greet.js";
import { greet as greetAgain } from "./greet.js";
import students from "./students.js";
import calculatePrice, { TAX_RATE } from "./tax.js";
import { average, isEven } from "./utils.js";
import * as shop from "./shop.js";
import { decrement, increment, reset } from "./counter2.js";
import { addToCart, getCart, removeFromCart } from "./cart.js";

console.log("Math module:");
console.log(sum(1, 2));

console.log("Greeting module:");
console.log(greet("Alice"));
console.log(greetAgain("Bob"));

console.log("Student module:");
const highScoringStudentNames = students
  .filter(student => student.score > 80)
  .map(student => student.name);
console.log(highScoringStudentNames);

console.log("Utilities module:");
console.log("Is 8 even?", isEven(8));
console.log("Average:", average([70, 80, 90]));

console.log("Shop module:");
const subtotal = shop.calculateTotal([10, 20, 25]);
console.log("Subtotal:", subtotal);
console.log("After 20% discount:", shop.applyDiscount(subtotal, 20));

console.log("Private counter module:");
console.log("After increment:", increment());
console.log("After another increment:", increment());
console.log("After decrement:", decrement());
console.log("After reset:", reset());

try {
  console.log(count);
} catch (error) {
  console.log(`Direct access error: ${error.name}: ${error.message}`);
  // Expected: Direct access error: ReferenceError: count is not defined
}

console.log("Tax module:");
console.log(calculatePrice(100), TAX_RATE);

console.log("Shopping cart challenge:");
addToCart(321);
addToCart(321);
addToCart(322);
const cartItems = getCart();

for (const item of cartItems) {
  const lineTotal = item.price * item.quantity;
  console.log(
    `${item.name}: quantity ${item.quantity}, line total $${lineTotal}`
  );
}

const cartTotal = shop.calculateTotal(
  cartItems.map(item => item.price * item.quantity)
);
console.log("Cart total:", cartTotal);