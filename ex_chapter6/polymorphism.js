// Any kind of object that happens to support a given interface can be plugged
// into the code and will be able to work with it
// It is writing the same block of code but allowing different kinds of inputs
// thus, a different kind of output will happen

// We are using one block of code, and changing its version depending on
// which kind of input is given.

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

console.log(killerRabbit.toString());

Array.prototype.forEach.call({
  length: 2,
  0: "A",
  1: "B",
  2: "C"
}, elt => console.log(elt));

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit(){
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
}

let newTemp = new Temperature(24);

console.log(newTemp.fahrenheit);
new
