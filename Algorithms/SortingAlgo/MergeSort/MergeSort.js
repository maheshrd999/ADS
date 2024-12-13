import { Merge } from "./Merge.js";

export const MergeSort = (A, low, high) => {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    MergeSort(A, low, mid);
    MergeSort(A, mid + 1, high);
    console.log("first half");
    // for(let i=low; i<=mid; i++){
    //     console.log(A[i]);
    // }
    // console.log('second half');
    // for(let i=mid+1; i<=high; i++){
    //     console.log(A[i]);
    // }
    Merge(A, low, mid, high);
  }
  return A;
};
