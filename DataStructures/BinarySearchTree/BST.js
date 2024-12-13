import Queue from "../Queue/QueueOpt.js";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty = () => this.root === null;

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) this.root = newNode;
    else this.insertNewNode(this.root, newNode);
  }
  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) root.left = newNode;
      else this.insertNewNode(root.left, newNode);
    } else {
      if (root.right === null) root.right = newNode;
      else this.insertNewNode(root.right, newNode);
    }
  }

  search(root, value) {
    if (!root) return false;
    if (value === root.value) return true;
    else if (value < root.value) return this.search(root.left, value);
    else return this.search(root.right, value);
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size() > 0) {
      let current = queue.dequeue();
      console.log(current.value);
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }
  }

  min(root) {
    if (!root.left) return root.value;
    return this.min(root.left);
  }

  max(root) {
    if (!root.right) return root.value;
    return this.max(root.right);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;

    if (value < root.value) root.left = this.deleteNode(root.left, value);
    else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    }
    // If both if statements does not satisfy then we found the matching value.
    else {
      /**
       * Scenario 1 - No children
       */
      if (!root.left && !root.right) return null;
      /**
       * Scenario 2 - One child
       */
      if (!root.left) return root.right;
      else if (!root.right) return root.left;

      /**
       * Scenario 3 - two child nodes
       */
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}
