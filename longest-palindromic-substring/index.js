/**
 * @param {string}  s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let t = '$#';
  const len = s.length;
  for (let i = 0, len = s.length; i < len; i++) {
    t += s[i];
    t +='#';
  }
  let p = [];
  let id = 0;
  let mx = 0;
  let resId = 0;
  let resMx = 0;
  for (let i = 0; i < len; i++) {
    p[i] = mx ? Math.min(p[2 * id - i] || 0, mx -i) : 1;
    while (t[i + p[i]] === t[i - p[i]]) ++p[i];
    if (mx < i + p[i]) {
      mx = i + p[i];
      id = i;
    }
    if (resMx < p[i]) {
      resMx = p[i];
      resId = i;
    }
  }

  return s.substr((resId - resMx) / 2, resMx - 1);
};

module.exports = longestPalindrome;
