/**
 * @param  {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  let sum = 0, record = [];
  for (let i = 0; i < ops.length; i++) {
    let score = 0;
    if (parseInt(ops[i])) {
      score = parseInt(ops[i]);
      record.push(score);
    } else {
      switch(ops[i]) {
        case '+':
          score = parseInt(record[record.length-2]) + parseInt(record[record.length-1]);
          record.push(score);
          break;
        case 'D':
          score = 2 * parseInt(record[record.length-1]);
          record.push(score);
          break;
        case 'C':
          score = -1 * record.pop();
          break;
      }
    }
    sum += parseInt(score);
  }

  return sum;
}
