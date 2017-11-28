# count and say
## 问题
计数和发言序列：
```
1
11
21
1211
111221
```
* `1`读作`one 1`，记作`11`
* `11`读作`two 1`，记作`21`
* `21`读作`one 2 one 1`，记作`1211`

本质是求序列的第`n`个字符串：记录前一个字符串中连续相同字符数量并插入到此字符前。

[传送门](https://leetcode.com/problems/count-and-say/description/)