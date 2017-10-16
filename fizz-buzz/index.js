/**
 * @param  {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let item = i;
    const remain3 = i % 3;
    const remain5 = i % 5;
    if (!remain3) item = 'Fizz';
    if (!remain5) item = 'Buzz';
    if (!remain3 && !remain5) item = 'FizzBuzz';
    result.push(item.toString()); 
  }

  return result;
}

console.log(fizzBuzz(15))