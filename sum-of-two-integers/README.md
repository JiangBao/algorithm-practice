# sum of two integers
## 问题
不使用`+`运算符，计算两个整数的和

## 思路
先计算不带进位的两数和(异或)，再将结果与进位(与<<1)相加，若结果仍有进位，则递归直到进位为0为止，所得结果即为解。

[传送门](https://leetcode.com/problems/sum-of-two-integers/description/)