// let album = new Array();
//  album = document.querySelectorAll('.img-mini');
//
// for(let i=0; i<album.length; i++) {
//     let valueAtIndex1 = album[i];
//     console.log(album[i] + 'Vse');
// }

//
function getImgByIndex(index) {
    let album = document.querySelectorAll('.img-mini');

    return album[index];
}

function getSrcByImg(img) {
    return img.getAttribute('src');
}

let currentImgId = 0;

//увеличивает но не болше количества картинок
function incrementImgId() {
    let album = document.querySelectorAll('.img-mini');
    if (currentImgId + 1 < album.length) {
        currentImgId++;
    }

    return currentImgId;
}

//уиеншает имг айди но не иеньше нуля
function dicrementImgId() {
    if (currentImgId > 0) {
        currentImgId--;
    }

    return currentImgId;
}

function updateImgBig(index) {
    let img = getImgByIndex(index);
    let src = getSrcByImg(img);
    let album2 = document.querySelector('.img-big');
    album2.setAttribute('src', src);
}

//array загружает сохраненный в локалсторидж данные с переменной
function loadCurrentImgId() {
    currentImgId = parseInt(localStorage.getItem("currentImgId"));
}

if (isCurrentImgIdSaved()) {
    loadCurrentImgId();
}

function isCurrentImgIdSaved() {
    return localStorage.getItem("currentImgId") !== null;
}

function saveCurrentImgId() {
    localStorage.setItem("currentImgId", currentImgId);
}

// console.log(getImgByIndex(5));
updateImgBig(currentImgId);

function nextImg() {
    incrementImgId();
    updateImgBig(currentImgId);
    saveCurrentImgId();
}

function prevImg() {
    dicrementImgId();
    updateImgBig(currentImgId);
    saveCurrentImgId();
}

function thisImg() {
    dicrementImgId();
    updateImgBig(currentImgId);
    saveCurrentImgId();
}

let imgClient = 0;

// function promt() {
//     imgClient = prompt('Введите ссылку на изображение: ');
//     // dicrementImgId();
//     updateImgBig(imgClient);
//     document.createElement("img");
//     saveCurrentImgId();
// }

// var outImage ="imagenFondo";
// function preview_2(obj)
// {
//     if (FileReader)
//     {
//         var reader = new FileReader();
//         reader.readAsDataURL(obj.files[0]);
//         reader.onload = function (e) {
//             var image=new Image();
//             image.src=e.target.result;
//             image.onload = function () {
//                 document.getElementById(outImage).src=image.src;
//             };
//         }
//     }
//     else
//     {
//         // Not supported
//     }
// }
//todo
// поменять индекс при нажатии на кнопку,
// достать img,
//todo достать src
//todo заменить src