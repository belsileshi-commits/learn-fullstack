export function isEven(n) {
  return n % 2 === 0;
}

export function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce((sum, number) => sum + number, 0);
  return total / numbers.length;
}