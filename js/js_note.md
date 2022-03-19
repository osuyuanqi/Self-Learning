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
