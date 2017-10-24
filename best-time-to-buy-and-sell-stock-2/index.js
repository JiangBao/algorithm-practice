/**
 * @param  {number[]}  prices
 * @return {number}
 */
const maxProfit = (prices) => {
  var profit = 0;
  for (let i = 0, len = prices.length; i< len; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}
