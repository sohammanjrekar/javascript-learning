// JAvascript course notes and code


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
// // (3)??['so', 'am ', 'ave']
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
//     console.log(`${name} Birthdays come around every year, but friends like you only come once in a lifetime. I???m so glad you came into my life. Best wishes on your special day.`)
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

// node types
// /*
// 1) elements
// 2) attribute
// 3) text node
// 8) comment
// 9) document
// 10) doctype
// */

// traversing 
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

// /*for getting attribute
// element.getAttribute('class');

// for check having attribute or not
// element.hasAttribute('class');
// */



// events


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

// localStorage.setItem('Name','jharr');
// let name=localStorage.getItem('Name');
// console.log(name)





// Maths in js
// let x=34;
// let y =6;
// let z;
// z=x+y;
// z=x-y;
// z=x*y;
// z=x/y;
// z=x%y;



// exploring the math object
// z=Math;
// z=Math.PI;
// z=Math.E;
// z=Math.round(5.4);
// z=Math.ceil(5.2)
// z=Math.floor(2.3)
// z=Math.abs(-5.6)
// z=Math.sqrt(4.5);
// z=Math.pow(6,2);
// z=Math.min(2,8,9,56,74,4,1);
// z=Math.max(2,8,9,56,74,4,1);



// random numbers generate
// z=Math.random();
// z=50+(100-50)*Math.random();
// z=Math.ceil(100*Math.random());
// console.log(z);




// time stamp
// let today=new Date();
// console.log(typeof(today));
// let otherdate=new Date('8-14-2001 04:54:08');
// console.log(otherdate);
// let a=otherdate.getDay();
// a=otherdate.getDate();
// a=otherdate.getMonth();
// a=otherdate.getMinutes();
// a=otherdate.getHours();
// a=otherdate.getSeconds();
// a=otherdate.getTime();
// a=otherdate.setDate(23);
// a=otherdate.setMonth(2);
// a=otherdate.setFullYear(2010);
// a=otherdate.setMinutes(20);

// console.log(otherdate);


// OOPs


//object literal for creating objects
// let car={
//     name:'Maruti 800',
//     topspeed:89,
//     run: function() {
//         console.log("car is running");
//     }
     // Also use
     // run: () => {
     //     console.log("car is running");
    // }
// }

// creating a constructor for cars
// function GeneralCar(givenname,givenspeed){
//     this.name=givenname;
//     this.topspeed=givenspeed;
//     this.run =function () {
//         console.log(`$(this.name) is running `)
//     }
// }
// car1=new GeneralCar('Nissan',450)
// console.log(car1);


//object literal: Object.Prototype
// let obj={
//     name:"harry",
//     channel:"code with harry",
//     address:"mars"
// }

// function Obj(givenname) {
//     this.name=givenname
// }
// Obj.prototype.getName= function(){
//     return this.name;
// }
// let obj2=new Obj("Rohan Das");
// console.log(obj2);

// const proto={
//     slogan:function () {
//         return `this comp`;
//     },
//     changeName: function () {
//         this.name=newName
//     }
// }

// const harry=Object.create(proto);
// harry.name="harry";
// harry.role="programmer";
// console.log(harry)


//Class
// class Employee{
//     constructor(givenname,givenexperience,givendivision){
//         this.name=givenname;
//         this.experience=givenexperience;
//         this.division=givendivision;
//     }
//     slogan(){
//         return `i am ${this.name}`;
//     }
//     static add(a,b){
//         return a+b;
//     }
// }


// class Programmer extends Employee{
//     constructor(givenname,givenexperience,givendivision,language){
//         super(givenname,givenexperience,givendivision);
//         this.language=language;
//     }
// }

// soham= new Employee("harry",2,"D");
// console.log(soham.slogan())
// console.log(Employee.add(45,5))
// soham2 = new Programmer("harry",2,"D","python");
// console.log(soham2)



//Synchronous vs asynchronous programming
// An asynchronous model allows multiple things to happen at the same time
//few ways of asynchronous
//1. Async/await
//2. callbacks
//3.promises

//in a synchronous programming model things happen one at time

// Asynchoronous programming
//     setTimeout(() => {
//         for (let index = 0; index < 40; index++) {
//             const element = index;
//             console.log("this is index"+index)
//         }
//     }, 100);

// console.log('done printing')


//Ajax : Asynchronous javaascript and xml


///for information send
// let fetchbtn=document.getElementById("fetchbtn");
// fetchbtn.addEventListener('click',buttonclick)
// function buttonclick() {
//     console.log("you are click")
//     //instantiate an xhr object
//     const xhr= new XMLHttpRequest();
    
//     //open the object
//     // xhr.open('GET','harry2.txt',true);//true for asynchronous


//     //use post request 
//     xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
//     xhr.getResponseHeader('content-type','application/json')

//     //what to do on process(optional)
//     xhr.onprogress=function () {
//         console.log("on process")
//     }

//     //what to do when response is ready
//     xhr.onload=function () {
//         // 200 status means ok everything
//         if(this.status===200){
//             console.log(this.responseText)
//         }
//         else{
//             console.error("error")
//         }
//     }

//     // send  the request
//     params=`{"name":"test11","salary":"123","age":"23"}`;
//     xhr.send(params);
// }


//for information take from internet
// let popbtn=document.getElementById("backupbtn");
// popbtn.addEventListener('click',pophandler)
// function pophandler() {
//     console.log("you are click")
//     //instantiate an xhr object
//     const xhr= new XMLHttpRequest();
    
//     //open the object
//     xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);//true for asynchronous

    
//     //what to do when response is ready
//     xhr.onload=function () {
//         // 200 status means ok everything
//         if(this.status===200){
//             let obj=JSON.parse(this.responseText);
//             console.log(obj);
//             let main= document.getElementById("main1");
//             str="";
//             for(key in obj)
//             {
//                 str += `<li>${obj[key]}</li>`;
//             }
//             main.innerHTML = str;
//         }
//         else{
//             console.error("error")
//         }
//     }

//     // send  the request
    
//     xhr.send();

// }



//callback function: function ke andar function call karna
//pretend that this response is coming from the server
// const stundents =[
//     {name:"harry",subject:"javascript"},
//     {name:"soham",subject:"python"},
// ]
// function enroll(stundent,callm()){
//     setTimeout(function(){
//         stundents.push(stundent);
// callm();
//     },3000);
// }


//promise : resolve or reject or pending
// function func1() {
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             const error=true;
//             if (!error) {
//                 console.log('your promise has been resolved')
//                 resolve();
//             }
//             else{
//                 console.log('your promise has not been resolved')
//                 reject('sorry')
//             }

//         }, 2000);
//     })
// }
// func1().then(function(){
//     console.log("harry: thanks")
// }).catch(function(error){
//     console.log("harry: bad bro "+ error)
// })

//fuction inside then is run as -resolve()
// fuction inside catch is run as -reject()



//Arrow function

//creating a regular function
//const harry=function(){
// console.log("this is the best");
// }

//creating it to an arrow function
//const harry=()=>{
// console.log("this is the best");
// }


//one liner donot require braces
// const greet=()=>"good bro";
// console.log(greet())

//single parameters do not need parenthesis but you will have to put parenthesis if there are multiple parameters
// const greet=name=>"good bro "+name;


// const greet=(name,n)=>"good bro "+name+" "+n;
// console.log(greet('soham',12))



// fetch data 
//button with id fetchall
// let mybtn=document.getElementById("fetchall");

// //div with id content
// let content =document.getElementById("content");

// function getdata(){
//     console.log("start")
//     url="harry.txt";
//     fetch(url).then((response)=>{
//         console.log("inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data);
//     })
// }
// console.log("before get data")
// getdata();
// console.log("after get data");





//post data 
// function postdata(){
//     url="http://dummy.restapiexample.com/api/v1/create";
//     data ={"name":"soham456","salary":"123","age":"45"}
//     params={
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body:data
//     }
//     fetch(url, params).then(response=>response.json()).then(data=>
//         console.log(data))
// }
// postdata()




//await / async
// asysn retuen promise
// async function harry(){
// const response=await fetch('https://api.github.com/users')
// const users=await response.json();
// return users;
// }
// let a= harry();
// console.log(a);
// a.then(data=>console.log(data))


//Error handling

//pretent this is coming from a server as response
// let a="soham bhai";
// // a=undefined;
// if(a!=undefined){
//     throw new Error('this is not undefined');
//     console.log('this not undefined');
// }else{
//     console.log('this undefined')
// }

// try {
//     console.log(soham);
// } catch (error) {
//     console.log("are you okay");
//     console.log(error);
//     console.log(error.name)
// }finally{
//     console.log("finally run")
// }


//regular expression
//regualar Expression :
//basic functions
//Metacharater Symbols
//Character Sets  : []

let reg=/harry/; //this is a regular expression literal in js
// g -global flag
//i- case insensitive
console.log(reg);
console.log(reg.source);

let s="this is great code with harry snd harry";
// Functions to match expression
// 1) exec() - This function will return an array for match or null for no match
// let result=reg.exec(s)
// console.log(result)
// console.log(result.index)
// console.log(result.input)


// 2) test() - Returns true or false
// let result=reg.test(s)
// console.log(result)

// 3) match()- it will return an array of results or null
// let result=reg.match(s)--this is wrong
//  let result=s.match(reg)//--this is right
// console.log(result)

//4) search()- Returns index of first match else -1
// let result=reg.search(s)--this is wrong
//  let result=s.search(reg)//--this is right
// console.log(result)

// 5) replace()- Returns new replaced string with all the replacements
//  let result=s.replace(reg,'soham')//--this is right
// console.log(result)


// reg="/^harry/";//^ means expression will match if string starts with
// reg=/rry$/; // $  at the end  of the string means "string ends with"
// reg=/h.rry/;// matches any one character
// reg=/h.ry/;// matches any one character
// reg=/ha?rryi?/;// ? after character means that character is optioal
// reg=/h\*ry/;// matches * as character

//character Sets - we use []
// reg=/h[a-z]ry/;// matches all characters to a to z
// reg=/h[avz]ry/;// matches by given all characters
// reg=/h[^avz]ry/;// not matches by given all characters others are ok


//quatifiers: decide the repetation of character : we use {}
// reg=/har{2}y/ //{n} means n time repetations
// reg=/har{0,2}y/ // means 0 to n time repetations

//grouping - we use paranthesis for groupings ()
// reg=/(har){2}/


// character classes
//  reg =/\war/; //word character - _or alphabet or numbers
//  reg =/\w+ar/; //\w+ means one or more word characters
//  reg =/\Wharry/; // Capital W means no wor character
//  reg =/\W+ar/; //\W+ means more than one non word characters
//  reg=/number \d999/; //d means digit
//  reg=/number \d+/; //d+ means more than one digit
//  reg=/\D999/; //D means non digit
//  reg=/\D+999/; //D+ means more than one non digit
//  reg=/\ska number/; //Match whitespace character
//  reg=/\s+ka number/; //Match one or more than one non whitespace character
//  reg=/4r5r\b/; // Word boundary
//  reg=/\h(?=y)/; //when y comes after h match found
//  reg=/\h(?!y)/; //when y not comes after h match found

// // regex use
// let result=reg.exec(s);
// console.log('the result from exec is',result);
// if(reg.test(s)){
//     console.log(`the string ${s} matches the expression ${reg.source}`);
// }else{
//     console.log(`the string ${s} does not matches the expression ${reg.source}`)
// }



//Iterators
// const myarray=['Apple','grapes','oranges','bhindi'];
// console.log('my array is',myarray);

// function fruitsIterator(values){
//     let nextIndex=0;
//     //we will return an object
//     return{
//         next:function(){
//             if(nextIndex<values.length){
//                 //we will return below object
//                 return{
//                     value: values[nextIndex++],
//                     done:false
//                 }
//             }else{
//                 // we will return below object with only done
//                 return{
//                     done : true
//                 }
//             }

//         }
//     }
// }

// //using the iterator
// const fruits=fruitsIterator(myarray)
// console.log(fruits.next())
// console.log(fruits.next())
// console.log(fruits.next())
// console.log(fruits.next())
// console.log(fruits.next())


//Generators in js
//1-1B

// function* numberGen() {
//     let i=0;
//     // yield 1;
//     // yield 2;
//     // yield 3;
//     // yield 4;
//     while (true) {
//         yield i++;
//     }
// }
// const gen=numberGen()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


// for-in and for-of loops
// people=["h" ,"s","t"];

// //TRaditional for loop

// // for (let index = 0; index <people.length; index++) {
// //     const element =people[index];
// //     console.log(element);
// // }

// obj={
//     name:"soham",
//     language:"js",
//     hobbies:"criket"
// }
// //for short code use for in loop
// //iteration an object using for in loop:
// for(let key in obj){
//     console.log(obj[key]);//key is string type also
// }

// //for of

// people=["h" ,"s","t"];
// for(let name of people){
//     console.log(name) //of direct give data /in gives index
// }



//Maps in javascript : we can use any type of key or value

// const myMap= new Map();
// console.log(myMap);
// const key1='mystr',key2={},key3=function(){}

// //setting map values
// myMap.set(key1,'this is a string');
// myMap.set(key2,'this is a word');
// myMap.set(key3,'this is a char');
// console.log(myMap);

// //getting the values from a Map
// let value1=myMap.get(key1);
// console.log(value1);

// //get the size of the map
// console.log(myMap.size);

// // you can loop using for..of to get keys and values
// for(let [key,value] of myMap){
//     console.log(key,value);
// }
// //get only keys
// for(let key of myMap.keys()){
//     console.log(key)
// }

// // get only values
// for(let key of myMap.values()){
//     console.log(key)
// }

// //you can loop through a map using for loop
// myMap.forEach((value,key)=>{
//     console.log('key is',key);
//     console.log('value is',value);
// })

//converting map to an array
// let myArray=Array.from(myMap);
// console.log('array is',myArray);


// //converting map keys to an array
// let mykeyArray=Array.from(myMap.keys());
// console.log('array is',mykeyArray);

// //converting map values to an array
// let myvaluesArray=Array.from(myMap.values());
// console.log('array is',myvaluesArray);


// sets in javascript
// set stores unique values
// const myset=new Set(); //initialize an empty set
// // console.log('the set is',myset);

// // Adding values to this set
// myset.add('this');
// myset.add('or');
// myset.add('one');
// myset.add(25);
// myset.add(true);
// console.log('the set is',myset);

// in line one all
// let myset2=new Set([1,45,'ao',true,{a:45,b:78},1])//repeat things not count
// console.log('the set2 is',myset2);

// size
// console.log('the set size',myset.size);

// //check values are availableor not in set 
// console.log(myset.has(25));

// myset.delete('this')
// console.log(myset);


//iterating a set
// for(let item of myset){
//     console.log('the item is',item);
// }


// myset.forEach((item)=>{
//     console.log('the item is',item);
// })




// Symbols in js
// const sym1=Symbol('my i');
// const sym2=Symbol('my i');
// console.log(sym1===sym2);// output is false because both are diffrent symbols

//Symbols are ignored in for in loop
// for(key in myobj){
//     console,log(key,myobj[key])
// }



//Destructuring in js
// let a,b;
// [a,b]=[34,564];
// console.log(a,b);

// [a,b,c,...d]=[1,2,3,4,5,6,7,8,9]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// // Array Destucturing
// ({a,b,c,...d}={a:34,b:45,c:78,d:45,e:65})
// console.log(a,b,c,d);

// const fruits=['apple','mango'];
// [a,b]=fruits;
// console.log(a);
// console.log(b);

// //object Destructing
// laptop={
//     model:"hp",
//     age:45,
//     gender:"male",
//     Start : function(){console.log('hii');}
// }
// const{model,age,gender}=laptop;
// console.log(model,age,gender)



