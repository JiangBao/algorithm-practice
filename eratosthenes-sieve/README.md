# eratosthenes sieve
## 问题
质数筛选算法  
求出某个数内的质数的个数

## 思路
用一个数组，下标表示`n`内所有数，假设都以`true`或`1`表示都是质数，则从最小的质数2开始筛选：
1. 读取队列当前最小质数2，然后把2的倍数删除
2. 读取队列当前最小质数3，然后把3的倍数删除
3. 读取队列当前最小质数5，然后把5的倍数删除
4. ...


[传送门](https://github.com/coells/100days/blob/master/day%2005%20-%20eratosthenes%20sieve.ipynb)