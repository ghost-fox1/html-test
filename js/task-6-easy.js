function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let day = prompt('Введите  номер от 1 до 7: ');
     let Mitty = day;

    switch (Mitty) {
        case '1':
            print("1 : Понедельник");
            break;
        case '2':
            print("2 : Вторник");
            break;
        case '3':
            print("3 : Среда");
            break;
        case '4':
            print("4: Четверг");
            break;
        case '5':
            print("5 : Пятница");
            break;
        case '6':
            print("6 : Суббота");
            break;
        case '7':
            print("7 : Воскресенье");
            break;
        default:
            print("Ошибка");
            return 0;
    }
}
//Но для case 1 , результат выполнения prompt будет строка "3", которая не соответствует строгому равенству === с числом 3. Таким образом, мы имеем «мёртвый код» в case 3! Выполнится вариант default.