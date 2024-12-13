export const Merge = (array, low, mid, high) => {
  let i = low,
    j = mid + 1,
    k = 0;
  let array3 = [];
  while (i <= mid && j <= high) {
    if (array[i] < array[j]) array3[k++] = array[i++];
    else array3[k++] = array[j++];
  }

  for (; i <= mid; i++) {
    array3[k++] = array[i];
  }
  for (; j <= high; j++) {
    array3[k++] = array[j];
  }
  for(let i=0; i<array3.length; i++){
    array[low+i] = array3[i]
  }
  return array;
};
