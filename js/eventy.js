'use strict';

document.addEventListener('DOMContentLoaded', function () {
    //    console.log('123');

    //    linksHover();
    ////    changeBodyBG();
    //    writeInputOutput();
    //    document.removeEventListener('keypress',changeBodyBG);
    //    googleClick();
    //    changeBgClick();
    //    UstawTlo();
    //    getFormData();
    zgodyAll();
    validate();
});
//
//function linksHover() {
//    let links = document.getElementsByTagName('a');
//    console.log(links);
//
//    for (let i = 0; i < links.length; i++) {
//
//        links[i].addEventListener('mouseover', function () {
//            this.style.color = 'red';
//            console.log('jestem nad linkiem z indeksem: [' + i + ']');
//        })
//
//        links[i].addEventListener('mouseout', function () {
//            this.style.color = 'black';
//            console.log('jestem nad linkiem z indeksem: [' + i + ']')
//        })
//    }
//}
//
//
//function changeBodyBG() {
//    document.body.style.backgroundColor = 'green';
//};
//
//document.addEventListener('keypress', changeBodyBG);
////document.removeEventListener('keypress',changeBodyBG);
//
//
//function writeInputOutput() {
//    let inputs = document.querySelectorAll('#form input');
//    for (let i = 0; i < inputs.length; i++) {
//        inputs[i].addEventListener('change', function () {
//            document.getElementById('wynik').innerHTML += this.value + ' ';
//        })
//    }
//
//}
//
//
//function googleClick(){
//    document.getElementById('google').addEventListener('click', function(e){
//        e.preventDefault();
//        e.stopPropagation();
//    })
//}
//
//
//function changeBgClick(){
//    document.body.addEventListener('click', function(){
//      this.style.backgroundColor = 'red';
//    })
//}

//
//function UstawTlo(){
//    
//    let pars = document.getElementsByTagName('p');
//    
//    document.querySelector('#paragraphs button').addEventListener('click',function(){
//        console.log(pars);
//        pars[0].style.backgroundColor = 'red';
//        pars[1].style.backgroundColor = 'yellow';
//    })
//}
//
//
//function getFormData(){
//    document.getElementById('formularz').addEventListener('click', function(e){
//       e.preventDefault();
//        console.log(this.fname.value);
//        console.log(this.lname.value);
////        console.log(document.getElementById('formularz').lname.value);
//    })
//}

console.log(document.getElementsByName('zgody-all'));
console.log(document.querySelectorAll('input[type="checkbox"]'));

function zgodyAll() {

    let zgody3 = document.getElementById('zgody-all');

    zgody3.addEventListener('change', function () {
        //        if (zgody3.checked) {
        //            document.querySelectorAll('input[type="checkbox"]').checked == true;
        //        }
        document.getElementById('zgoda-marketingowa-1').checked = this.checked;
        document.getElementById('zgoda-marketingowa-2').checked = this.checked;
        document.getElementById('zgoda-marketingowa-1').disabled = this.checked;
        document.getElementById('zgoda-marketingowa-2').disabled = this.checked;
    });
}

function validate(e) {
    let zgoda1 = document.getElementById('zgoda-1');
    let name = document.getElementsByName('name');
    let mail = document.getElementsByTagName('input[type="email"]');
    let send = document.getElementById('submit');
    let msg = document.getElementsByTagName('ul');
    let checkboxes = document.querySelectorAll('input[type="checkbox]');

    if (name.value == '') {
        e.preventDefault;
        let alert1 = document.createElement('li');
        alert1.innerHTML = 'uzupelnij imie i nazwisko';
        msg.appendChild(alert1);
    }

    if (mail.value == '') {
        e.preventDefault;
        let alert2 = document.createElement('li');
        alert2.innerHTML = 'uzupelnij e-mail';
        msg.appendChild(alert2);
    }


for (let i = 0; i < checkboxes.length - 1; )

    send.addEventListener('click', validate)

}
