function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

/**
 *
 * @param str строка которая дополняется символом char
 * @param char символ, которым хотим дополнить
 * @param max до какой длинны хотим дополнить
 * @returns {*}
 */
function prepare(str, char, max) {
    while (str.length < max) {
        str += char;
    }
    return str;
}

window.onload = function () {
    let nameSt = prompt('Введите имя студента: ');
    let surNameSt = prompt('Введите фамилию студента: ');
    let otcNameSt = prompt('Введите отчество студента: ');
    let numberNameSt = prompt('Введите номер группы студента: ');

    let border1 = '*';
    let border2 = 'Лаборатоная работа №1';
    let border3 = 'Выполнил(а): ст. гр. ЗИ-123';
    let border4 = nameSt + surNameSt + otcNameSt;

    let borderMinLength = (border2.length > border3.length) ? border2.length : border3.length;
    let finBorder = (borderMinLength < border4.length) ? border4.length : borderMinLength;

    // let borderMinLength = border2.length;
    // if (border2.length > border3.length) {
    //     borderMinLength = border3.length;
    // }
    // let finBorder = borderMinLength;
    // if (borderMinLength < border4.length) {
    //     finBorder = border4.length;
    // }

    // while (border2.length < finBorder) {
    //     border2 += ' ';
    // }
    // while (border3.length < finBorder) {
    //     border3 += ' ';
    // }
    // while (border4.length < finBorder) {
    //     border4 += ' ';
    // }
    //
    // while (border1.length < finBorder) {
    //     border1 += '*';
    // }

    border1 = prepare(border1, '*', finBorder);
    border2 = prepare(border2, ' ', finBorder);
    border3 = prepare(border3, ' ', finBorder);
    border4 = prepare(border4, ' ', finBorder);

    print('Введите имя студента:' + nameSt);
    print('Введите фамилию студента:' + surNameSt);
    print('Введите отчество студента:' + otcNameSt);
    print('Введите номер группы студента:' + numberNameSt);
    print('*' + border1);
    print('* ' + border2 + ' *');
    print('* ' + border3 + ' *');
    print('* ' + border4 + ' *');
    print('*' + border1);
}