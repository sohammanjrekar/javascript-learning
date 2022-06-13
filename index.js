// alert('this')
console.time('my')
console.log('hello');
console.log(34+6);
console.log([2,45,78,96]);
console.log({h:'this',m:56})
// console.table({h:'this',m:56})
// console.warn(45)
// console.clear()
// console.timeEnd('my')
// console.assert(856<189,'this is not posssible')
// console.error('yo')


// Variables in js


// var, let , const used to create variable
 var city='harry'
 console.log(name)
var l;
var marks=569
console.log(name,marks,l)

// Rules for creating javascript variables
// 1) cannot start with Number
// 2) can start with letter , _  oR $
// 3) Are case sensitive


const oname='lek';
// oname="hai"; //cannot do this
console.log(oname);
{
let city='rampur';
city='ko'
console.log(city);
}
console.log(city);

const arr1=[1,5,6,8,98,8]
arr1.push(2) //add in last
arr1.unshift(58)//add in first
console.log(arr1);
arr1.pop()// delete last number
arr1.shift()//delete first number
console.log(arr1);

// most common programming case types
// 1. camelCase -used mostly
// 2. kebab-case
// 3. snake_case
// 4.PascalCase

// datatypes in JS
// 1) primitive datatype -stack
//     a) String
//     b) numbers
//     c) Boolean
//     d) null
//     e) undefined
//     f) Symbol

// 2) REfernse datatype -heap
    // a) Array
    // myarr=[1,2,3,5,null,"string"]
    // b) Object Literals
// let smarks={
//     harry:23,
//     soham:56,
//     govinda:58
// }
// console.log(typeof(smarks))

    // c) Functions 
    // function findName(){

    // }
    // d) Dates
    // let dates= new date()

// type conversion and type coercion
let myvar // numbers to string
myvar =  String(56)
console.log(typeof myvar)

let booleanvar=true; // boolean to string
booleanvar =  String(booleanvar)
console.log(typeof booleanvar)

let date= String(new Date())
console.log( typeof date)

let i =8;
console.log(i.toString()) 

let str="6595";
console.log(typeof(Number(str)))

let sptr=parseInt("8596.2556");
console.log(typeof sptr)

let sptr1=parseFloat("96.2556");
console.log(sptr1.toFixed(),typeof sptr1)


let mvar=956
let mstr="85"
console.log(mvar+ mstr)

   