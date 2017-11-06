/**
 * @param  {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let sum = 0;
  
  for (let i = 0, len = s.length; i < len; i++) {
    const val = map[s[i]], next = map[s[i+1]];
    val < next ? sum -= val : sum += val;
  }

  return sum;
}
