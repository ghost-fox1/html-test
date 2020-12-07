function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let perV = prompt('Введите начальную скорость (V): ');
    let perT = prompt('Введите время: (T): ');
    let perg = 9.8;
    let pi = 3.14;
    let formula = (Math.asin((perg * perT) / (2 * perV)) * 180)/ pi;
    print(formula);
}