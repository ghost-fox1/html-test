function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {
        let text = 'последовательная обработка\n символов\nстроки в С++\nпрограммирование на С++\nколичество строк#' ;
        let stru = 0;
        for (let i = 0; i< 100; i++ ) {
            if (text.charAt(i) == '\n') {
                stru++; // инкремент счётчика строк
            }
        }
        print("Количество новых строк = " + stru);
}