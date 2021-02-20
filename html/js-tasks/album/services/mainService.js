let imgService = new ImgService();

//обработчик события нажатия на кнопку "добавить картинку"
function addImg()
{
    let src = prompt('Введите ссылку на изображение: ');
    imgService.addImg(src);
}

imgService.drawAllImgs();