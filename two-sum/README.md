## Two Sum

[本题的leetcode地址](https://leetcode.com/problems/two-sum/)

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

#### Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

#### 题意：

给你一个整数组成的数组，返回两个数的索引，使他们相加为一个特定的目标，你可以假设每个输入都有解。

```
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
var twoSum = function(nums, target) {
  var arr=[];
  nums.forEach(function(e,i){
    nums.slice(0,i).concat(nums.slice(i+1)).forEach(function(e2){
      if(e+e2===target){
        arr=[i,nums.indexOf(e2)];
        return false;
      }
    });
    if(arr.length){
      return false;
    }
  });
  return arr;
};
```


