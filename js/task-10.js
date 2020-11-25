function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let numbe1 = prompt('Введите первое число : ');
    let numbe2 = prompt('Введите второе число : ');
    let numbe3 = prompt('Введите третье число : ');
    print('Введите первое число : '+ numbe1);
    print('Введите второе число : '+ numbe2);
    print('Введите третье число : '+ numbe3);

    if (numbe1 == numbe2 || numbe1 == numbe3 || numbe2==numbe3) {
        numbe1 += 5;
        numbe2 += 5;
        numbe3 += 5;
        print('1 число = ' + numbe1);
        print('2 число = ' + numbe2);
        print('3 число = ' + numbe3);
    } else{
        print('равных нет')
    }

}