function reverseArray(arr) {
  let reversedArr = []
  for(value in arr) {
    reversedArr.unshift(arr[value]);
  }
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  let halfSize = Math.floor(arr.length / 2);

  for(let idx = 0; idx < halfSize; idx++) {
    [arr[idx], arr[arr.length - 1 - idx]] = [arr[arr.length - 1 - idx], arr[idx]];
  }
}

// reverseArrayInPlace(myArray);
// console.log(myArray);
// let myArray = ["A", "B", "C", "D"];
// console.log(reverseArray(myArray));
