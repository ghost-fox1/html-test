function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let numberU = prompt('Введите X: ');
    let numberI = prompt('Введите Y: ');
    let numberO = prompt('Введите Z: ');
    let resultVector = Math.sqrt((numberU * numberU) + (numberI * numberI) + (numberO * numberO));
    print(resultVector);
}