// Use reduce and concat to flatter an array of arrays into a single array

let arrayOfArrays = [[1], [123], ["something"]];

function flatten(array) {
  let flattened = [];
  array.reduce((_, b) => {
    flattened = flattened.concat(b);
  }, flattened)
  return flattened;
}

function flatten(array) {
  return array.reduce((flat, rest) => flat.concat(rest), []);
}

console.log(flatten(arrayOfArrays));

// own loop
// It should take a value, a test function, an update function, a body function
function loop(value, test, update, action) {
  while (test(value)) {
    action(value);
    value = update(value);
  }
}

function loop(start, test, update, action) {
  for (let value = start; test(value); value = update(value)) {
    action(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

// Everything

function every(array, test) {
  for (const value of array) {
    if(!test(value)){
      return false;
    }
  }
  return true;
}

let nmbrs = [2,4,6,1,8];

console.log(every(nmbrs, a => a % 2 == 0));

// function every(array, test) {

// }

// Dominant Writing Direction

require('./scripts');

function characterScript(code) {
  for (const script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(1329));

function countBy(items, groupName) {
  let counts = [];
  for (const item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if(total == 0) return "No scripts found";

  return scripts.find((a) => a.count == Math.max(...scripts.map(a => a.count))).name;
}
console.log(textScripts('a英国的狗说"woof",אָלֶף־בֵּית עִבְרִי,俄罗斯的狗说"тяв"'));
