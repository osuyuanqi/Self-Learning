// ==== dom selectors ====
// [new way]
// Good habbit: store the variables
// default the first one
let li_elem = document.querySelector("li");
// select all elem, by html dom order
let test = document.querySelectorAll("li,h1");
console.log(test);
let li_first_att = li_elem.getAttribute("random");
li_elem.setAttribute("random", 1000);
let li_first_newatt = li_elem.getAttribute("random");

// [old way]
// document.getElementById;
// document.getElementsByClassName;

// ==== change styles ====
// classList method
li_elem.classList.add("boldClass");
test[2].classList.remove("big");
test[2].classList.toggle("big");
test[2].classList.toggle("big");

li_elem.parentElement.setAttribute("id", "1");
console.log(li_elem.parentElement.parentElement);
// console.log(li_elem, test, li_first_att, li_first_newatt);

// ==== 0 and false ====
const validNumber = [0, "", null]; // 0 should work
console.log(0 == false, 0 === false); //== value check;===type check
validNumber.forEach((a) => {
  // potential bugs, e.g.0->convert to false implicitly
  if (!a) {
    console.log("error in way 1:" + a);
  }
  // right way
  if (a == null || isNaN(parseInt(a))) {
    console.log("error in way 2:" + a);
  }
});
