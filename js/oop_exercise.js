//Evaluate these:
//#1
console.log([2] === [2]);
console.log({} === {});

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5 }; //5
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal {
  constructor(name, type, color) {
    //order not matters
    this.color = color;
    this.type = type;
    this.name = name;
  }
}
class Mamal extends Animal {
  constructor(name, type, color) {
    //order matters
    super(name, type, color);
  }
  sound() {
    console.log(`moo,I'm ${this.name} and I'm a ${this.color} ${this.type}.`);
  }
}
const goat1 = new Mamal("sherry", "goat", "red");
goat1.sound();
