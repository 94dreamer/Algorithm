/**
 * Created by zhouzhen on 2016/12/28.
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
 * Example 1:
 coins = [1, 2, 5], amount = 11
 return 3 (11 = 5 + 5 + 1)

 Example 2:
 coins = [2], amount = 3
 return -1.
 */
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

console.log(coinChange([2, 3, 5], 16));