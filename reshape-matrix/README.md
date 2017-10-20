# reshape the matrix
## 问题
将给定的矩阵转换为另一个行x列大小的矩阵  
**example1:**
```
Input: nums=[[1, 2], [3, 4]]  r=1  c=4  
Output: [[1, 2, 3, 4]]
Explanation:  
将原2*2矩阵转换为1*4的矩阵，即为输出
```

**example2:**  
```
Input: nums=[[1, 2], [3, 4]]  r=2  c=4  
Output: [[1, 2], [3, 4]]  
Explanation:  
原矩阵为2*2，无法转为2*4的矩阵，所以还是输出原矩阵
```

## 思路
能否转换的判定条件：原先行x列 == 转换行x列
对于能转换的矩阵，先换成`1*n`的矩阵，再用数组做切割即可

[传送门](https://leetcode.com/problems/reshape-the-matrix/description/)