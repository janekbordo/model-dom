'use strict';

let firstLink = document.querySelector('#parFirst .link');

console.log(firstLink);

//parent element

console.log(firstLink.parentElement);

//parent node
console.log(firstLink.parentNode);

let parFirst = document.getElementById('parFirst');

//child node
console.log(parFirst.childNodes);

//children - elementy html

console.log(parFirst.children);

//previous node sibling 

console.log(firstLink.previousSibling);

//previous element sibling

console.log(firstLink.previousElementSibling);

//next element sibling

console.log(firstLink.nextElementSibling);

