import MaxHeapify from "./MaxHeapify.js";

const ExtractMaxFromMaxHeap = (A) => {
  if (A.heapSize < 1) return;
  const max = A[0];
  A[0] = A[A.heapSize - 1];
  A[A.heapSize - 1] = max;
  A.heapSize--;
  MaxHeapify(A, 0);
  return max;
};

export default ExtractMaxFromMaxHeap;
