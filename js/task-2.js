function print(str) {
    document.getElementById("content").innerHTML += str + '<br>';
}

window.onload = function () {

    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            print('FizzBuzz');
        } else {
            if (i % 3 === 0) {
                // print(regina)
                print('Fizz');
            } else {
                if (i % 5 === 0) {
                    print('Buzz');
                } else {
                    print(i);
                }
            }
        }
    }
}

window.onload = function () {
    for (let i = 1; i <= 100; i++) {
        let str = '';

        if (i % 3 === 0) {
            str += 'Fizz';
        }

        if (i % 5 === 0) {
            str += 'Buzz';
        }

        if ( str === '') {
            str = i;
        }

        print(str);
    }
}