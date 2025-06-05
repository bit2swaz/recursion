// Iterative Fibonacci function
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

// Recursive Fibonacci function
function fibsRec(n) {
    console.log("This was printed recursively");
    
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const arr = fibsRec(n - 1);
    return [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
}

// Test cases
console.log("Testing iterative fibonacci (n=5):");
console.log(fibs(5));

console.log("\nTesting iterative fibonacci (n=8):");
console.log(fibs(8));

console.log("\nTesting iterative fibonacci (n=10):");
console.log(fibs(10));

console.log("\nTesting recursive fibonacci (n=5):");
console.log(fibsRec(5));

console.log("\nTesting recursive fibonacci (n=8):");
console.log(fibsRec(8));

console.log("\nTesting recursive fibonacci (n=10):");
console.log(fibsRec(10)); 