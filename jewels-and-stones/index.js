/**
 * @param {string} J 
 * @param {string} S
 * @return {number} 
 */
var numJewelsInStones = function(J, S) {
  let num = 0;
  for (let i = 0, len = S.length; i < len; i++) {
    if (J.indexOf(S[i]) != -1) {
      num++;
    }
  }

  return num;
}