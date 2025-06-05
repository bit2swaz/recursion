// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements
    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// Recursive merge sort function
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle point and divide into subarrays
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort the subarrays
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

// Test cases
const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];

console.log("Test case 1:");
console.log("Original array:", test1);
console.log("Sorted array:", mergeSort(test1));

console.log("\nTest case 2:");
console.log("Original array:", test2);
console.log("Sorted array:", mergeSort(test2)); 