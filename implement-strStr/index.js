/*
 * implement strStr
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-18 23:22:14
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-18 23:33:45
 */
/**
 * @param {string} haystack 
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  const hLen = haystack.length, nLen = needle.length;
  if (nLen === 0) return 0;
  if (hLen < nLen) return -1;
  for (let i = 0; i <= hLen - nLen; i++) {
    let j = 0;
    for (j = 0; j < nLen; j++) {
      if (haystack[i + j] !== needle[j]) break; 
    }
    if (j === nLen) return i;
  }
  return -1;
}
