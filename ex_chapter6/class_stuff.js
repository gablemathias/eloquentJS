
// This is what a constructor function does.

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

// JS class notation makes it easier to define this type of function, along
// with its prototype

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line){
    console.log(`The ${this.type} rabbit says '${line}'.`);
  }
}

// The class keyword starts a class declaration, allowing us to define
// a proper constructor and a set of methods together.

let killerRabbit = new Rabbit("killer");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);

class Particle {
  speed = 0;
  constructor(position) {
    this.position = position;
  }
}

let aPart = new Particle(10);
let aPart2 = new Particle(10);
aPart.speed = 24;

console.log(aPart.speed);
console.log(aPart2.speed);

let obj = new class { getWord() { return "hello"; } };
console.log(obj.getWord());

class SecretiveObject {
  #getSecret() {
    return "I ate all the plums";
  }

  interrogate() {
    let shallISayIt = this.#getSecret();
    return "never";
  }
}

let secret = new SecretiveObject();

console.log(secret.interrogate());


class RandomSource {
  #max;

  constructor(max){
    this.#max = max;
  }

  getNumber(){
    return Math.floor(Math.random() * this.#max);
  }
}

let aRandom = new RandomSource(100);

console.log(aRandom.getNumber());

Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth);


