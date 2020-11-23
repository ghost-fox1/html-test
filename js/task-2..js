function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {
    let a = prompt('Введи число a');
    let b = prompt('Введи число b');
    let f = prompt('Введи число f');
    console.log(a, b, f);
    let summ = (a + b - f / a) + f * a * a - (a + b);
    print(summ);
}