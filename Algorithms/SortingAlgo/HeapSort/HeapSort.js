import MaxHeap from "./BuildMaxHeap.js";
import ExtractMaxFromMaxHeap from "./ExtractMaxFromMaxHeap.js";

const HeapSort = (A) => {
    MaxHeap(A);
    for(let i= 0; i<A.length; i++){
        ExtractMaxFromMaxHeap(A);
    }
}

export default HeapSort;