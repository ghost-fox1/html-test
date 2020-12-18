function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let dlinaOt = prompt('Введите  длину отверстия : ');
    let visOt = prompt('Введите высоту отверстия : ');
    let dlinaKir = prompt('Введите длину кирпича : ');
    let visKir = prompt('Введите  высоту кирпича: ');
    let shirKir = prompt('Введите ширину кирпича: ');
    print('Введите  длину отверстия : '+ dlinaOt);
    print('Введите высоту отверстия: '+ visOt);
    print('Введите длину кирпича : '+ dlinaKir);
    print('Введите высоту кирпича : '+ visKir);
    print('Введите ширину кирпича : '+ shirKir);

    if ((shirKir <= dlinaOt &&  visKir<= visOt) || (shirKir <= visOt &&  visKir <= dlinaOt) || ( dlinaKir <= dlinaOt &&  visKir <= visOt) || ( visKir <= dlinaOt  &&  dlinaKir <= visOt) ||
    ( dlinaOt >= shirKir  &&  visOt >= dlinaKir) || ( dlinaOt >= dlinaKir  &&  visOt >= shirKir)) {
        print('совпадает');
    } else{
        print('равных нет')
    }
}
// window.onload = function () {
//     let dh = prompt('Введите  длину отверстия : ');
//     let lh = prompt('Введите высоту отверстия : ');
//     let l = prompt('Введите длину кирпича : ');
//     let h = prompt('Введите  высоту кирпича: ');
//     let w = prompt('Введите ширину кирпича: ');
//     // let dlinaOt = 15;
//     // let visOt = 15;
//     // let dlinaKir = 7;
//     // let visKir = 7;
//     // let shirKir = 7;
//     print('Введите  длину отверстия : '+ dh);
//     print('Введите высоту отверстия: '+ lh);
//     print('Введите длину кирпича : '+ l);
//     print('Введите высоту кирпича : '+ h);
//     print('Введите ширину кирпича : '+ w);
//
//     if ((w <= dh &&  h<= lh M)
//         || (w <= lh &&  h <= dh M) ||
//     ( l <= dh &&  h <= lh M) || ( h <= dh  &&  l <= lh M) ||
//     ((dh >= w && lh >= l) || (dh >= l && lh >= w))) {
//         print('совпадает');
//     } else{
//         print('равных нет')
//     }
// }