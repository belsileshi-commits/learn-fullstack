export function calculateTotal(prices) {
  return prices.reduce((total, price) => total + price, 0);
}

export function applyDiscount(total, percent) {
  return total * (1 - percent / 100);
}
