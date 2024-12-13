export const BubbleSort = (A) => {
  //   let count = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = 0; j < A.length - i - 1; j++) {
      // count++;
      if (A[j] > A[j + 1]) {
        const temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
      }
    }
  }
  //   console.log(count);
  return A;

  // Optimization
  for (let i = 0; i < A.length - 1; i++) {
    let noSwap = 0;
    for (let j = 0; j < A.length - i - 1; j++) {
      // count++;
      if (A[j] > A[j + 1]) {
        const temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
        noSwap = 1;
      }
    }
    if (noSwap === 0) break;
  }
  //   console.log(count);
  return A;
};
