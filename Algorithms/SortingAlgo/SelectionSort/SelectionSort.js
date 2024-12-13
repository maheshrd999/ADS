/**
 * Time complexity - O(n2)
 * @param {*} A 
 * @returns 
 */
export const SelectionSort = (A) => {
  for (let i = 0; i < A.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < A[min]) {
        min = j;
      }
    }
    const temp = A[i];
    A[i] = A[min];
    A[min] = temp;
  }
  return A;
};

