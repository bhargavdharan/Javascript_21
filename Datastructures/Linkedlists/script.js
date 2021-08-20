function defaultEquals(a,b){
    return a == b;
}

class Node {
    constructor(element, next){
        this.element = element;
        this.next = next;
    }
}
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
    this.count = 0;
    this.head = undefined;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      // catches null && undefined
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

const list = new  LinkedList();

console.log('push element 15');
list.push(15);

console.log('list.indexOf(15) => ', list.indexOf(15));
console.log('list.toString(15) => ', list.toString(15));

console.log('push two elements');

list.push(20);

console.log('list.indexOf(20) => ', list.indexOf(20));
console.log('list.toString(20) => ', list.toString(20));

list.push(25);

console.log('list.indexOf(25) => ', list.indexOf(25));
console.log('list.toString(25) => ', list.toString(25));

list.push(30);
console.log('list.indexOf(30) => ', list.indexOf(30));
console.log('list.toString(30) => ', list.toString(30));

list.push(35);
console.log('list.indexOf(35) => ', list.indexOf(35));
console.log('list.toString(35) => ', list.toString(35));

list.push(40);
console.log('list.indexOf(40) => ', list.indexOf(40));
console.log('list.toString(40) => ', list.toString(40));

console.log('Removing elements from indices');

console.log('list.removeAt(1) => ', list.removeAt(1));
console.log('list.toString() => ',list.toString());
console.log('list.removeAt(2) => ', list.removeAt(2));
console.log('list.toString() => ',list.toString());
console.log('list.removeAt(3) => ', list.removeAt(3));
console.log('list.toString() => ',list.toString());

console.log('-------------------------------------------')

console.log('Adding elements...!');

console.log('inserting element 20 st pos 1 ::: ', list.insert(20,1));
console.log('list.toString() => ',list.toString());
console.log('inserting element 30 st pos 2 ::: ', list.insert(30,2));
console.log('list.toString() => ',list.toString());
console.log('inserting element 40 st pos 3 ::: ', list.insert(40,3));
console.log('list.toString() => ',list.toString());

console.log('Removing added insert elements::')

console.log('remove element 20 => ', list.remove(20));
console.log('list.toString() => ',list.toString());
