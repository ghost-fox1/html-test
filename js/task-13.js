function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let perNumber = prompt('Введите число не большее 99: ');

    if((perNumber % 10) > Math.floor(perNumber/10)){
        print((perNumber % 10) + ' большая цифра');
        print(Math.floor(perNumber / 10) + ' меньшая цифра');
    } else if((perNumber % 10) < Math.floor(perNumber/10)){
        print(Math.floor(perNumber / 10) + ' большая цифра');
        print((perNumber % 10) + ' меньшая цифра');
    } else {
        print('Цифры равны');
    }
}
