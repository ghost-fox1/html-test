function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let quantityX = prompt('Введите  количество  X : ');
    let XuiArr = [];
    for (let i = 0; i < quantityX; i++) {
        let perZ = prompt('Введите переменную  Z : ');
        let perB = prompt('Введите переменную  B : ');
        let perA = prompt('Введите переменную  A : ');
        let perBetta = prompt('Введите переменную  Betta : ');
        let naX = perZ * perZ * perZ - perB + perA * perA / (Math.tan(perBetta) * Math.tan(perBetta));
        // print(naX);
        XuiArr.push(naX);
    }

    let sum = 0;
    XuiArr.forEach(item => sum += item);
    console.log(XuiArr);
    print(sum);
}
