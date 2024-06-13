// Transforming with map

const SCRIPTS = require("./scripts");

// Transforms the previous array to a new array with the same quantity of elements
// mapped/modified to a new form by the funcion.

function map(array, transform) {
  let mapped = [];
  for (const element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(l => l.direction == "rtl");

// console.log(map(rtlScripts, s => s.name));

console.log(rtlScripts.map(s => s.name));
