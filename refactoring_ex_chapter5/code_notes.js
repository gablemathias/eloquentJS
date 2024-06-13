const SCRIPTS = require('./scripts');

require('./scripts')

// First example

let total = 0, count = 1;

while(count <= 10) {
  total += 1;
  count += 1;
}

console.log(total);

// Second Example

// console.log(sum(range(1, 10)));

// The second program involves a concept called abstraction
// Abstractions give us the ability to talk about problems at a higher level (More abstract)
// This is the same as getting rid of details (they are usually uninteresting for the problem being solved)

// Plain functions are a good way to build abstractions

/*
for(let i = 0; i < 10; i++) {
  console.log(i);
}

function repeatLog(n) {
  for(let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, console.log);
*/

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, i => labels.push(`Unit ${i + 1}`));

console.log(labels);

// High-order functions (map, reduce, filter, and so on)
// They are functions that operate on other functions
// FUNCTIONS ARE REGULAR VALUES
// (Search for this term in mathematical meanings for a deeper approach)

// Abstraction over ACTIONS and not just values (actually really important here)

// Function that creates another function

function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Functions that change another functions:

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ",returned", result);
    return result;
  };
}

noisy(Math.min)(3,2,1);

// New types of control flow

function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

//forEach acts as a for/of loop in a higher level function

["a","b"].forEach(l => console.log(l));


// Composability

function average(array) {
  return array.reduce((a,b) => a + b) / array.length;
}

console.log("The average year of living languages is:", Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));

console.log("The average year of dead scripts is:", Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));

