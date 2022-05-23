/************************************************
 * slice & splice difference
 ************************************************/

// slice->don't change original array, return [start,end)
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(fruits.slice(2, 4));
// splice->change original array, usage(startIndex,numIndex,replacedValue);numIndex==0?->insert
fruits.splice(2, 0, "pear");
console.log(fruits);
fruits.splice(2, 2, "blueberry");
console.log(fruits);

/************************************************
 * closure->create private/static variable within a function
 ************************************************/
function makeCounter() {
  var count = 0;
  return function () {
    return count++;
  };
}
var count = makeCounter();
console.log(count());
console.log(count());
console.log(count());
/************************************************
 * string is immutable
 ************************************************/

let str = "abc";
let string_a = str.toUpperCase();
// let a[0]=2;
console.log(string_a); //a,ABC
console.log(str); //str,abc

/************************************************
 * Object usage
 ************************************************/
const Person = { firstName: "Luke", secondName: "Alex", age: 19 };
console.log(Person.firstName);

function Pson(fst, snd) {
  this.firstName = fst;
  this.secondName = snd;
}
// why this? the firstName&secondName come from above
Pson.prototype.getFullName = function (aaa) {
  return this.firstName + " GGG " + this.secondName + aaa;
};
var p1 = new Pson("lll", "kkk");
console.log(p1.getFullName("abcddd"));

console.log("==== json/string convert ====");
let json = { a: "A", b: "B" };
let jsonString = JSON.stringify(json);
let json_again = JSON.parse(jsonString);
console.log(typeof json, typeof jsonString, typeof json_again); //object,string,object

console.log("==== Destructuring ====");
// !!!NEVER start a statement with ( or [
let [x, y] = [1, 2, 3];
console.log(x, y); // semicolon can't be ignored here
[x, y] = [y, x]; // swap value
console.log(x, y);
let nums = [1, 2, 3, 4, 5];
let [a, b, ...c] = nums;
console.log(a, b, c);

// all objects, can changed the property of the const variable, can't reassign value
const sally = { name: "Sally Lee" };
sally.age = 29; //OK
// sally={name:'Sally Alex'};//error
console.log(sally);

// deconstruct object,way1,2,3 exactly the same
var herry = { name: "herry", age: 18 };
// ({ name, age } = herry); //way1,()is must,or it's the start of a block statement
let { name, age } = herry; //way2
// let {name:name,age:age}=herry;//way3
console.log(name, age);

// compute through brackets
let field = "Age";
let harrysAge = sally[field.toLowerCase()];
console.log(harrysAge); //29

// automatic convert
const numbers = [1, 2, , 3, "many"];
console.log(numbers["1"], numbers[1], numbers[6]);

console.log("==== use math.floor over bitwise ====");
//math.floor->,right; bitwise, since >=2**31 wrong.
console.log(Math.floor(5 / 4));
console.log((5 / 4) | 0);

console.log("==== for..of/in: const VS let ====");
// for..of/in: don't change in the NEXT loop
// const can't be changed in CURRENT loop->safer
// let can be changed in CURRENT loop
for (let i of [2, 3, 4]) {
  console.log(i);
  i *= 2;
  console.log("new i=", i);
}
// for (const i of [2,3,4]) {
//     console.log(i)
//     i*=2 //i
//     console.log('new i=',i)
// }

// forEach used more on array
const numbes = [65, 44, 12, 4];
numbes.forEach((ele, idx) => {
  console.log(ele, idx);
});

const obj = { name: "harry smith", age: 19 };
obj.sex = "male";
for (const key in obj) console.log(`${key}, ${obj[key]}`);

// Object.entries() takes an object like { a: 1, b: 2, c: 3 } and turns it into an array of key-value pairs: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
Object.entries(obj).forEach(([k, v]) => {
  console.log(`${k},${v}`);
});

console.log("==== Template literal, backticks ====");
let destination = "world";
let greeting = `Hello, ${destination}`;
console.log(greeting);

console.log("==== ++ ====");
let counter = 0;
let riddle = counter++;
let enigma = ++counter;
console.log(riddle, enigma, counter); //022

console.log("==== ...operator ====");
nums = [1, 2, 3, 4, 5, 6, 7];
let arr = [...nums, 8];
console.log(...arr); // deconstruct array
