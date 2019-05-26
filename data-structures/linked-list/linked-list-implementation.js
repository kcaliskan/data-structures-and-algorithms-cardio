// Option 1
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let oldHead = this.head;
    let newNode = {
      value: value,
      next: null
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let allValues = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      allValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return allValues;
  }

  insert(index, value) {
    const newNode = {
      value: value,
      next: null
    };

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (i == index - 1) {
        let nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
      }
      currentNode = currentNode.next;
    }

    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.prepend(7);
myLinkedList.insert(3, 9);
myLinkedList.insert(1, 77);
myLinkedList.printList();

// Option 2
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let oldHead = this.head;
    let newNode = {
      value: value,
      next: null
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let allValues = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      allValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return allValues;
  }

  insert(index, value) {
    const newNode = {
      value: value,
      next: null
    };

    let leader = this.traverseToIndex(index);
    let nextNode = leader.next;
    leader.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    let prevNode = this.traverseToIndex(index);
    let nextNode = prevNode.next;
    prevNode.next = nextNode.next;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.prepend(7);
myLinkedList.insert(3, 9);
myLinkedList.insert(1, 77);
myLinkedList.remove(1);
myLinkedList.remove(2);
myLinkedList.remove(4);