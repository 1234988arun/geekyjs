// document.createElement{}
// append
// prepend
// remove

// let todoEl = document.querySelector(".todo-list");
// console.log(todoEl);
// let newtodoItem = document.createElement("li");
// console.log(newtodoItem);
// newtodoItem.innerHTML="main lata hoon";
// console.log(newtodoItem);
// newtodoItem.style.background="black";
// newtodoItem.style.color="white";
// newtodoItem.style.fontSize="25px";
// todoEl.appendChild(newtodoItem);
// or
// todoEl.append(newtodoItem);//last main jodta hai
// todoEl.prepend(newtodoItem);//prepend first main jodta hai

// remove
// todoEl.remove();//remove all inside todoEl
// let todolistli = document.querySelector(".todo-list-li");
// todolistli.remove();remove only one li 

// before&after
// let todoEl = document.querySelector(".todo-list");
// let newtodoli = document.createElement("li");
// // console.log(newtodoli);
// newtodoli.textContent ="hello iam creating by js";
// newtodoli.style.background ="black";
// newtodoli.style.color="white";
// newtodoli.style.padding="20px";
// newtodoli.fontSize="50px";
// todoEl.before(newtodoli);//creating before todoel
// todoEl.after(newtodoli);//creating after todel
//note only ek time pe ya before add hoga ya to after
// console.log(newtodoli);

// how to get the dimensions of element

let todoEl = document.querySelector(".todo-list");
// let todoInfo = todoEl.getBoundingClientRect().height;
// let todoInfo = todoEl.getBoundingClientRect().width;
// let todoInfo = todoEl.getBoundingClientRect().top;
// console.log(todoInfo);

