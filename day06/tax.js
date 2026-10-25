export const TAX_RATE = 0.08;

export default function calculatePrice(price) {
  return price * (1 + TAX_RATE);
}
