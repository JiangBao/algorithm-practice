/**
 * @param  {number} x
 * @param  {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let res = x ^ y;
  let distance = 0;
  while(res) {
    distance += res % 2;
    res = parseInt(res / 2);
  }

  return distance;
}

const res = hammingDistance(3, 4);