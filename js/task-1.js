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
    var albert = '#'
    var regina = albert;

    for (var i = 0; i < 7; i++) {
        print(regina);
        regina = regina+albert;
    }
}