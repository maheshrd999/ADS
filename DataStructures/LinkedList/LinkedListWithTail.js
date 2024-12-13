class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  // O(1)
  isEmpty() {
    return this.size === 0;
  }

  // O(1)
  getSize() {
    return this.size;
  }

  /**
   * Time complexity - O(n) linear time as it has to traverse the list
   */
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let str = "";
      let current = this.head;
      while (current) {
        str += `${current.value} `;
        current = current.next;
      }
      console.log(str);
    }
  }

  /**
   * Prepend adds element at the beginning of the lsit
   * @param {*} value
   * Time complexity - O(1)
   */
  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  /**
   * Append adds element at the end of the lsit
   * @param {*} value
   * Time complexity - O(1) as we have pointer at the end of list.
   */
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * Removes element from front of list
   * @param {*} value
   * Time complexity - O(1).
   */
  removeFromFront() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }
    const removedNode = this.head;
    this.head = this.head.next;
    if (this.size === 1) {
      this.tail = null;
    }
    this.size--;
    return removedNode.value;
  }

  
  /**
   * Removes element from end of list
   * @param {*} value
   * Time complexity - O(n) as we have to traverse the list.
   */
  removeFromEnd() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }
    const removedNode = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previous = this.head;
      while (previous.next !== this.tail) {
        previous = previous.next;
      }
      previous.next = null;
      this.tail = previous;
    }
    this.size--;
    return removedNode.value;
  }
}
