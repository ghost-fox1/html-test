function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let quantityX = prompt('Введите число : ');
    let base = 16;
    print('Шестнадцатеричная форма записи числа' + ' ' + quantityX + ':' +  ' ' + (parseInt(quantityX, 10).toString(16)));
}