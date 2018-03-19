/*
 * sqrt(x)
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-19 14:34:34
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-19 14:43:45
 */
/**
 * @param {number}  x
 * @return {number}
 */
const mySqrt = (x) => {
  if (x === 0) return 0;
  let pre, cur = 1;
  do {
    pre = cur;
    cur = x / (2 * pre) + pre / 2;
  } while (Math.abs(cur - pre) >0.00001)

  return Math.floor(cur);
};
