/**
 * @param  {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  let arr = [], len = s.length;
  for (let i = 0; i < len; i++) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt();
    arr[index] = arr[index] ? arr[index]+1 : 1;
  }
  for (let i = 0; i < len; i++) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt();
    if (arr[index] === 1) {
      return i;
    }
  }

  return -1;

  // for(var i = 0; i <s.length; i++){
  //   if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
  //     return i;
  //   }
  // }
  // return -1;
}
