//отображение
class Img {
    /** это глобальный src к нему доступ через this **/
    src;

    constructor(src) {
        this.src = src;
    }

    render()
    {
        let src = document.createAttribute('src');
        src.value = this.src; /** это глобальный src к нему доступ через this **/

        let img = document.createElement("img");
        img.setAttributeNode(src);

        return img;
    }
}

// если бы конструктора не было, то пришлось бы делать так
// let img = new Img();
// img.src = 'asads';
// img.render();
