 // Dom tree structure or dom traversing -->
 // Document(rootnode) -->
//  <html> <!--rootelement or childnode of document-->
// <head><!--childnode of html in this line spaces called text node which is also childnode of html-->
// <title>Dom traversing</title><!--childn of head-->
// <script></script><!--childnofhead-->
// </head>
// <body><!--textnode--child node of body-->
// <div class="container"><!--childn of body--->
//     <h1>My heading</h1><!--grandchildofbodyorchildofcontainerdiv--->
//     <p>Some useful information</p><!--grandchildofbodyorchildofcontainerdiv--->
// </div>


// <script src="script2.js"></script>
// </body>
// </html>  

// const rootNode = document.getRootNode();
// console.log(rootNode);//which id dom
// console.log(rootNode.childNodes);//which is html 
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);//which is html 
// console.log(htmlElementNode.childNodes);//which is child of html includng textnode or spaces after html
// console.log(htmlElementNode.childNodes[2]);
// console.log(htmlElementNode.parentNode);//which is parnt of html
// const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode.nextSibling);//nextsibling of html which is text
// console.log(headElementNode.nextSibling.nextSibling);//nextsibling of html which  is body
// console.log(headElementNode.nextElementSibling);//nextElementsibling of html which is body 

// sibling relation
// let h1 = document.querySelector("h1");
// let parnt = h1.parentNode;
// parnt.style.backgroundColor = "red";

let headEl = document.querySelector("head");
// let childEl = headEl.childNodes[1];
let childEl = headEl.querySelector("title");
console.log(childEl.childNodes);