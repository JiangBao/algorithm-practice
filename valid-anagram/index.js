/**
 * @param  {string} s
 * @param  {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const sLen = s.length, tLen = t.length;
  let arr = [];
  if (sLen != tLen) {
    return false;
  }

  for (let i = 0; i < sLen; i++) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt();
    arr[index] = arr[index] ? arr[index] + 1 : 1;
  }

  for (let i = 0; i < tLen; i++) {
    const index = t.charCodeAt(i) - 'a'.charCodeAt();
    if (!arr[index]) {
      return false;
    }
    arr[index] -= 1;
    if (arr[index] < 0) {
      return false;
    }
  }

  return true;
}
