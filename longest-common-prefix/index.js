/*
 * longest common prefix
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-09 22:37:58
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-09 22:57:57
 */

/**
 * @param {string[]} strs
 * @return {string} 
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';

  let pre = strs[0];
  for (let i = 1, len = strs.length; i < len; i++) {
    while (strs[i].indexOf(pre) !== 0) {
      pre = pre.substring(0, pre.length - 1);
    }
  }

  return pre;
}
