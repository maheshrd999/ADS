const KadanesMaxSubArray = (A) =>{
    let currentMax, globalMax;
    currentMax = globalMax = A[0];
    for(let i=1; i<A.length; i++) {
        currentMax = Math.max(A[i], currentMax + A[i]);
        // if(currentMax > globalMax ){
        //     globalMax = currentMax;
        // }
        globalMax = Math.max(currentMax, globalMax);
    }
    return globalMax;
}

export default KadanesMaxSubArray;