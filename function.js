// Basic function concepts everydeveloper should know

//1 function declaration without parameter value(important)
// function display(){
// document.write('hey iam function declaration')
// }
// display()

// 2 function declaration with parameter value(important)
// function display(a,b){
//     document.write(a+b)
//     }
//     display(20,30)

// 3 function declaration with rest parameter(not important)
// rest parameter takes all the value after a in below example
// function display(a, ...args){
//     document.write(a+ args);
//     }
//     display(20,30,40,50,60)

// 4 argument object(notimportant only for coding interviews)

// the argument object contains an array of the arguments used when the function was called this object an entry for each argument passed to the function the firs entry's index startingh at 0. The arguments object is not an array. it is similar to an Array, but does not have any array properites except length.

// function display(name1, name2){
// // document.write(arguments[1] + '<br>');
// // document.write(arguments[0] + '<br>');
// document.write(arguments.length);
// }
// display('kalludon', 'kallumartand')


// function show(){

// for (let i=0; i<arguments.length; i++){
// document.write(arguments[i] + "<br>");
// }
// }
// show('kalludon', 'arunsaklani', 'kalludai', 'ajaypappubhai')

// 5 Return statement(important)

// A return statement may be return any type data,including arrays and objects

// function show(a,b){
// return a+b;
// }
// document.write(show(20,30));
// return always return ans outside the function where function calls


// globalscope (mostmostmostimportant fav interview questions)

// A variable that is declared outside a function defintion is a global variable and its value is accessible and modifiable throughut your program in a web BrowserRouter, global variables are deleted when you close the browser window or Tab, but remain available to new pages loaded into the same window.

// let j= 'iam a global variable i can excess anywehre';
// function kalludon(){
// document.write(j);
// }
// kalludon();

// for (i=0; i<10; i++){
// document.write(j + '<br>');
// }



// Local scope
// A variable that is declared inside a function defintion is local  it is created and destroyed everytime the function is executed and it cannot be accessed by any code outside the function. inside a function, if a variable has not been declared with let const var it is treated as a global variable.

// if there is function inside a function the inner functiion can access outer function's variables but outer function cannot access inner functions variables;called closure


// function annunallachapri(){
// let a=20;
// }
// annunallachapri()
// document.write(a);

// 2nd exmple variable created without keyword 
// function annunallachapri(){
// a=20;
// }
// annunallachapri()
// document.write(a);


// function show(){
// let a=20;
//     function innershow(){
//     document.write(a);
//     let b=30;
//     }
//     innershow()
//     document.write(b);

// }
// show()

// blockscope(pending)

// variable hoisting

// hoisting is js default behavior of moving variable declaration to the top of the function, if defined in a function, or the top of the global context, if outside a function.(work only for var variable not for let const);

// var a;//this is variable declaration
// a=20;//this is variable initialization

// only variable declarations are hoisted to the top, not variable initilization.

// how we write code
// var a=10;
// document.write(a);
// var b=20;

// how compiler phase read files
// Var a;
// var b;
// a=10;
// document.write(a);
// b=20; 

// with hoisitng a variable can be used before it has been declared.
// a=10;
// document.write(a);
// var a;

// closure
// A closue is a function having access to the parent scope. it preserve the data from outside. 
// A closure is an inner function that has access to the outer (enclosing) function's variables.

// for every closure we have three scopes
//  local scope (own scope)
//  outer functions scope
//  global scope

// let i =10;//global scope
// function show(){
// var j=30;//local scope
// document.write(j+'<br>');
// function innerFunction(){
// let k=50;
// document.write(j);
// document.write(i);
// }
// innerFunction()
// document.write(k);
// }
// show();


// difference between var and let see first scope block of scope
// 1 variable decalared with var can also declare it again with the same name and if we want to re assign its value then we can do that too.
// 2 variable decalared with let   cannot  declare it again with the same name and if we want to re assign its value then we can do that too.
// 3 variable decalared with const   cannot  declare it again with the same name and if we want to reassign its value then we cannot do that too.

// example1 for var
// var a=20;
// var a=30;
// document.write(a);

// example2 for let
// let a=20;
// a=30;
// document.write(a);

// example 3 for const
// const a =30;
// // const a =40;
// //  a =40;
// document.write(a)



//2 variable declared with var  are function scoped. variable declared with let and const are block scoped.
// simple koi variable block scoped ke andar hoga to wo block scoped ke andar tk hi excess kar sakte hai let and const se balki var se khi se bhi excess kar sakte funtion scoped se thats the major difference

// example1
// function show(love){//function scoped. start


// if(love){//block scoped start

// let nam = 'arun';
// let snam ='saklani';
// } //block scoped end


// document.write(`${nam} ${snam}`);
// }//function scoped.end
// show(true);

// example2
// function show(){//block scope
// // let a =20;
// var a =20;
// // if(true){
// // let a = 30;
// // document.write(a);
// // }
// if(true){
//     var a = 30;
//     document.write(a);
//     }
// document.write(a);
// }//block scope end
// show();

// example3
// function show(){

// for(let i=0;i<10; i++){
//     document.write(i);
// }
// document.write(i);

// }
// show();

// note functions inside function follow block scope for both let var and const

// Function expression

// when we create a function and assign it to a variable
// Note you cant call function expression before function definition because function expressions in js are not hoisted, unlike functiion declarations.

// let x= function show(){
// document.write('hey iam  function expression')
// }
// x();

// function declaration
// show();
// function show(){
//     document.write('hey iam  function expression')
// }

// Anonymous function
// Anonymous function allow the creation of functions which have no specified name.allow

//1 can be stored in a variable.//function expression
//2 can be returned in a function
//3 can be pass in a function

// can be stored in a variable.//function expression
// let x= function (){
// document.write('hey iam function expression');
// }
// x();

// 2 passing anonymous function as an argument

// function show(x){
// return x;
// }

// document.write(show(function (){
//     return 'kallu don hai';
// })
// );


// function anonymous(){
// return function(a){
// return a;
// }
// }
// let y = anonymous();
// document.write(20);
// let af = (anonymous());
// document.write(af(20));



// Arrow function(most important function used in project)

// an arrow function expression, has a shorter syntax compared to function expressions. Arrow function are always anonymous

// let x= function show(){
// document.write('hey iam function expression');
// }
// x();

// let y= function(){
// document.write('hey iam function expression with anonymous function');
// }
// y();




// let x= ()=>{
// document.write('hey iam arrow function combination of function expression + anonymous funtion less code no requried function keyword but using => arrow function sign to show iam arrow function');
// }
// x();


// let y= a=>{
// document.write('for single parameter value ()simplebracket and curly bracket{} are optional but more than one parameter value both () and{} are mendatory ' + '<br>');
// document.write(a);
// }
// y(10);


// ex1
// here function returning value,array,object
// function show(){
// // return "kallu bhai"
// // return [1,2,3,4];
// // return {a:20,b:30}
// return [
// {firstname:'kallubhai'},
// {firstname:'ajaybhai'},
// ]
// } 
// console.log(show());

// ex2 function inside function 

// function show(){
//     function hideandseek(){
//     console.log('hey iam function inside function');
//         }
//         hideandseek();
//         console.log('hey guess who will print first');
// }
// show();


// modern js
// advanced topic

// function returning functions

// Means function return value ya array ya number ki jagah function return karta hai (used in closures so important method)


// ex1
// function first(){
//        return function show(){
//         console.log('hey iam returning function')
//         }
// }
// let x = first();//here x = function show(){console.log('hey iam returning...)}
// document.write(x);
// x();

// let y = first()
// document.write(y)
// y();

// ex2(best example)
// function first(){
//         return function show(a,b){
              
//                 return a+b;
//         }
// }
// // let y =x(20,30);
// // console.log(y);
// // console.log(x(20,30));


// callback function, map,filter (fast)

// callback function
// jab ek function apne argument main value ya array ya object ki jagah dusra function ka argument lele or apne parameter ki value ko call karne par dusra function ki value print ho jaye to use callback kahnge 
// asan bhasa main callback except kiya callback call krliya
// or asan bhasa main koi function input liya call kardya input ko



// function second(name){
// document.write('i will print first' + '<br>');
// document.write(name);
// }

// function first(callback){
// document.write(callback + '<br>');
// callback('kallu');//callback ko call karlya means second function ko call kr liya
// }
// first(second);



// some important array method

// for each method
// for each calls a provided function once for each element in an Array, in order
// syntax  array.forEach(function(value,index,arr){

// });

// ex

let numbers = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// by for loop


// for(i=1;i<numbers.length; i++){

// //  document.write(i + '<br>');
// // document.write(i*2 + '<br>');
// //  document.write(`${2} x ${value} = ${2*value + '<br>'}`);
// }

// by foreachloop(optional we can use both for and for each loop but foreach loop easy hai but we cant return any value from from eachloop)

// numbers.forEach(function(value){
// // document.write(value + "<br>");
// // document.write(value*2 + '<br>');
// document.write(`${2} x ${value}= ${2*value + '<br>'}`)
// // document.write(`${2} x ${value} = ${2*value + '<br>'}`);
// })


// ex2(real time example)

let friendlist = [
{friend: "kallu", age: 24},
{friend: "lalau", age: 22},
{friend: "bhukki", age: 14},
{friend: "tundka", age: 23},
{friend: "doggy", age: 20},
]

// friendlist.forEach((friendnames)=>{

// //  document.write(friendnames.friend+'lodu' + '<br>');
// //  document.write(friendnames.age*2+'<br>');
// })

// in this example we will see how foreachloop fail to return any array vallue;
// let x = friendlist.forEach((value)=>{
// // document.write(value.age*2+'<br>');
// return value.age*2+'<br>';
// }

// )
// console.log(x);//failed to return any array value and ans is undefined;


// map method in js by above method
// map method calls array element every element and create a new array by new array we can return anything from existing array but it cannot change existing array only it modify for our use

// note only difference between map and foreach method of array is that map method can return anything 
// from new array but foreachloop cant 


// let x = friendlist.map(function show(value){
// // document.write(value.age*2+'<br>');
// return value.age*2+'<br>';
// }
// )
// document.write(x);// return any array value;
// document.write(friendlist[1].age);


// filter method

//filtr and map method is same but only difference between them is that filter method ka callback function  always return kare boolean value but map method cant return boolean value it return only true false value;



// let  numbers = [1,2,3,4,5,6,7,8];

// function evennumbers(){

// }
// evennumbers();

// let x = numbers.filter((value)=>{
// return value%2===0;
// })
// console.log(x);

// by map method method above example
// let x = numbers.map((value)=>{
//     return value%2===0;
//     })
//     console.log(x);



// join method
// join method join array into  string (we can use with map method)

// let myFriends = ['sohan','mohan','rohan','kallu', 'ajay']
// document.write(myFriends);
// document.write(typeof(myFriends));
// let joinmyFriends = myFriends.join("");
// document.write(joinmyFriends);
// document.write(typeof(joinmyFriends));



// reduce method
// the reduce method reduces function (that you provide) on each element of the Array, resulting in a single output value.
// ex

// const numbers = [10,2,3,4,22];

// let sum = numbers.reduce((accumulator,currentvalue)=>{
// return accumulator+ currentvalue;
// });
// console.log(sum);

//accumulator, currentvalue, return
// 10           2               12
// 12           3               15
// 15           4               19
// 19           22              41


// ex2 real project example

// const userCart = [
//     {prouctId:1, productName: "redmi5a", price:6000},
//     {prouctId:1, productName: "samsungfs21", price:30000},
//     {prouctId:1, productName: "redmi8", price:8000},
//     {prouctId:1, productName: "infinixsmart5", price:7000},
// ]

// let totalamount = userCart.reduce((totalprice, currValue)=>{
// return totalprice + currValue.price;
// },0)
// console.log(totalamount);

//(totalprice), currentvalue,     return
// 0            6000               6000
// 6000         30000              36000
// 36000        8000               44000
// 44000        70000              51000   