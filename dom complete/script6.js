// keypresevent
// const bodyEl = document.body;

// bodyEl.addEventListener('keypress',(e)=>{
// // console.log(e);
// // console.log(e.key);
// })
// mousevent
// mouseover//mouseleave why not working


let btnEl = document.querySelector('button');
btnEl.addEventListener('mouseover',()=>{
console.log('mouseover');
})
btnEl.addEventListener('mouseleave',()=>{
console.log('mouseleave');
})