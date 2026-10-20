const colors = ["red", "green", "blue"];

// 1. Classic for loop
for (let i = 0; i < colors.length; i++) {
  console.log(i, colors[i]);
}

// 2. for...of 
for (const color of colors) {
  console.log(color);
}

// 3. forEach (takes a function)
colors.forEach(color => console.log(color));

// slice and splice
// slice returns a new array, splice modifies the original array
const nums = [10, 20, 30, 40, 50];
const part = nums.slice(1, 3);
// part: [20, 30]
// nums: [10, 20, 30, 40, 50]

nums.splice(1, 2);
// nums: [10, 40, 50]
// returns [20, 30]


{
  const nums = [10, 20, 30, 40, 50];

  const part = nums.slice(1, 3);
  console.log(part);   // what do you expect?
  console.log(nums);   // did nums change?

  nums.splice(1, 2);
  console.log(nums);   // did nums change this time?
}

// find objects in an array
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Liya" }
];

// Use .find() to look for the user whose id is 2
const foundUser = users.find(user => user.id === 2);

console.log(foundUser);          // Output: { id: 2, name: 'Sara' }
console.log(foundUser.name);     // Output: Sara


// code that finds object in an array by a property value. For example, find the user whose name is "Liya".
const foundUserByName = users.find(user => user.name === "Liya");
console.log(foundUserByName);    // Output: { id: 3, name: 'Liya' }

// Exercise 1
{
  const foods = ["pasta", "tacos", "sushi", "pizza", "curry"];

  console.log(foods[0]);                  // First item
  console.log(foods[foods.length - 1]);   // Last item
  console.log(foods.length);              // Number of items

  foods.push("ramen");          // Add to the end
  foods.unshift("dumplings");   // Add to the start
  foods.pop();                  // Remove the last item

  console.log(foods.includes("pizza"));

  // Loop with for
  for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
  }

  // Loop with for...of
  for (const food of foods) {
    console.log(food);
  }

  // Loop with forEach
  foods.forEach(food => console.log(food));

  const numbers = [5, 12, 8, 130, 44];
  let sum = 0;
  let largest = numbers[0];

  for (const number of numbers) {
    if (number > 10) {
      console.log(number);
    }

    sum += number;

    if (number > largest) {
      largest = number;
    }
  }

  console.log("Sum:", sum);
  console.log("Largest:", largest);

  const liya = users.find(user => user.name === "Liya");
  console.log(liya);
}
