import {sayHi} from './anotherExamle.js';
import {isEven, double} from './numberTools.js';
import books from './books.js';
import calculatePrice, {taxRate} from './price.js';

console.log(sayHi("Alice"));
console.log(isEven(4));
console.log(isEven(5));
console.log(double(5));

console.log(books.filter(books => books.pages > 200).map(books => books.title));
console.log(calculatePrice(100));