/**
 * @param  {number[]} candies
 * @return {number}
 */
const distributeCandies = (candies) => {
  let set = new Set(candies);
  const kinds = [...set].length;
  return kinds > candies.length/2 ? candies.length/2 : kinds;
}
