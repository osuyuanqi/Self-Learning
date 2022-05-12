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

/************************************************
* closure->create private/static variable within a function
************************************************/
function makeCounter(){
	var count = 0;
	return function(){
		return count++;
	}
}
var count=makeCounter();
console.log(count());
console.log(count());
console.log(count());
/************************************************
* string is immutable
************************************************/

str="abc";
a=str.toUpperCase();
a[0]=2;
console.log(a);//a,ABC
console.log(str)//str,abc

/************************************************
* Object usage
************************************************/
const Person ={firstName:"Luke",
secondName:"Alex",
age:19
};
console.log(Person.firstName);

function Pson(fst,snd){
	this.firstName=fst;
	this.secondName=snd;
}
// why this? the firstName&secondName come from above
Pson.prototype.getFullName=function (aaa){
	return this.firstName+" GGG "+this.secondName+aaa;
}
var p1=new Pson("lll","kkk");
console.log(p1.getFullName("abcddd"))