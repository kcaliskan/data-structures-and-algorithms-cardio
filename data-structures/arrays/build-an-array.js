class MyArray {
  constructor() {
    this.myArray = {};
    this.length = 0;
  }

  push(item) {
    this.myArray[this.length] = item;
    this.length++;
    return this.myArray;
  }

  get(index) {
    return this.myArray[index];
  }

  pop() {
    const lastItem = this.myArray[this.length - 1];

    delete this.myArray[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.myArray[index];
    return this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.myArray[i] = this.myArray[i + 1];
    }
    delete this.myArray[this.length - 1];
    this.length--;
    return this.myArray;
  }
}

let newArray = new MyArray();
console.log(newArray.push("kaan"));
console.log(newArray.push("ipek"));
console.log(newArray.push("elvis"));
console.log(newArray.push("busi"));
console.log(newArray.delete(2));

// console.log(newArray.pop());
// console.log(newArray.pop());
