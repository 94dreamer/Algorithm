/**
 * Created by zhouzhen on 2017/4/27.
 */

function CArray(numElements) {
  this.dataStore = new Array(numElements);
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
}

insert = () => {
};

swap = () => {
};


function setData() {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements) + 1);
  }
}

function clear() {
  this.dataStore = new Array(this.dataStore.length);
}

function toString() {
  var str = '';
  for (var i = 0; i < this.dataStore.length; i++) {
    str += this.dataStore[i] + '     '.slice(this.dataStore[i].toString().length);
    if (i % 10 == 9) {
      str += '\n';
    }
  }
  return str;
}

module.exports = CArray;



