//Задача под номером 1 https://htmldom.dev/add-or-remove-class-from-an-element/
// Добавить класс к элементу
// let test = document.createElement('div');
// test.className = ('new_class');
// test.setAttribute('class', 'name-class');
// console.log(test.className);
//
// ele.classList.add ('имя-класса');
//
// // Добавить несколько классов (не поддерживается в IE 11)
// ele.classList.add ('другой', 'класс', 'имя');

//Задача под номером 5 https://htmldom.dev/add-or-remove-class-from-an-element/ https://learn.javascript.ru/introduction-browser-events
//Присоединить или отсоединить обработчик событий

// var div = document.getElementById('div');
// // var listener = function () {
// //     console.log('работает');
// // };
// // div.addEventListener('click', listener);
// // div.removeEventListener('click', listener);
// const handler = function() {
// console.log('jjjjjj');
// };
//
// // Attach handler to the `click` event
// elem.addEventListener('click', handler);
//
// // Detach the handler from the `click` event
// elem.removeEventListener('click', handler);



//Задача под номером 6 . Вычислить положение мыши относительно элемента

// window.addEventListener('click', function(e) {
//     alert('screen: ' + e.screenX + 'x' + e.screenY + '\npage: ' + e.pageX + 'x' + e.pageY + '\nclient: ' + e.clientX + 'x' + e.clientY);
// }, false);
//
// //Решение
// ele.addEventListener('mousedown', function(e) {
//     // Get the target
//     const target = e.target;
//
//     // Get the bounding rectangle of target
//     const rect = target.getBoundingClientRect();
//
//     // Mouse position
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
// });


//Задача под номером 9 .Проверить элемент на селектор

// const elements1 = document.querySelectorAll('css_selector');
// element.matches(selector);
// //Решение
// const matches = function(ele, selector) {
//     return (
//         ele.matches ||
//         ele.matchesSelector ||
//         ele.msMatchesSelector ||
//         ele.mozMatchesSelector ||
//         ele.webkitMatchesSelector ||
//         ele.oMatchesSelector
//     ).call(ele, selector);
// };

//Задача под номером 10 .Проверить, имеет ли элемент данный класс

// let sort = document.querySelector('.elem1');
// if(sort === elem.className){
//     console.log(elem.className);
// }
//
// if(elem.matches('.elem1') === true){
//     console.log('Получилось');
// }
//Решение
// ele.classList.contains('class-name');