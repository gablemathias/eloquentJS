class Group {
  #members = []

  add(value){
    if(!this.has(value)){
      this.#members.push(value);
    }
  }

  delete(value){
    if(this.has(value)){
      let indexOfValueToRemove = this.#members.indexOf(value)
      this.#members.splice(indexOfValueToRemove, 1);
    }
  }

  has(value){
    return this.#members.includes(value);
  }

  static from(values){
    let set = new Group();
    for (const value of values) {
      set.add(value);
    }
    return set;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false