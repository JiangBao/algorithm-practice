# hamming distance
## 问题
求两个数之间的汉明距离，即其二进制数对应位不同的个数  
**Input:** x = 1, y = 4  
**Output:** 2  
1 (0 0 0 1)  
4 (0 1 0 0)

## js实现思路
为了求二进制数对应位置不同的个数，可以用异或的特性：当对应位置不同时返回1。这样通过求`x ^ y`的二进制数中1的个数即为所求解

[传送门](https://leetcode.com/problems/hamming-distance/description/)