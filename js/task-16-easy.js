function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {

    let perZ = prompt('Введите переменную  Z : ');
    var a = '#'
    var n = '+';
    for (var i = 0; i < perZ; i++) {
        print(n);
        n = n+a;
    }
    for (var j = perZ/2; j > 0; j--) {
        print(n);
        n = n+a;
    }
}