const MaxSumOfK = (A, k) => {
    if(A?.length === 0 || k === 0) return 0;

    let maxSum = sum(A.slice(0, k));
    for (let i = k; i< A.length; i++) {
        maxSum = Math.max(maxSum, maxSum + A[i] - A[i-k]);
    }

    return maxSum;
}

const sum = (A) => {
    return A.reduce((acc, curr) => acc + curr, 0);
};

export default MaxSumOfK;