class Solution {
  constructor(num) {
    this.num = num;
  }

  /**
   * @param  {number} num
   * @return {number}
   */
  hammingWeight() {
    let n = 0;
    while (this.num) {
      n++;
      this.num &= this.num - 1;
    }

    return n;
  }
}
