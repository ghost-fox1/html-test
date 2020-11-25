function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let cuh = prompt('Введите число');
    for (let i = 0; i < 10; i++) {
        let picture = String.fromCharCode(cuh);
        print(picture);
    }
}