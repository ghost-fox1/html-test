function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let quantityX = prompt('Введите  количество  X : ');
    let XuArr = [];
    for (let i = 0; i < quantityX; i++) {
        let perZ = prompt('Введите переменную  Z : ');
        let perB = prompt('Введите переменную  B : ');
        let perA = prompt('Введите переменную  A : ');
        let perBetta = prompt('Введите переменную  Betta : ');
        let na = perZ * perZ * perZ - perB + perA * perA / (Math.tan(perBetta) * Math.tan(perBetta));
        // print(na);
        XuArr.push(na);
    }

    let sum = 0;
    XuArr.forEach(item => sum += item);
    console.log(XuArr);
    print(sum);
}
