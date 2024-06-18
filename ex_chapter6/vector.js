class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector){
    return new Vec(this.x + vector.x, this.y + vector.y);
  }

  minus(vector){
    return new Vec(this.x - vector.x, this.y - vector.y);
  }

  get length(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let yey = new Vec(1,2);
let somehow = new Vec(3,4);

console.log(yey.plus(somehow));
console.log(yey.minus(somehow));
console.log(somehow.length);
console.log(yey.length);