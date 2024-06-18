let sym = Symbol("name");
console.log(sym);

class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line){
      console.log(`The ${this.type} rabbit says '${line}'.`);
    }
  
    // toString() {
    //   return `a ${this.type} rabbit`;
    // }
  }
  
  
Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}
  
let killerRabbit = new Rabbit("killer");

Rabbit.prototype[sym] = 55;
console.log(killerRabbit[sym]);

const length = Symbol("length");
Array.prototype[length] = 0;

console.log([1,2].length);
console.log([1,2][length]);

let myTrip = {
    length: 2,
    0: "Lankwitz",
    1: "Babelsberg",
    [length]: 21500
}

let log = console.log;

console.log(myTrip[length], myTrip.length);

let okIterator = "OK"[Symbol.iterator]();
log(okIterator.next());
log(okIterator.next());
log(okIterator.next());

