class Group {
  constructor(group = []){
    this.group = group;
  }

  add(value){
    if(!this.has(value)) this.group.push(value);
  }

  delete(value){
    // if(this.has(value)){
    //   this.group.splice(this.group.indexOf(value), 1)
    // }
    this.group = this.group.filter(elm => elm != value);
  }

  has(value){
    return this.group.includes(value);
  }

  static from(array){
    let unique = []
    array.forEach(element => {
      if(!unique.includes(element)){
        unique.push(element);
      }
    });

    return new this(unique);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.group);
  }
}

class GroupIterator {
  #group;
  #position;

  constructor(group) {
    this.#group = group;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#group.length) {
      return {done: true};
    } else {
      let result = {value: this.#group[this.#position],
                    done: false};
      this.#position++;
      return result;
    }
  }
}

let group = Group.from([10, 20, 10]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(150);
console.log(group);
group.delete(20);
console.log(group.has(10));
// → false
console.log(group);

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
