/**
 * @param  {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let str = '1';

  for (let i = 1; i < n; i++) {
    let count = 1, temp = '';

    for (let j = 1, len = str.length; j < len; j++) {
      if (str[j] === str[j - 1]) {
        count++;
      } else {
        temp = temp + count.toString() + str[j - 1];
        count = 1;
      }
    }

    str = temp + count.toString() + str[str.length - 1];
  }

  return str;
}
