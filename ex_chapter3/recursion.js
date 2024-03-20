// Define function isEven
// Should accept a single parameter (A natural (positive, whole number))
// Natural -> Boolean

function isEven(n) {
  if(n < 0) { return "You should insert a positive number" };
  if(n <= 1) {
    return n == false;
  } else {
    return isEven(n-2);
  }
}
console.log(isEven(-1));
