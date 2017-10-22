class Solution {
  constructor(n) {
    this.n = n;
  }

  // sieve of Eratosthenes method
  eratosthenes() {
    let arr = [];
    for (let i = 2; i < this.n; i++) {
      arr[i] = 1;
    }
  
    for (let i = 2; i * i < this.n; i++) {
      if (arr[i] === 1) {
        for (let j = i; i * j < this.n; j++) {
          arr[i * j] = 0;
        }
      }
    }
  
    return arr.reduce((sum, num) => {
      return sum + num;
    }, 0);
  }
}
