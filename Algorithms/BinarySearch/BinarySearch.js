// Using ES6 arrow functions
const BinarySearch = (array, low, high, searchKey) => {
  // Using while loop
  console.log("low, high and searchKey", low, high, searchKey);
  while (low <= high) {
    if(low == high && array[low] == searchKey) return low;
    const mid = Math.floor((low + high) / 2);
    if (array[mid] == searchKey) {
      return mid;
    }
    if (searchKey < array[mid]) {
      h = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

export default BinarySearch;

