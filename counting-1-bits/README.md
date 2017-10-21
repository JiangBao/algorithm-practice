# counting 1 bits
## 问题
求一个int型数的二进制形式有多少位的1

## 思路
1. 循环每次将n右移一位，判断`n&1`是否为1，这种方式费时
2. 巧用 `n&(n-1)`![solution](https://leetcode.com/media/original_images/191_Number_Of_Bits.png)

关于`n&(n-1)`:  
`n`与`n-1`的区别在于，从右向左的第一个1到最右，和`n-1`完全相反，所以`n&(n-1)`效果就是将最低位的1置0。  
例如：`n = 110100` -> `n-1 = 110011` -> `n&(n-1) = 110000`  
应用：  
* 求一个数的二进制表示中1的个数：`while(n) {count++; n&(n-1)}`
* 判断一个数是否是2的方幂：`n > 0 && (n&(n-1) == 0)`
* 计算`N!`的质因数2的个数

[传送门](https://github.com/coells/100days/blob/master/day%2004%20-%20counting%201-bits.ipynb)