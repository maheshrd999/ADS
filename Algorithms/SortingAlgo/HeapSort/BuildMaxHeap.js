import MaxHeapify from "./MaxHeapify.js";

const MaxHeap = (A) => {
  if (A.length === 0) return;
  A.heapSize = A.length;
  // Traverse all the non-leaf nodes from highest index to root.
  for (let i = Math.floor(A.length / 2) - 1; i >= 0; i--) {
    MaxHeapify(A, i);
  }
};

export default MaxHeap;
