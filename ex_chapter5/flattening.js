let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

let flattenedArray = arrays.reduce((acc, currentValue) => acc.concat(currentValue), []);

console.log(flattenedArray);
