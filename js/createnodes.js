'use strict';

let btn = document.createElement('button');
console.log(btn);

let btnText = document.createTextNode('kliknij mnie');

console.log(btnText);

let btnAttr = document.createAttribute('id');
console.log(btnAttr);


//ustawiamy wartosc dla wezla atrybutu

btnAttr.value = 'btn';

//appendChild - dodaje nowy wezel na koniec wezla

btn.appendChild(btnText);

//dodaje wezel atrybutu do dnego wezla

btn.setAttributeNode(btnAttr);

//insert before

let parFirst = document.getElementById('parFirst');

parFirst.insertBefore(btn, document.querySelector('#parFirst .link'));

//dopinamy element btn do body
//document.body.appendChild(btn);

//budujemy nowy paragraf, nowy textnode z tekstem dla paragrafu, dopinam tekst do paragrafu i nadajemy mu atrybut klasy z wartoscia paragraf
let par = document.createElement('p');
let parText = document.createTextNode('lorem ipsum dolor sit amet.');
par.appendChild(parText);
par.setAttribute('class','paragraph')

console.log(par);

document.getElementById('parSecond').insertBefore(par, document.querySelector('#parSecond p'));


//usuwanie

//document.getElementById('button').removeAttributeNode(btnAttr);

document.getElementById('parFirst').removeChild(btn);

//stworz nowy paragraf i za pomoca innertext dodaj mu tekst ''
let nowypar = document.createElement('p');

parFirst.appendChild(nowypar);

nowypar.innerText = "nowoutworzony paragraf";

console.log(nowypar);

console.log(parFirst.innerText);
console.log(parFirst.outerHTML);

parFirst.outerHTML = '<section id="parFirst"><p>lorem ipsum dolor</p></section>';

let link3 = document.getElementById('link_3');

link3.setAttribute('href', 'http://google.com');


console.log(document.getElementById('classList').className);
document.getElementById('classList').className = 'klasa1 klasa2';

console.log(document.getElementById('classList').classList);
document.getElementById('classList').classList.add('klasa_dodana');
document.getElementById('classList').classList.remove('klasa2');

link3.style.color = 'red';
link3.style.fontSize = '30px';


