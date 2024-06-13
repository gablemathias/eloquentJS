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

console.log(countBy([1,2,3,4,5], n => n > 2));

// The find high order function goes over the elements in the array
// and returns the first element which the function returns true
