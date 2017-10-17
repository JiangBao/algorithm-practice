# array partition
## 问题
对于一个由2n个整数组成的数组，将其划分为n对，使得每一对中最小元素相加的总和最大。  
**example:**
```
Input: [1, 4, 3, 2]  
Output: 4
Explanation: 4 = min(1, 2) + min(3, 4)
```

## 思路
对于数组`a1, b1, a2, b2...an, bn`;  
需要将数组划分为如下形式：  
`(a1, b1), (a2, b2), ...(an, bn)`  
然后求`Sm = min(a1, b1) + min(a2, b2) + ... + min(an, bn)`  
假设对于每组`bi >= ai`，则`Sm(Sm = a1 + a2 + a3 + ... + an)`的最大值即为所求值  

定义：  
1、`Sa = a1 + b1 + a2 + b2 +...+ an + bn`，这是一个常数  
2、`di = |ai - bi|`, `Sd = d1 + d2 + ... dn`  

可以推出：`Sa = 2Sm + Sd` ==> `Sm = (Sa - Sd) / 2` ==> 只需Sd最小，即可求得Sm的最大值  
对于已排序数组，`a1<=b1<=a2<=b2`，这样的Sd最小。所以可以先对数组排序，然后从第一项起，每隔一项进行相加，所得即为最终解

[传送门](https://leetcode.com/problems/array-partition-i/description/)