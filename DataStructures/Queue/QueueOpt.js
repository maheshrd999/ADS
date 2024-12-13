/**
 * This is the Optimized implementation of queue.
 * The previous implementation from Queue.js, the delete operation is of order O(n)
 * And we have opportunity to optimize it.
 */
export default class Queue {
  constructor() {
    this.items = [];
    this.start = 0;
    this.end = 0;
  }
  /** O(1) */
  enqueue(item) {
    this.items[this.start++] = item;
  }

  /** O(1) */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    } 
    const item =  this.items[this.end];
    delete this.items[this.end++];
    return item;
  }

  /** O(1) */
  isEmpty() {
    return this.start === this.end;
  }

  /** O(1) */
  peek() {
    if(this.isEmpty()) return null
    return this.items[this.end];
  }

  /** O(1) */
  size() {
    return this.start - this.end
  }
  
  /** O(n) */
  print() {
    console.log(this.items);
  }
}
