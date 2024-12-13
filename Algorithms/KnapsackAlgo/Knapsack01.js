let memoryTable;
const Knapsack01 = (weightArr, profitArr, weight, index) => {
  if (weight === 0 || index < 0) {
    return 0;
  }
  if (memoryTable[weight][index] && memoryTable[weight][index] !== undefined)
    return memoryTable[weight][index];
  if (weightArr[index] > weight) {
    return Knapsack01(weightArr, profitArr, weight, index - 1);
  } else {
    return Math.max(
      Knapsack01(weightArr, profitArr, weight, index - 1),
      profitArr[index] +
        Knapsack01(weightArr, profitArr, weight - weightArr[index], index - 1)
    );
  }
};

export default Knapsack01;
