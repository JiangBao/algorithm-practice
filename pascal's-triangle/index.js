/**
 * @param  {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  } else {
    let res = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
      for (let j = 0, len = res[i-1].length-1; j < len; j++) {
        if (res[i]) {
          res[i].push(res[i-1][j] + res[i-1][j+1])
        } else {
          res[i] = [res[i-1][j] + res[i-1][j+1]];
        }
      }
      res[i].unshift(1);
      res[i].push(1);
    }

    return res;
  }
}
