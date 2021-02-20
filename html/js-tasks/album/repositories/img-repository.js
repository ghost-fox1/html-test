class ImgRepository{
    key = 'imgs';

    save(img)
    {
        //выгрузить все изображения
        //добавить имг к ним
        //сохранить все изображения
        let img1 = this.loadAll();
        img1.push(img);
        localStorage.setItem(this.key, JSON.stringify(img1));
        return this;
    }

    load(){}

    loadAll()
    {
        let imgL = localStorage.getItem(this.key);
        if (imgL===null){
            return [];
        }

        return this.toImgs(JSON.parse(imgL));
    }

    toObject(object, proto)
    {
        object.__proto__ = proto;

        return object;
    }

    toImgs(imgs) {
        let me = this;
        imgs.forEach((img) => me.toObject(img, (new Img()).__proto__))

        return imgs;
    }
}
