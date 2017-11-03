# first unique character in a string
## 问题
找出某个字符串第一个不重复的字符，返回它的索引，如果没有，则返回-1  
**example:**
```
s = "leetcode"
return 0

s = loveleetcode
return 2
```
**note:** *假设所有字符都为小写字符*

## 思路：
* 最初考虑遍历字符串，对每个字符做正则匹配，只匹配到一个则返回。提交的时候超时了  
* 然后转换思路，使用js的`indexOf`和`lastIndexOf`方法，如果某个字符首次和最后出现的索引相同则表明为非重复  
* 使用26长度的数组保存每个字符出现次数，索引为某字符与`a`的差值，最后遍历找出第一个出现一次的字符

[传送门](https://leetcode.com/problems/first-unique-character-in-a-string/description/)