function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let perN = prompt('Введите N : ');
    let perK = prompt('Введите степень к: ');
    let sum = 0;
    for(let i = 1; i <= perN; i++){
        sum = (sum + i) ** perK;
        print(sum);
    }
}
