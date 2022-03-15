/************************************************
* slice & splice difference
************************************************/

// slice->don't change original array, return [start,end)
const fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];
console.log(fruits.slice(2, 4));
// splice->change original array, usage(startIndex,numIndex,replacedValue);numIndex==0?->insert
fruits.splice(2, 0,'pear')
console.log(fruits);
fruits.splice(2, 2,'blueberry')
console.log(fruits);

let a=1,b="22";
let c = `${a}${b}`;
console.log(typeof c,c);//string,122
