## 链表

> 为什么是链表？

#### 队列的底层数据结构是数组，但是有时数组并不是组织数据的最佳数据结构，链表会优于数组。

1. 很多编程语言中，数组的长度是固定的，所以当数组已被数据填满时，再要加入新的元素会非常的困难。
2. 在数组中，添加和删除元素也很麻烦，因为需要将数组的其他元素向前或向后平移。虽然，Javascript的数组不存在这个问题，因为使用splice()方法不需要访问和操作其它的元素了。
3. Javascript数组的主要问题是，他们底层被实现成了对象，并不是真正意义上的线性结构的数据容器，与其它语言的数组（比如C++和Java）相比，效率很低。
4. 如果发现在实际使用时数组很慢，就可以考虑链表来替代它。
5. 如果需要随机访问，数组任然是更好的选择。

### 1. 设计一个基于对象的链表
```
function Node(element){
	this.element=element;
	this.next=null;
}
```
```
function(){
	this.head=new Node(head);
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.display=display;
}

function find(item){
	this.currNode=this.head;
	while(currNode.element != item){
		currNode=currNode.next;
	}
	return currNode;
}
function insert(newElement,item){
	var newNode=new Node(newElement);
	var current=this.find(item);
	newNode.next=current.next;
	current.next=newNode;
}
```