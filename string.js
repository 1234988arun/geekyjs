// <!-- JavaScript objects cannot be compared. -->
// <!-- String Length -->
// <!-- let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length; -->
// <!-- stringmethod -->
// <!-- String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split() -->

// <!-- There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length) -->

// <!-- slice method -->
// <!-- let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,13);//strt from 7 and end at 12 ,13 not included
// document.getElementById("demo").innerHTML = part;  ans banana-- end part not included>
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);
// document.getElementById("demo").innerHTML = part; ans banana kiwi

// <!-- JavaScript String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring(). -->

// <!-- let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substring(7,13);  simple substring strt from 1-->

// <!-- Replacing String Content 
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools")
// this replace only one text to replace all the test use 
// In 2021, JavaScript introduced the string method replaceAll():
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// console.log(text);

// A string is converted to upper case with toUpperCase():
// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// A string is converted to lower case with toLowerCase():
// let text1 = "Hello World!";
// let text2 = text1.toLowerCase();

// The trim() method removes whitespace from both sides of a string:

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// ECMAScript 2019 added the String method trimStart() to JavaScript.

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.trimEnd() method works like trim(), but removes whitespace only from the end of a string
// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// let text2 = text1.trimStart();


// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// charAt(position)
// var text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charAt(0);

// charCodeAt(position)
// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charCodeAt(0);
// -->
// <!-- Property access [ ] -->
// <!-- ECMAScript 5 (2009) allows property access [ ] on strings: -->
// <!-- let text = "HELLO WORLD";
// let char = text[0]; -->

// <!-- Converting a String to an Array
// String split() -->
// <!-- text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|") -->
// <!-- let text = "a,b,c,d,e,f";
// const myArray = text.split("");
// document.getElementById("demo").innerHTML = myArray[0]; -->

// <!-- reammaining part strings search -->
// -->



