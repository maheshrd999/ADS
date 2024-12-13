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
   * Prepend adds element at the beginning of the lsit
   * @param {*} value
   * Time complexity - O(1)
   */
  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
    // const node = new Node(value);
    // if(this.isEmpty()) {
    //     this.head = node;
    // } else {
    //     node.next = this.head;
    //     this.head = node;
    // }
    // this.size++;
  }

  /**
   * Append adds element at the end of the lsit
   * @param {*} value
   * Time complexity - O(n) linear time as it has to traverse the list
   */
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
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
   * Inserts the value at given index
   * @param {*} value
   * @param {*} index
   * @returns
   * Time complexity - O(n) linear time as it has to traverse the list
   */
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      newNode.next = previous.next;
      previous.next = newNode;

      this.size++;
    }
  }

  /**
   * Removes the value at given index
   * @param {*} index
   * @returns
   * Time complexity - O(n) linear time as it has to traverse the list
   */
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removedNode = previous.next;
      previous.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  /**
   * Removes the value by searching it.
   * @param {*} value 
   * @returns 
   * Time complexity - O(n) linear time as it has to traverse the list to remove
   */
  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let previous = this.head;
      while (previous.next && previous.value !== value) {
        previous = previous.next;
      }
      if (previous.next) {
        const removedNode = previous.next;
        previous.next = removedNode.next;
        this.size--;
        return value;
      }
      console.log("Value not found");
      return null;
    }
  }

  /**
   * Search for element in LL
   * @param {*} value 
   * @returns 
   * Time complexity - O(n) linear time as it has to traverse the list
   */
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  /**
   * Reverse the linked list
   * Time complexity - O(n) linear time as it has to traverse the list
   */
  reverse() {
    let previous = null;
    let current = this.head;
    while(current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    this.head = previous;
  }
}
