///
class Queue {
  constructor() {
    this.items = [];
  }
  /// O(1)
  isEmpty() {
    return this.items.length === 0;
  }
  // O(1)
  enqueue(element) {
    this.items.push(element);
  }

  /// O(n)
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  /// O(1)
  peek() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  /// O(1)
  size() {
    return this.items.length;
  }
  /// O(n)
  print() {
    console.log(this.items.toString());
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.isEmpty());
queue.print();
queue.dequeue();
queue.print();
