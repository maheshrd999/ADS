export default class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = size;
  }

  // O(1)
  isEmpty() {
      return this.currentLength === 0;
    }
    
    // O(1)
  isFull() {
    return this.currentLength === this.capacity;
  }

  // O(1)
  enqueue(element) {
    if (this.isFull()) {
      return;
    } else if (this.isEmpty()) {
      console.log("+++++");
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.capacity;
    }
    this.items[this.rear] = element;
    this.currentLength++;
  }

  // O(1)
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  // O(1)
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[this.front];
  }

  // O(1)
  size() {
    return this.currentLength;
  }

  // O(n)
  print() {
    let i = this.front;
    let str = '';
    for(i;i<this.rear; i++) {
        str += this.items[i] + ' ';
    }
    str += this.items[this.rear];
    console.log(str);
  }
}
