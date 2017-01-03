## 队列

#### 队列是一种列表，不同是队列只能在队尾插入元素，在队首删除元素。队列是一种先进先出（First-In-First-Out，FIFO）的数据结构。

### 1. 对队列的操作

- 队列的两种主要操作是：向队列中插入新元素和删除队列中的元素。插入操作也叫做入队，删除操作也叫做出队。入队操作在队尾插入新元素，出队操作删除队头的元素。
- 和栈一样，还有一项重要的操作是读取队头的元素，peek()
- 使用length和clear分别来获取队列的长度和清空队列的元素。

### 2. 实现队列

使用数组来实现队列看起来顺理成章。

```
function Queue(){
	this.dataStore=[];
	this.enqueue=enqueue;
	this.dequeue=dequeue;
	this.front=front;
	this.back=back;
	this.toString=toString;
	this.empty=empty;
}
function enqueue(element){
	this.dataStore.push(element);
}
function dequeue(){
	return this.dataStore.shift();
}
function front(){
	return this.dataStore[0];
}
function back(){
	return this.dataStore[this.dataStore.length-1].
}
function toString(){
	var retstr="";
	for(var i=0;i<this.dataStore.length;i++){
		retstr+=this.dataStore[i]+"\n";
	}
	return retstr
}
function empty(){
	if(this.dataStore.length===0){
		return true;
	}else{
		return false;
	}
}
```

### 3. 使用队列
 