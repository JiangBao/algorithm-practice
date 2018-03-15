/*
 * reverse bits
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-15 17:22:51
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-15 17:44:19
 */

/**
 * @param {number}  // a positive integer
 * @return {number} // a positive integer 
 */
const reverseBits = (n) => {
  let res = 0;
  for (let i = 0; i < 32; i++, n >>= 1) {
    res = res << 1 | (n & 1);
  }

  return res>>>0;
}
