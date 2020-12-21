function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {

    let  rombV = prompt('Введите  высоту ромба : ');
    let row1 = '';

    for (let i = rombV; i > 0; i--) {
        row1 = row(i) + '#';

        if (i != rombV) {
            row1 += row((rombV - i) * 2 -1) + '#';
        }

        print(row1);
    }
    for (i = 0; i <= rombV; i++) {
        row1 = row(i) + '#';

        if (i != rombV) {
            console.log(i, rombV);
            row1 += row((rombV - i) * 2 -1) + '#';
        }

        print(row1);
    }
    function row(length)
    {
        let albert = ' '
        let regina = ''

        for (let i = 0; i < length; i++) {
            regina = regina+albert;
        }

        return regina;
    }




    // function fn(n){
    //     for(var i=1; i<=n; i++){
    //         var str='';
    //         for(var j=n-i; j>0; j--){
    //             str+=' ';
    //         }
    //         for(var j=1; j<=i*2-1; j++){
    //             str+='*';
    //         }
    //         print(str);
    //     }
    //     for (var i=2; i<=n; i++){
    //         var str='';
    //         for (var j=0; j<i-1; j++){
    //             str+=' ';
    //         }
    //         for (var j=(n-i)*2+1; j>0; j--){
    //             str+='*';
    //         }
    //         print(str);
    //     }
    // }
    // fn(rombV);
}