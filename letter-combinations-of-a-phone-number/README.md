## Letter Combinations of a Phone Number

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

![telphone](https://github.com/94dreamer/Algorithm/blob/master/letter-combinations-of-a-phone-number/img/img.png)

```
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```
这个题目的难度是中等，我的第一次正确commit是这样的：

```
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  var words = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var numbers = {};
  var index=0;
  for (var n = 2; n <= 9; n++) {
    numbers[n] = words.slice(index, (n===7||n===9)?index+=4:index+=3); // 含头不含尾
  }
  var returnArr = [];

  for (var i = 0; i < digits.length; i++) {
    i===0 && (returnArr=['']);
    var number = digits[i];
    var items = numbers[number];
    var arr = [];
    for (var t = 0; t < items.length; t++) {
      var arr1 = [];
      for (var r = 0; r < returnArr.length; r++) {
        arr1.push(returnArr[r] + items[t]);
      }
      arr = arr.concat(arr1); //concat不修改原属组，需要重新接收。。。坑了一会
    }
    returnArr = arr;
  }
  return returnArr;
};
```

