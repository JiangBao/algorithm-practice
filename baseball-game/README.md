# baseball game
## 问题
为一场棒球比赛计分，得到一个代表得分的字符串组成的数组，输出最终得分。  
字符串含义：  
1. `Integer`：整数即代表本轮得分  
2. `+`：本轮得分为前两轮有效得分的和  
3. `D`：本轮得分为上一轮有效得分的两倍  
4. `C`：代表上一轮得分无效，需减掉  

**example:**
```
Input: ["5", "2", "C", "D", "+"]  
Output: 30  
Explanation:  
Round1: 本轮获得5分，总分：5  
Round2: 本轮获得2分，总分：7  
Operation1: 上一轮得分无效，减2分，总分：5  
Round3: 本轮获得上轮有效得分5的2倍=10分，总分：15  
Round4: 本轮获得前两轮有效得分之和5+10=15，总分：30
```

## 思路
使用数组记录每轮得分，再根据字符串做栈操作

[传送门](https://leetcode.com/problems/baseball-game/description/)