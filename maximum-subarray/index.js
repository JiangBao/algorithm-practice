/**
 * @param  {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  const len = nums.length;
  let dp = []; // dp[i] = lagest sum end with nums[i]
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < len; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }

  return max;
}
