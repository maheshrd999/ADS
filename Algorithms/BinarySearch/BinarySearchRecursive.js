const BinarySearchRecursive = (array, low, high, searchKey) => {
  if (low == high) {
    if (array[low] == searchKey) {
      return low;
    }
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  console.log("low, mid, high", low, mid, high);
  return array[mid] == searchKey
    ? mid
    : searchKey < array[mid]
    ? BinarySearchRecursive(array, low, mid - 1, searchKey)
    : BinarySearchRecursive(array, mid + 1, high, searchKey);
};

export default BinarySearchRecursive;
