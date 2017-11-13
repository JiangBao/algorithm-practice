/**
 * @param  {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}