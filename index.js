// // alert('this')
// console.time('my')
// console.log('hello');
// console.log(34+6);
// console.log([2,45,78,96]);
// console.log({h:'this',m:56})
// // console.table({h:'this',m:56})
// // console.warn(45)
// // console.clear()
// // console.timeEnd('my')
// // console.assert(856<189,'this is not posssible')
// // console.error('yo')


// // Variables in js


// // var, let , const used to create variable
//  var city='harry'
//  console.log(name)
// var l;
// var marks=569
// console.log(name,marks,l)

// // Rules for creating javascript variables
// // 1) cannot start with Number
// // 2) can start with letter , _  oR $
// // 3) Are case sensitive


// const oname='lek';
// // oname="hai"; //cannot do this
// console.log(oname);
// {
// let city='rampur';
// city='ko'
// console.log(city);
// }
// console.log(city);

// const arr1=[1,5,6,8,98,8]
// arr1.push(2) //add in last
// arr1.unshift(58)//add in first
// console.log(arr1);
// arr1.pop()// delete last number
// arr1.shift()//delete first number
// console.log(arr1);

// // most common programming case types
// // 1. camelCase -used mostly
// // 2. kebab-case
// // 3. snake_case
// // 4.PascalCase

// // datatypes in JS
// // 1) primitive datatype -stack
// //     a) String
// //     b) numbers
// //     c) Boolean
// //     d) null
// //     e) undefined
// //     f) Symbol

// // 2) REfernse datatype -heap
//     // a) Array
//     // myarr=[1,2,3,5,null,"string"]
//     // b) Object Literals
// // let smarks={
// //     harry:23,
// //     soham:56,
// //     govinda:58
// // }
// // console.log(typeof(smarks))

//     // c) Functions 
//     // function findName(){

//     // }
//     // d) Dates
//     // let dates= new date()

// // type conversion and type coercion
// let myvar // numbers to string
// myvar =  String(56)
// console.log(typeof myvar)

// let booleanvar=true; // boolean to string
// booleanvar =  String(booleanvar)
// console.log(typeof booleanvar)

// let date= String(new Date())
// console.log( typeof date)

// let i =8;
// console.log(i.toString()) 

// let str="6595";
// console.log(typeof(Number(str)))

// let sptr=parseInt("8596.2556");
// console.log(typeof sptr)

// let sptr1=parseFloat("96.2556");
// console.log(sptr1.toFixed(),typeof sptr1)


// let mvar=956
// let mstr="85"
// console.log(mvar+ mstr)


// // + is use for string concate
// // .concat also use

// // string functions
// // .length
// // .toLowerCase
// // .toUpperCase

// // indexing
// const html= "soham have"
// // console.log(html[0])
// // console.log(html.indexOf('have'))
// // console.log(html.lastIndexOf('have'))
// // console.log(html.charAt(2))
// // console.log(html.endsWith('have'))
// // console.log(html.includes('ha'))
// // console.log(html.substring(2,8))
// console.log(html.slice(0,4))
// console.log(html.split('h'))
// console.log(html.replace('have','it')) //only replace first occurence
// //  output
// // s
// // 6
// // 6
// // h
// // true
// // true
// // ham ha
// // soha
// // (3) ['so', 'am ', 'ave']
// //  soham it

// // template  literals
// let f="soham";
// let lo=97689548
// let myhtml=`HEllo ${f} <h1> this ${lo} my world</h1>`
// document.body.innerHTML=myhtml;

// //array
// const arrmix=['so',65,'ho',895,[5,9]]
// console.log(arrmix)

// const arrmy=new Array(23,89,'klo',[8,9])
// console.log(arrmy)

// console.log(arrmy.length)
// console.log(Array.isArray('89'))

// // modifying array
// const marksj=[4,8,9]
// marksj.push(500) // add in last
// marksj.unshift(4)//add in first
// console.log(marksj)
// marksj.pop()// delete last item
// console.log(marksj)
// marksj.shift()//delete first item
// console.log(marksj)

// marksj.splice(1,2) // delete item start to end
// console.log(marksj)
// marksj.reverse()
// console.log(marksj)


// //create object
// let myu={
//     name:'soham',
//     channel:'cop',
//     isactive:true
// }
// console.log(myu)
// let age=19
// // if-else statement
// if (age==19){
//     console.log('if')
// }else if(age<45){
//     console.log('else if')
// }else{
//     console.log('else')
// }
// // == only match value 
// // === check type of value also like char and num

// // if else in one line
// console.log(age==19?'age is 45':'age is good')

// age=18
// // switch case
// switch(age)
// {
//     case 19 : 
//     console.log('19')
//     break;
//     case 18 : 
//     console.log('18')
//     break;
//     default:
//     console.log('none')
//     break;
// }


// // loops// types of loops':for while do-whlie
// // 1)for loop
// for (let index = 0; index < 10; index++) {
//     // const element = array[index];
    
// }
// let j=1
// // 2)while loop
// while (j<10) {
//     // codition
//     j++;
// }
// // 3) do while
// do {
//      // codition
//      j++; 
// } while (j<10);


// // break
// // break iterations at any number

// //continue
// // skip the any iteration

// // Foreach loop
// let array=[2,5,8,9]
// array.forEach(element => {
//     console.log(element)
// });



// // object 
// let obj1={
//     name:'soham',
//     rollno:7894,
//     city:'dadar'
// }
// for(let key in obj1){
//     console.log(obj1[key])
// }


// // function
// function greet(name) {
//     console.log(`${name} Birthdays come around every year, but friends like you only come once in a lifetime. I’m so glad you came into my life. Best wishes on your special day.`)
// }
// let name1='soham'
// greet(name1)

// Scope
// let and const have local scope
// var have global scope

 

// Dom : document Object model
// let a=window;
// let a=window.document;
// alert('hello soham')
// console.log(a)

// a=prompt('this will destroy your computer')
// console.log(a)

// a=confirm('are you sure you want to delete this page')
// a=window.innerHeight;
// a=window.innerWidth;
// a=scrollX
// a=scrollY
// a=location
// a=location.href='//codewithharry.com'
// a=location.toString()
// a=window.history
// a=history.go(-1)
// a=document
// a=document.all;
// a=document.links;
// a=document.links[0].href;
// // a=document.body;
// Array.from(a).forEach(function(element) {
//     console.log(element)  
// });


// elementm selectors:
// 1. Single element Selector
// 2. Multi element Selector


// // 1. Single element Selector
// let element=document.getElementById('myfirst');
// // element=element.className;
// // element=element.childNodes;
// // element=element.parentNode;
// element.style.color='red'
// // element.innerText='soham is good'
// // element.innerHTML='<b>f</b>'
// console.log(element);

// let sel=document.querySelector('#myfirst');
// sel=document.querySelector('.child');
// console.log(sel)


// // 2. Multi element Selector
// let element1=document.getElementsByClassName('red');
// console.log(element1[0].getElementsByClassName('child'));

// Array.from(element1).forEach(element=>{
//     console.log(element)
// })


// Dom traversing
// let count1=document.querySelector('.container');
// console.log(count1);
// console.log(count1.childNodes);//show text comments also
// console.log(count1.children);// show only  modules

// let nodename= count1.childNodes[0].nodeName
// console.log(nodename);

// let nodetype= count1.childNodes[0].nodeType
// console.log(nodetype);

//node types
/*
1) elements
2) attribute
3) text node
8) comment
9) document
10) doctype
*/

//traversing 
// let container=document.querySelector('div.container');
// console.log(container.children[1].children[0].children);



// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.childElementCount);//count of child elements

// console.log(container.firstElementChild.parentNode);// for find parent node
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);



// let element=document.createElement('li');
// // add a class name to the li element
// element.className='childul';
// element.id='createli';
// element.setAttribute('title','mytitle');
// let text=document.createTextNode('i am a text node')
// element.appendChild(text);
// // element.innerText='hello this is created';

// let ul=document.querySelector('ul.this')
// ul.appendChild(element);
// console.log(ul)
// console.log(element);


// let myul=document.getElementsByClassName('this');
// myul.replaceChild(myul,document.getElementById('myli'));
// myul.removeChild(document.getElementById('myli'));
// console.log('myul');

/*for getting attribute
element.getAttribute('class');

for check having attribute or not
element.hasAttribute('class');
*/



//events


// document.getElementById('heading').addEventListener('click',function(e){
//     console.log('you have clicked the heading');
//     let mi;
//     mi=e.target;
//     mi=e.target.className;
//     mi=e.target.classList;
//     mi=e.target.id;

//     mi=e.offsetX;
//     mi=e.offsetY;
//     mi=e.clientX;
//     mi=e.clientY;
//     console.log(mi);
//     // location.href='//codewithharry.com';
// });

// let btn=document.getElementById('btn');
// btn.addEventListener('click',funct);
// btn.addEventListener('dblclick',funct1);
// btn.addEventListener('mousedown',funct2);
// function funct(e) {
//     console.log("thanks",e);
//     e.preventDefault();
// }
// function funct1(e) {
//     console.log("double thanks ohhyh",e);
//     e.preventDefault();
// }
// function funct2(e) {
//     console.log("mousedown",e);
//     e.preventDefault();
// }


// document.querySelector('.container').addEventListener('mousemove',function(e) {
//     console.log(e.offsetX,e.offsetY);
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX + e.offsetY})`;
// });



