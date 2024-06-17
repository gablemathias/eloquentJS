function speak(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = {
  type: "white",
  speak
}

let blackRabbit = {
  type: "black",
  speak
}

whiteRabbit.speak("something");
blackRabbit.speak("anything");

speak.call(blackRabbit, "hurry");

let finder = {
  find(array) {
    return array.some(v => v == this.value);
  },
  value: 5
};
console.log(finder.find([4,5]));

// Prototypes
// Objects can be linked to other objects.
// Plain old objects created with {} notation are linked to an object called Object.prototype

let empty = {};
console.log(empty.toString);
console.log(empty.toString());
