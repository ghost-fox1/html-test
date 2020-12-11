function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let x= prompt('Введите первое число x : ');
    let y = prompt('Введите второе число y : ');
    let chast1 = (1 - Math.tan(x));
    // let umn = 0;
    let ctg = Math.cos(x) / Math.sin(x);
    let perCos = Math.cos(xPer-yPer);
    let umn = Math.pow(chast1, ctg) + perCos;
    print(umn);
}

// window.onload = function () {
//     let x = prompt('Введите первое число x : ');
//     let y = prompt('Введите второе число y : ');
//     let chast1 = (1 - Math.tan(x));
//     let umn = 0;
//     let ctg = Math.cos(x) / Math.sin(x);
//     let perCos = Math.cos(x-y);
//     for (let i =0; i<= ctg; i++ ) {
//         chast1*=chast1;
//         umn = chast1;
//     }
//     let formula9 = Math.floor(umn + perCos);
//     print(formula9);
// }