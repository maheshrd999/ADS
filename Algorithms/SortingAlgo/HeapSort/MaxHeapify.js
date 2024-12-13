const MaxHeapify = (array, index) => {
  let left = 2 * index + 1,
    right = 2 * index + 2;
  let largest;
  if (left < array.heapSize && array[left] > array[index]) {
    largest = left;
  } else {
    largest = index;
  }
  if (right < array.heapSize && array[right] > array[largest]) {
    largest = right;
  }
  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    MaxHeapify(array, largest);
  }
};

export default MaxHeapify;
