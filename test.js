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
console.log(twoSum([2, 3, 5],8));