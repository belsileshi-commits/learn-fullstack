import products from "./products.js";

let cart = [];

export function addToCart(productId) {
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
    return getCart();
  }

  const product = products.find(item => item.id === productId);

  if (!product) {
    throw new Error(`No product found with id ${productId}`);
  }

  cart.push({ ...product, quantity: 1 });
  return getCart();
}

export function removeFromCart(productId) {
  cart = cart.filter(product => product.id !== productId);
  return getCart();
}

export function getCart() {
  return cart.map(item => ({ ...item }));
}

export function clearCart() {
  cart = [];
  return getCart();
}
