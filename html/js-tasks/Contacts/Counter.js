class Counter {
    count = 0;

    constructor() {
        if (this.isSaved) {
            this.load();
        }
    }

    doCount(){
        this.increment();
        this.save();

        return this;
    }

    save() {
        localStorage.setItem("counterLoc", this.count);

        return this;
    }

    increment() {
        this.count++;

        return this;
    }

    load() {
        this.count = localStorage.getItem("counterLoc");

        return this;
    }

    isSaved() {
        return localStorage.getItem("counterLoc") !== null;
    }

    render() {
        let counter = document.querySelector('.counter');
        let newText1 = document.createTextNode(this.count + ' заходили на страницу');
        counter.appendChild(newText1);

        return this;
    }
}
