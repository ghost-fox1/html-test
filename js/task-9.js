function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let number1 = prompt('Введите первое число : ');
    let number2 = prompt('Введите второе число : ');

    if (number1 > number2) {
        print('БОЛЬШЕ');
    } else if (number2 > number1) {
        print('МЕНЬШЕ');
    } else {
        print('РАВНО');
    }
}