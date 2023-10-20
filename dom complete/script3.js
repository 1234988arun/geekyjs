let containerEl = document.querySelector(".section-todo");
console.log(containerEl.classList);///classlist contains dom tokenlist which can extend the functanilty of containerel
containerEl.classList.add('bg-dark');
// containerEl.classList.remove('heading1');
// let ans = containerEl.classList.contains("section-todo");
// console.log(ans);
// containerEl.classList.toggle("bg-dark");
// containerEl.classList.toggle("bg-dark");


// innerHTML
let todoEl = document.querySelector(".todo-list");
// console.log(todoEl);
// creating new li inside todolist(ul)
todoEl.innerHTML = todoEl.innerHTML+ "<li>New Todo</li>"
todoEl.innerHTML += "<li>New Todo2</li>"
