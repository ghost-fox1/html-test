function print(str) {
    document.getElementById("content").innerHTML +=  str + '<br>';
}
window.onload = function () {
    let numbeR1 = prompt('Введите трехзначное число : ');
    num6 = Math.floor(numbeR1 / 100);
    let num4 = (numbeR1% 100);
    num4 = Math.floor(num4 / 10);
    let num5 = (numbeR1 % 10);
    if(numbeR1<99 || numbeR1>1000 || numbeR1==1000 || numbeR1==99){
        print('Вы ввели неверное число. Число должно быть трехзначным');
    }else{
        if(num6==num4 || num6==num5 || num4==num5){
            print('Среди цифр введенного трехзначного числа' + numbeR1 + 'есть одинаковые');
        }
    }
}