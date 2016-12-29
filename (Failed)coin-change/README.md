## Coin Change

[本题的leetcode地址](https://leetcode.com/problems/coin-change/)

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

#### Example 1:
coins = `[1, 2, 5]`, amount = `11`
return `3` `//(11 = 5 + 5 + 1)`

##### Example 2:
coins = [`2`], amount = `3`
return -1.

#### Note:
You may assume that you have an infinite number of each kind of coin.

#### 题意：

零钱兑换，让你用最少的零钱数换取目标的数量。如有零钱1,2,5，换成11最少的为5+5+1 ，3个硬币

我的第一次答案是这样的,结果在某些错了，因为优先考虑了最小硬笔数,比如16显然可以由[5,3,2]构成，但是我优先用了3个5，导致了剩下的1无法分配。

```
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
var coinChange = function (coins, amount) {
  coins.sort(function (a, b) {
    return b - a;//从大到小排序硬币
  });
  var count = 0;

  for (var i = 0; i < coins.length; i++) {
    var num = Math.floor(amount / coins[i]);
    count+=num;
    amount=amount%coins[i];
  }
  amount !== 0 && (count = -1);
  return count
};
```


