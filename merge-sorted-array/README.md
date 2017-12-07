# merge-sorted-array

## 问题
给出两个长度分别为`m`、`n`的已排序数组`nums1`、`nums2`，将`nums2`合并到`nums1`，成为一个排序数组

## 思路
维护三个`index`，分别是`nums1`、`nums2`和新数组，从后向前遍历，`nums1`和`nums2`大的写入新数组，并将索引减1。

[传送门](https://leetcode.com/problems/merge-sorted-array/description/)
