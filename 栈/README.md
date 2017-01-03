## 栈

#### 栈是一种特殊的列表，栈内的元素只能够通过列表的一端访问，这一端叫做栈顶。栈被称为一种后入先出的（LIFO，last-in-first-out）的数据结构。

### 1. 对栈的操作

- 对栈的两种主要操作是将一个元素压入栈和讲一个元素弹出栈。入栈使用push()方法，出栈使用pop()方法。
- 另一个常用的操作是预览栈顶的元素，pop可以预览但是同时也把栈顶的元素永久移除了。peek()方法则只返回栈顶元素，而不删除它。
- 除了push、pop、peek这三个主要方法，栈还有其他方法和属性。clean()方法，清除栈内所有元素，length记录栈内元素的个数。

### 2. 栈的实现

-我们当务之急决定栈的底层储存数据的数据结构，这里采用的是数组。
-我们首先定一个名为Stack类的构造函数开始：

```
function(){
	this.dataStore=[];
	this.top=0;
	this.push=push;
	this.pop=pop;
	this.peek=peek;
	this.length=length;
	this.clear=clear;
}

function push(element){
	this.dataStore[this.top++]=element	//先赋值后++
}

function pop(){
	return this.dataStore[--this.top]		//先--得到最后一个元素
}

function peek(){
	return this.dataStore[this.top-1]
}
function length(){
	return this.top;
}
function clear(){
	this.top=0;
}
```

### 3. 栈的使用

1. 回文 — 给定字符串判断是否是回文

```
function isPalindrome(word){
	var s=new Stack();
	for(var i=0;i<word.lengh;i++){
		s.push(word[i]);
	}
	var rword="";
	do(s.length()>0)while{
		rword+=s.pop();
	}
	if(word===rword){
		return ture;
	}else{
		return false;
	}
}
```

2. 递归演示
