function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {
    let perZ = 1;
    let minX = -1.1;
    let maxX = 0.3;
    let shag = 0.2;
    let Pi = 3.1415;
    for(let i = minX; i < maxX; i+= shag) {
        let  temp = 1;
        for (let m = 1; m <= 5; m++) {
                let  temp1 = i ** m * (Math.sin(i*m) ** m);
                let z = temp * temp1;
                print(z);
            print(i);
        }


        // for (let m = 1; m <= 5; m++) {
        //     let perZetter= perZ * (minX * Math.sin((minX * m * Pi)/ 180));
        //     perZ = perZetter;
        //     print(perZ);
        //     print(m  +'это m для вычислений' + '<br>');
        // }
        // print(i + 'это x для вычислений' + '<br>');
        // print('Conet');
    }
}
