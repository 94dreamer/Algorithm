## 集合

#### 集合（set）是一种包含不同元素的数据结构。集合中的元素被称为成员。成员是无序的，但是不允许相同成员存在。

### 1. 集合的定义

- 不包含任何成员的集合称为空集，全集则是包含一切可能成员的集合。
- 如果两个集合中的成员完全相同，则称为两个集合相等。
- 如果一个集合中所有的成员都属于另外一个集合，则前一个集合称为后一个集合的子集

### 2. 对集合的操作

- 并集

将两个集合中的成员进行合并，得到一个新集合。

- 交集

两个集合中的共同成员组成的一个新集合

- 补集

属于一个集合而不属于另一个集合的成员组成的集合

### 3. Set类的实现

> 关键是add方法的排重

```
function Set(){
	this.dataStore=[];
	this.add=add;
	this.remove=remove;
	this.size=size;
	this.union=union;
	this.intersect=intersect;
	this.subset=subset;
	this.difference=difference;
	this.show=show;
}

function(data){
	if(this.dataStore.indexOf(data)===-1){
		this.dataStore.push(data);
		return true;
	}else{
		return false;
	}
}
```
