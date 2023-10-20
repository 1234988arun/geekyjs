// how browswer read html file

// browser read html file from top to bottom including spaces(textnode) from this conclusion browser ek object bnayga or us object ko bolte hai document object and js window object ke andar pass karega documentobject ko. to include window before window property is optional because everything we are creating inside dom and dom is a child of windowobject

// for ex
// console.log(window);
// console.log(window.document);
// console.dir(document);//js gives this property to document we can use any property from this


// 2// select element using getelementbyId#
// let titleEl = document.getElementById("title");
// console.log(titleEl);//this is not actually a element this is object let me proof
// console.log(typeof titleEl) hence proof

// 3// changetextcontent and innertext

// only difference is that textcontent can see hide property but innertext cant

// console.log(titleEl.textContent));//i can only be seen by text content property
// console.log(titleEl.innerText);// this cannot seen hide property

// change style of elements
// let classEl = document.querySelector('.text');
// // console.log(classEl);//only show first element
// let classEl2 = document.querySelector('div.bigger-text h2');
// console.log(classEl2);

// 4 get and set attributes

// let link = document.querySelector("a");
// console.log(link);
// console.log(link.getAttribute("href"));
// let titleEl = document.getElementById("title");
// console.log(titleEl.getAttribute("id"));

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://google.com");//here set change the location
// console.log(link.getAttribute("href").slice(1));

// 5
//  getl multiple elements using getElements by class name
//  getl multiple elements using queryselectorAll 

// let navlinksEl = document.getElementsByClassName("nav-link");//HTML COLLECTIONS
// console.log(navlinksEl);
// console.log(typeof navlinksEl);//object
// console.log(navlinksEl[1]);
// let navlinkEl = document.querySelectorAll(".nav-link");//Node list
// console.log(navlinkEl);
// console.log(typeof navlinkEl);//object
// console.log(navlinkEl[1]);

// HTML COLLECTIONS
// they show some property of array and some dont but we can do by change into array
//weCant use foreach method to iterate through HTML COLLECTIONS
// simple forloop
// for of loop
// forEachloop

// simple forloop
// for(let i=0; i<navlinksEl.length; i++){
// // console.log(navlinksEl[i]);
// const navitem = navlinksEl[i];
// navitem.style.backgroundColor = "black";
// navitem.style.color = "white"
// }

// for of loop
// for(let navitem of navlinksEl){
// navitem.style.backgroundColor = "red";
// navitem.style.color = "white";
// }

// foreachloop// this will not work
// navlinksEl.forEach((navitem)=>{
// navitem.style.backgroundColor = "red";
// navitem.style.color = "white";
// })

// navlinksEl = Array.from(navlinksEl);// now this work because we change into array now can apply for each method of array
// navlinksEl.forEach((navitem)=>{
// navitem.style.backgroundColor = "red";
// navitem.style.color = "white";
// })

// nodelist COLLECTIONS
// they are like arrays but not completely arrays  

// let navlinksEl = document.querySelectorAll(".nav-link");//Node list
// simple forloop
// for(let i=0; i<navlinksEl.length; i++){
// // console.log(navlinksEl[i]);
// const navitem = navlinksEl[i];
// navitem.style.backgroundColor = "black";
// navitem.style.color = "white"
// }

// for of loop
// for(let navitem of navlinksEl){
// navitem.style.backgroundColor = "red";
// navitem.style.color = "white";
// }

// foreachloop// this will  work in Nodelist
// navlinksEl.forEach((navitem)=>{
// navitem.style.backgroundColor = "red";
// navitem.style.color = "white";
// })

// 6 innerHTML

// let navitemsEl = document.querySelector(".nav-items");
// // console.log(navitemsEl.innerHTML);
// navitemsEl.innerHTML ="<h1>hello iam change</h1>"
// // console.log(navitemsEl.innerHTML);
// navitemsEl.innerHTML += "<button>learnmore</button>"
// console.log(navitemsEl.innerHTML);

// console.log(navitemsEl.textContent);
// console.log(navitemsEl.inertext);


