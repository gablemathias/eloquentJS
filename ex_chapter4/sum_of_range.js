// Range, takes 2 arguments, start and end, returns array
// containing all the numbers from start up to and including end
// Number -> Array of Numbers

function range(start, end, step = 1) {
  let arr = [];
  if (start <= end) {
    for(let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for(let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

// Array -> Number
// Returns the sum of the given arr
function sum(arr) {
  let total = 0;
  for(number in arr) {
    total += arr[number]
  }
  return total;
}

let array_ex = [1,2,3,4,5,6,7,8,9,10];


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, -10, -2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
