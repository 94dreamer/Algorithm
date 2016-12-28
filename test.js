/**
 * Created by zhouzhen on 2016/12/28.
 */
var letterCombinations = function (digits) {
  var words = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var numbers = {};
  for (var n = 2; n <= 9; n++) {
    numbers[n] = words.slice(3 * (n - 2), 3 * (n - 1)); // 含头不含尾
  }
  var returnArr = [''];

  for (var i = 0; i < digits.length; i++) {
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
console.log(letterCombinations("423"))