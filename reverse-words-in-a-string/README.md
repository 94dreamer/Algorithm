## Reverse Words in a String

Given an input string, reverse the string word by word.

For example,

Given s = "`the sky is blue`",

return "`blue is sky the`".


这是一道中等难度的题，第一次我的答案是这样的：

```
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var arr=str.split(" "),
    arr1=[];
    for(var i=0;i<arr.length;i++){
        arr[i].length && arr1.push(arr[i])
    }
    return arr1.reverse().join(" ")
};
```

通过了提交，但是总感觉不是很好的办法。
后面有了这种办法，关键是用filter方法代替自定义的循环排除，fliter通过返回Boolean来决定是否保留改元素。

```
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.split(" ").reverse().filter(function(val){return val}).join(" ")
};
```


