function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let numbeR = prompt('Введите число: ');
    let numberStep = prompt('Введите число для возведения в степень: ');
    let result = 1;
    for (let i = 0; i < numberStep; i++) {
        result *= numbeR;
    }
    print(result);
}