 let count = 0;    //private variable to keep track of the count

export function increment() {
  count += 1; // closure to access the private variable
  return count;
}

export function decrement() {
  count -= 1; // closure to access the private variable
  return count;
}

export function reset() {
  count = 0; //
  return count;
}
