function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {

    function min(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }

    console.log(min(0, 10));


    function max(a, b) {
        if (a > b) {
            return b;
        } else {
            return a;
        }
    }

    console.log(min(0, -10));
}