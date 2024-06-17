let ages1 = {
  Boris: 39,
  Liang: 22,
  Júlia: 52
}

let log = console.log;

// log(`Júlia is ${ages["Júlia"]}`);
// log(`Is Jack's age known? ${"Jack" in ages}`);
// log("Is toString's age known?", "toString" in ages);


let ages = new Map();

ages.set("Jack", 20);
ages.set("Lian", 25);
ages.set("John", 10);

log(ages);

log(ages.has("Jack"));
log(ages.get("John"));
