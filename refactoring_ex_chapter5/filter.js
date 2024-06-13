const SCRIPTS = require('./scripts');

require('./scripts');

// Filtering Arrays

function filter(array, test) {
  let passed = [];
  for (const element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter([1,2,3,4,5,6,7,8,9,10], x => x % 2 == 0));


// console.log(filter(SCRIPTS, script => script.living));

console.log(SCRIPTS.filter(x => x.direction == "ttb"));
