/**
 * @param  {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  let result = words.filter((word) => {
    return /^([qwertyuiop]*|[asdfghjkl]*|[zxcvbnm]*)$/.test(word.toLowerCase());
  });

  return result;
};
