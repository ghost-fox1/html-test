function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {

    // print('##');
    // print('###');
    // print('####');
    // print('#####');
    // print('######');
    // print('#######');
    let albert = ' '
    let regina = '#';
    let str = '';
    for (let i = 1; i <= 4; i++) {
        for (let i = 0; i < 4; i++) {
            str += '#';
            str += albert;
        }
        print(str);
        str = '';
        for (let i = 0; i < 4; i++) {
            str += albert;
            str += '#';
        }
        print(str);
        str = '';
    }
}
