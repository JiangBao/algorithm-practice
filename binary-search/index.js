/**
 * @param  {number[]}  data
 * @param  {number}    item
 * @return {unmber}
 */
const binarySearch = (data, item) => {
  let left = 0, right = data.length - 1;

  while(left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (item < data[middle]) {
      right = middle - 1;
    } else if (item > data[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}
