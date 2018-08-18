/**
 * fliooing an image
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) => {
  for (let i = 0, len1 = A.length; i < len1; i++) {
    A[i].reverse();
    for (let j = 0, len2 = A[i].length; j < len2; j++) {
      if (A[i][j]) {
        A[i][j] = 0;
      } else {
        A[i][j] = 1;
      }
    } 
  }

  return A;
}

module.exports = flipAndInvertImage;
