export const taxRate = 0.08;
export default function calculatePrice(price) {
    const totalPrice = price + (price * taxRate);
    return totalPrice;
}