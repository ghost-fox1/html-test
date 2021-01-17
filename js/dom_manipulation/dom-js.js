// alert('Hello Albert');

let _body = document.body;
// _body= 'hunjmik';
_body.append('<h1>HELLO</h1>');
// document.body.append('<h1>HELLO</h1>');

// innerText все добавляет как текст
let h2A = document.createElement("h2");
h2A.innerText = "<div>hello, regina</div>";

//innerHTML все добавляет как HTML тег
let divAAAA = document.createElement('div');
divAAAA.innerHTML = "<h2>Hy</h2>";

//appendChild  добавляет все на страницу браузера
_body.appendChild(divAAAA);
_body.appendChild(h2A);

let h3A = document.createElement("h3");
h3A.innerText = "DERTY";
divAAAA.appendChild(h3A);

let divBBBB = document.createElement("div");
divBBBB.setAttribute('style', 'color: blue');
divBBBB.setAttribute('regina', 'albert');
divBBBB.innerText = " Фиалки синие";
_body.appendChild(divBBBB);

let divCCCC = document.createElement('div');
let _style = document.createAttribute('style');
_style.value = 'color: red';
divCCCC.setAttributeNode(_style);
divCCCC.setAttribute('class', 'test');
divCCCC.innerText = ' Розы красные';
_body.appendChild(divCCCC);


let divDDDD = document.createElement('div');
divDDDD.innerText = 'for You';
_style2 = _style.cloneNode();
divDDDD.setAttributeNode(_style2);
_body.appendChild(divDDDD);

// console.log(_style.cloneNode());

_style.value = 'color: green';

let pedro = document.querySelector('div[regina]');
pedro.setAttribute('class', 'test');
console.log(document.querySelectorAll('div'));

// let classTest = document.querySelectorAll('div.test');
// classTest.forEach(function (item) {
//     // console.log(item);
//         item.innerText = 'DERTYUU';
//     // item = 'v ghbjn';
//     });
let burret = document.querySelectorAll('div');
burret.forEach(
    function (item){
        let padre = document.createElement('h4');
        padre.innerText = 'Pedro';
        item.appendChild(padre);
    }
);

