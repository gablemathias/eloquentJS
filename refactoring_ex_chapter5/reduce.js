require('./scripts');
// Reduce: Compute a single value from the array
// It builds a value by repeatedly taking a single element from the array
// and combining it with the current value

function reduce(array, combine, start) {
  let current = start;
  for (const element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1,2,3,4], (a, b) => a + b, 0));

console.log([1,2,3,4,5].reduce((a,b) => a + b));

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a,b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
