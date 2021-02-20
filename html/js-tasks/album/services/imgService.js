class ImgService
{
    repository;

    constructor() {
        this.repository = new ImgRepository();
    }

    createImg(src)
    {
        return new Img(src);
    }

    getGallery()
    {
        return document.querySelector('div.gallery');
    }

    addImgToGallery(img)
    {
        let imgNode = img.render();
        imgNode.classList.add('img-mini');

        this.getGallery().appendChild(imgNode);
    }

    addImg(src)
    {
        let img = this.createImg(src);
        this.addImgToGallery(img);
        this.repository.save(img);
    }

    drawAllImgs(){
        let imgs = this.repository.loadAll();
        let me = this;

        imgs.forEach(function (img){
            me.addImgToGallery(img)
        });
    }
}

//заметка
// let service = new ImgService();
// let img = service.createImg('vfgybhunj');
// service.addImgToGallery(img);