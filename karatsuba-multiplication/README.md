# karatsuba multiplication
## 问题
karatsuba 乘法算法  
主要用于两个大数相乘，普通乘法复杂度为`n^2`，karatsuba算法的复杂度为`3n^log3(3n^1.585)`。

## 思路
两个大数`x`、`y`可以拆分成：`x = x1*10^m + x0; y = y1*10^m + y0`。所以  
```
z = x * y
  = (x1*10^m + x0) * (y1*10^m + y0)
  = z2*10^2m + z1*10^m + z0

其中：
z0 = x0y0
z2 = x1y1
z1 = x1y0 + x0y1
   = (x1 + x0)(y1 + y0) - x1y1 - x0y0
```

[传送门](https://github.com/coells/100days/blob/master/day%2010%20-%20karatsuba%20multiplication.ipynb)