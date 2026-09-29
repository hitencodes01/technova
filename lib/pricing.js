export const PRICE_PER_EVENT = 49;
export const ALL_FOUR_PER_EVENT = 45;

export function calcFee(count) {
  if (count <= 0) return 0;
  return count >= 4 ? 149 : PRICE_PER_EVENT * count;
}