/**
 * @param  {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  let result = s.split(" ").map((item) => {
    return item.split("").reverse().join("");
  }).join(" ");

  return result;
};
