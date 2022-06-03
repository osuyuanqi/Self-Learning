- [js dictionary usage](https://flexiple.com/javascript-dictionary/)
- fix Cross Origin Resource Sharing:
    - [use proxy server](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9). 
    - > e.g. origin url: https://joke-api-strict-cors.appspot.com/jokes/random  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;after: https://cors-anywhere.herokuapp.com/https://joke-api-strict-cors.appspot.com/jokes/random
- fetch->window object, eg. type console->window.fetch, [default {mode: "cors"}](https://stackoverflow.com/questions/66757285/why-do-we-not-specify-mode-cors-when-using-fetch-when-the-default-is-no-cors#:~:text=The%20default%20is%20cors%20.,with%20fetch%20%2D%20that's%20the%20default.&text=That's%20only%20the%20default%20for,is%20created%20using%20the%20Request)
```JavaScript
fetch(url).then(function(a) {
	return a.json()}).then(function(b){
	})
```
- [JS array const->store reference,push/pop->operate the array point to, rather than array itself](https://stackoverflow.com/questions/23436437/why-can-i-change-a-constant-object-in-javascript)
```JavaScript
// right
const y = [];

y.push('foo');

console.log(y); // ['foo']
// wrong:
const x = {};
x = {foo: 'bar'}; // error - re-assigning

const y = ['foo'];
const y = ['bar']; // error - re-declaring
```
- closure: [make data safer,since js no private class before 2015](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

- What are the two elements of a pure function?
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.

- []===[]//false,since array is object, means different memory location

- GET->get sth, POST-> add sth, PUT>update sth, DELETE->delete sth
