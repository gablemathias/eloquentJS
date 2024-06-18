class Group {
  constructor(){
    this.group = [];
  }

  add(value){
    if(!this.has(value)){
      this.group.push(value);
    }
  }

  delete(value){
    if(this.has(value)){
      let indexOfValueToRemove = this.group.indexOf(value)
      this.group.splice(indexOfValueToRemove, 1);
    }
  }

  has(value){
    return this.group.includes(value);
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