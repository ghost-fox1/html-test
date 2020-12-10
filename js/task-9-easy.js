function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let massiv = [];
    let leightMassiv = prompt('Введите длину массива : ');
    let summa = 0;
    let kvadtat = 0;
    for (let i = 0; i < leightMassiv; i++) {
        massiv.push(Math.floor(Math.random() * 10));
        if (Math.abs(massiv[i]) > 2.5) {
            kvadtat = massiv[i] * massiv[i]; // n ** k
            summa += kvadtat;
        }
    }
    print(massiv + 'gotovo');
    print(summa + 'это сумма');

}
