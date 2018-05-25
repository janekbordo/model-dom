'use strict';

//poprzez id
let parFirst = document.getElementById('parFirst');

console.log(parFirst);
//poprzez klase 
let links = document.getElementsByClassName('link');

console.log(links);

//poprzez znacznik
let anchors = document.getElementsByTagName('a');
console.log(anchors);

//poprzez query selector

let parSecond = document.querySelector('#parSecond');

console.log(parSecond);

//wypisanie wszystkich trafien wedle selektora
let paragrafy = document.querySelectorAll('div p');

console.log(paragrafy);

