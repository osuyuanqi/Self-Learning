// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// it should look like this:
("     ||<- Start line");
("       🐢");
("       🐇");

// when you do:
console.log(startLine);
console.log(turtle.padStart(8));
console.log(rabbit.padStart(8));

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, "=");
console.log(turtle);

// #3) Get the below object to go from:
let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
// to this:
("my name is Rudolf the raindeer");
let totalstr="";
const b=Object.entries(obj).reduce((totalstr,curr) => {
  // console.log(val);
  totalstr+=`${curr[0]} ${curr[1]} `
  return totalstr;
},"").trim();
console.log(b);
const c=Object.entries(obj).map(val=>val[0]+" "+val[1]).join(" ")
//since val is array
const d=Object.entries(obj).map(val=>val.join(" ")).join(" ")

console.log(c)
console.log(d)

