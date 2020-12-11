function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let x = prompt('Введите второе число X: ');
    let y = prompt('Введите второе число Y: ');
    // if (x != 0 && y != 0) {
    //     if (x > 0 && y > 0) {
    //         print('I четверть');
    //     }
    //     if (x < 0 && y > 0) {
    //         print('II четверть');
    //     }
    //     if (x < 0 && y < 0) {
    //         print('III четверть');
    //     }
    //     if (x > 0 && y < 0) {
    //         print('IV четверть');
    //     }
    // }

    switch (true) {
        case (x > 0 && y > 0):
            alert('I четверть');
            break;
        case (x < 0 && y > 0):
            alert('II четверть');
            break;
        case (x < 0 && y < 0):
            alert('III четверть');
            break;
        case (x > 0 && y < 0):
            alert('IV четверть');
            break;
        default:
            alert("Нет таких значений");
    }
}