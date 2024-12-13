import LinkedList from "../LinkedList/LinkedListWithTail.js";

export default class LinkedListStack {
  constructor() {
    this.items = new LinkedList();
  }

  push(value) {
    this.items.prepend(value);
  }

  pop() {
    return this.items.removeFromFront();
  }

  peek() {
    return this.head.value;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  getSize() {
    return this.items.getSize();
  }

  print() {
    this.items.print();
  }
}
