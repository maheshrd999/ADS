export const BinarySearchRange = (nums, target) => {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        let mid =low +  Math.floor((high -low) / 2);
        if (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    const lowerIndex = nums[low] == target ? low : -1;
    
    low = 0, high = nums.length - 1;
    while (low+1 < high) {
        let mid =low +  Math.floor((high -low) / 2);
        if ( nums[mid] <= target) {
            low = mid;
        } else {
            high = mid -1;
        }
    }
    const higherIndex = nums[high] == target? high: nums[low] == target ? low : -1;

    return [lowerIndex, higherIndex]
}