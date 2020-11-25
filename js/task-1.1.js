function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {

    let num = 19819;
    let num1 = Math.floor(num / 10000);
    print(num1);
    let num2 = (num % 10000);
    num2 = Math.floor(num2 / 1000);
    print(num2);
    let num3 = (num % 1000);
    num3 = Math.floor(num3 / 100);
    print(num3);
    let num4 = (num % 100);
    num4 = Math.floor(num4 / 10);
    print(num4);
    let num5 = (num % 10);
    num5 = Math.floor(num5 / 1);
    print(num5);

    // let num = 19819;
    // let num5 = (num % 10);
    // num5 = Math.floor(num5 / 1);
    // print(num5);
    // let num4 = (num % 100);
    // num4 = Math.floor(num4 / 10);
    // print(num4);
    // let num3 = (num % 1000);
    // num3 = Math.floor(num3 / 100);
    // print(num3);
    // let num2 = (num % 10000);
    // num2 = Math.floor(num2 / 1000);
    // print(num2);
    // let num1 = Math.floor(num / 10000);
    // print(num1);
}