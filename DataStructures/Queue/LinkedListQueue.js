import LinkedList from "../LinkedList/LinkedListWithTail.js";

export default class LinkedListQueue {
  constructor() {
    this.items = new LinkedList();
  }

  /// O(1)
  isEmpty() {
    return this.items.isEmpty();
  }
  // O(1)
  enqueue(element) {
    this.items.append(element);
  }

  /// O(1)
  dequeue() {
    return this.items.removeFromFront();
  }

  /// O(1)
  peek() {
    return this.items.head.value;
  }
  /// O(1)
  size() {
    return this.items.getSize();
  }
  /// O(n)
  print() {
    this.items.print();
  }
}
