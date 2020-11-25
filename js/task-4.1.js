function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {
    let metr = prompt('Введите количество метров');
    let kilohmetr = (metr / 1000);
    if (metr == 1) {
        print( metr  + ' метров будет ' + kilohmetr + ' километра ');
    }
    if (metr >1 && metr<=4) {
        print( metr  + ' метра будет ' + kilohmetr + ' километра ');
    }
    if (metr >=5 && metr <1000) {
        print( metr  + ' метров будет ' + kilohmetr + ' километра ');
    }
    if (metr == 1000) {
        print( metr  + ' метров будет ' + kilohmetr + ' километра ');
    }
    if (metr>1000 && metr<=4900) {
        print( metr  + ' метров будет ' + kilohmetr + ' километра ');
    }
    if (metr >=5000) {
        print( metr  + ' метров будет ' + kilohmetr + ' километров ');
    }
    console.log(kilohmetr);
}