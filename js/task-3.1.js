function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {
    let bukvi = prompt('Введи букву с маленькой буквы');
    document.write(bukvi.toUpperCase())
    console.log(bukvi.toUpperCase());
}