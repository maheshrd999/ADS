import BinarySearch from "./Algorithms/BinarySearch/BinarySearch.js";
import BinarySearchRecursive from "./Algorithms/BinarySearch/BinarySearchRecursive.js";
import { SelectionSort } from "./Algorithms/SortingAlgo/SelectionSort/SelectionSort.js";
import { BubbleSort } from "./Algorithms/SortingAlgo/BubbleSort/BubbleSort.js";
import { InsertionSort } from "./Algorithms/SortingAlgo/InsertionSort/InsertionSort.js";
import { MergeSort } from "./Algorithms/SortingAlgo/MergeSort/MergeSort.js";
import { Merge } from "./Algorithms/SortingAlgo/MergeSort/Merge.js";
import { searchRange } from "./dummy.js";
import {BinarySearchRange} from './Algorithms/BinarySearch/BinarySearchRange.js'
import Stack from "./DataStructures/Stack/Stack.js";
import Queue from "./DataStructures/Queue/QueueOpt.js";
import CircularQueue from "./DataStructures/Queue/CircularQueue.js";
// import LinkedList from "./DataStructures/LinkedList/LinkedList.js";
import LinkedList from "./DataStructures/LinkedList/LinkedListWithTail.js";
import LinkedListStack from "./DataStructures/Stack/LinkedListStack.js";
import LinkedListQueue from "./DataStructures/Queue/LinkedListQueue.js";
import DoublyLinkedList from "./DataStructures/LinkedList/DoublyLinkedList.js";
import HashTable from "./DataStructures/HashTable/HashTable.js";
import BinarySearchTree from "./DataStructures/BinarySearchTree/BST.js";
import Graph from "./DataStructures/Graph/Graph.js";
import KadanesMaxSubArrayAlgo from "./Algorithms/KadanesMaxSubArrayAlog/KadanesMaxSubArrayAlgo.js";
import MaxHeap from "./Algorithms/SortingAlgo/HeapSort/BuildMaxHeap.js";
import ExtractMaxFromMaxHeap from "./Algorithms/SortingAlgo/HeapSort/ExtractMaxFromMaxHeap.js";
import HeapSort from "./Algorithms/SortingAlgo/HeapSort/HeapSort.js";
import Knapsack01 from "./Algorithms/KnapsackAlgo/Knapsack01.js";
import MaxSumOfK from "./Algorithms/SlidingWindow/MaxSumOfK.js";
import ValidParanthesis from "./DataStructures/Stack/problems/ValidParanthesis.js";


// ValidParanthesis
const input = '{[()]}';
console.log(ValidParanthesis(input));

// // SlidingWindow demo
// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(MaxSumOfK(arr, 3));

// // 0-1 Knapsack demo
// const weightArr = [3,2,4];
// const profitArr = [6,8,7];
// console.log(Knapsack01(weightArr, profitArr, 8, weightArr.length-1));

// // Max-heapify demo
// const array = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1].reverse();
// // MaxHeap(array);
// // console.log(array);
// HeapSort(array);
// console.log(array);

// // Kadane's algo demo
// const arr = [5, -6, 0,3,-1,-7,9,2,-1]//[-2, 3, -5, 2, 2, -1, 4, 3] //[-2, -1, 3, 2,-1]// [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(KadanesMaxSubArrayAlgo(arr));

// // Graphdemo
// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');

// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');

// graph.removeEdge('B', 'C');
// graph.removeVertex('B');

// graph.display();
// console.log(graph.hasEdge('A', 'B'));


// // BST demo
// const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// // bst.preOrder(bst.root);
// // bst.inOrder(bst.root);
// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));
// bst.delete(10);
// bst.levelOrder();

// // BST demo
// const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// console.log(bst.search(bst.root, 15))
// console.log(bst.search(bst.root, 1))

// // HashTable demo
// let hashTable = new HashTable(10);
// hashTable.set('name', 'myname');
// hashTable.set('mane', 'myname');
// hashTable.set('age', 30);
// hashTable.display();
// hashTable.remove('name')
// hashTable.display();

// //Doubly Linked list demo
// let linkedList = new DoublyLinkedList();
// linkedList.append(10)
// linkedList.append(20)
// linkedList.prepend(30)
// console.log(linkedList.removeFromEnd());
// linkedList.print();
// console.log(linkedList.getSize());
// linkedList.print();
// linkedList.print();

// let linkedListQueue = new LinkedListQueue();
// linkedListQueue.enqueue(10);
// linkedListQueue.enqueue(20);
// linkedListQueue.enqueue(30);
// linkedListQueue.print();
// console.log(linkedListQueue.dequeue());
// console.log(linkedListQueue.dequeue());
// console.log(linkedListQueue.size());

// let linkedListStack = new LinkedListStack();
// linkedListStack.push(10);
// linkedListStack.push(20);
// linkedListStack.push(30);
// linkedListStack.print();
// console.log(linkedListStack.pop());
// console.log(linkedListStack.pop());
// console.log(linkedListStack.getSize());

// //Linked list demo
// let linkedList = new LinkedList();
// linkedList.append(10)
// linkedList.append(20)
// linkedList.prepend(30)
// console.log(linkedList.removeFromEnd());
// linkedList.print();
// console.log(linkedList.getSize());
// linkedList.print();
// linkedList.print();


// //Linked list demo
// let linkedList = new LinkedList();
// linkedList.append(10)
// linkedList.append(20)
// linkedList.insert(50, 1);
// // console.log(linkedList.removeAt(2));
// // linkedList.print();
// // console.log(linkedList.getSize());
// // linkedList.removeValue(10);
// linkedList.print();
// console.log(linkedList.search(50));
// console.log(linkedList.search(10));
// linkedList.reverse();
// linkedList.print();

// // Circular Queue demo
// let queue = new CircularQueue(5);
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.size());
// console.log(queue.dequeue());
// console.log(queue.peek());
// // console.log(queue);
// queue.print();

// // Queue demo
// let queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue);
// console.log(queue.size());
// console.log(queue.dequeue());
// console.log(queue.peek());

// // Call BinarySearch function
// //Case 1
// const array = [10, 15, 25, 37, 45, 47, 51, 56, 57, 75];

// let array = [-1,0,3,5,9,12];
// console.log(
//   "Key Found at index using while loop:",
//   BinarySearch(array, 0, array.length - 1, array[4])
// );

// Call BinarySearch function
// console.log(
//   "Key Found at index using recursive function:",
//   BinarySearchRecursive(array, 0, array.length - 1, array[4])
// );

// let A = [5,3,4,1,2,7, 25, 45, 20, 19, 8];
// let arr1 = [1,2,4,8,3,5,7,9];
// Merge(arr1, 0, 3, 7);
// console.log( arr1);
// A = MergeSort(A, 0, A.length -1);
// console.log(A);

// const arr = [5,7,7,8,8,10];
// console.log(BinarySearchRange(arr, 7));

// Stack demo
// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log(stack);
// console.log(stack.getSize());
// console.log(stack.pop());
// console.log(stack.peek());

