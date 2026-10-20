const products = [
  { name: "Laptop", price: 900, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Mouse", price: 20, inStock: true },
];

const names = products.map(p => p.name);
console.log(names);

const doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled);

// exercise



const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 95 },
];
// Use map to get an array of just the names.
const studentNames = students.map(student => student.name);
console.log(studentNames); // Output: ["Alice", "Bob", "Charlie", "David"]

// Use filter to get an array of students who scored 80 or above.
const passingStudents = students.filter(student => student.score >= 80);
console.log(passingStudents); // Output: [{ name: "Alice", score: 85 }, { name: "Bob", score: 92 }, { name: "David", score: 95 }]


// use reduce to get total score and then calculate average score.
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;
console.log(averageScore); // Output: 87.5
// Chain filter and map to get the names of students with a score above 85.
const highPerformingStudentNames = students
  .filter(student => student.score > 85)
  .map(student => student.name);
console.log(highPerformingStudentNames); // Output: ["Alice", "Bob", "David"]

// Use spread to create a new student list with one extra student, without using push.

const newStudent = { name: "Eve", score: 88 };
const updatedStudents = [...students, newStudent];
console.log(updatedStudents);

// Challenge: use reduce to find the highest score
const highestScore = students.reduce((max, student) => Math.max(max, student.score), 0);
console.log(highestScore); // Output: 95


// distructuring and spread
const [first, second] = [10, 20, 30];
console.log(first, second);

const { name, price } = products[0];
console.log(name, price);

const nums = [1, 2, 3];
const more = [...nums, 4, 5];
console.log(more, nums);

const updated = { ...products[0], price: 800 };
console.log(updated, products[0]);