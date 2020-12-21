function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    // let posl = [];
    // for (let i=0; i< 100;i++){
    //     let number1 = prompt('Введите последовательность : ');
    //     posl[i] = number1;
    // }
    // let number2 = prompt('Введите порядковый номер : ');
    // print(posl[number2]);
    let number1 = prompt('Введите последовательность : ');
    let number2 = prompt('Введите порядковый номер : ');
    print(number1[number2]);
}