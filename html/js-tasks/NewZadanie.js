function addContacts() {
    let contact = {
        name: document.getElementById('first_name').value + document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value + document.getElementById('job-title').value,
        id: incrementContactId(),
    };
    addRowByContactObject(contact);
    contacts.push(contact);
    // это здесь сохраняет
    saveContacts();
}

let contactId = 0;

// let sortedRows = Array.from(table.rows).slice(1).sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
// table.tBodies[0].append(...sortedRows);

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    deleteContactById(btn.getAttribute('contactID'));
    saveContacts();
}

function deleteContactById(id) {
    contacts = contacts.filter(function (obj) {
        return obj.id != id;
    });
}

//todo

let contacts = [];

if (isContactsSeted()) {
    loadContacts();
    showContacts();
}

if (isContactIdSeted()) {
    loadContactId();
}

function incrementContactId() {
    contactId++;
    localStorage.setItem("contactId", contactId);

    return contactId;
}

//array
function loadContactId() {
    contactId = localStorage.getItem("contactId");
}

function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
    contacts = JSON.parse(localStorage.getItem("contacts"));
}

function isContactsSeted() {
    return localStorage.getItem("contacts") !== null;
}

function isContactIdSeted() {
    return localStorage.getItem("contactId") !== null;
}

//todo
//отсортировать объекты по свойству //https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
//очистить таблицу //https://stackoverflow.com/questions/5744233/how-to-empty-the-content-of-a-div/5744262
//заполнить таблицу отсортированным объектами // использовать фор. и заполнить объектами таблицу

/**
 *
 * @param contact
 */
function addRowByContactObject(contact) {
    let tableRef = document.querySelector('table tbody');

    // Insert a row in the table at row index 0
    let newRow = tableRef.insertRow();

    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell();

    // Append a text node to the cell
    // let newText = document.createTextNode(document.getElementById('first_name').value + document.getElementById('last_name').value);
    let newText = document.createTextNode(contact.name);
    newCell.appendChild(newText);

    let newCell2 = newRow.insertCell();
    // let newText2 = document.createTextNode(document.getElementById('email').value);
    let newText2 = document.createTextNode(contact.email);
    newCell2.appendChild(newText2);

    let newCell3 = newRow.insertCell();
    // let newText3 = document.createTextNode(document.getElementById('phone').value);
    let newText3 = document.createTextNode(contact.phone);
    newCell3.appendChild(newText3);

    let newCell1 = newRow.insertCell();
    // let newText1 = document.createTextNode(document.getElementById('company').value + document.getElementById('job-title').value);
    let newText1 = document.createTextNode(contact.company);
    newCell1.appendChild(newText1);

    let newCell4 = newRow.insertCell();
    // let newText4 = document.createElement('<input type="button" value="Delete" onClick="deleteRow(this)"/>');
    let newText4 = document.createElement('input');
    newText4.setAttribute("type", "button");
    newText4.setAttribute("value", "Delete");
    //***1 часть todo
    newText4.setAttribute("contactID", contact.id);
    //удаление выбранной строки
    newText4.setAttribute("onClick", "deleteRow(this)");
    newCell4.appendChild(newText4);
}

// console.log(contacts.sort((a, b) => (a.name > b.phone) ? 1 : (a.name === b.phone) ? ((a.company > b.email) ? 1 : -1) : -1 ));
function sort(sortBy) {
    console.log(contacts.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1));
    cleanTa();
    showContacts();
}

function cleanTa() {
    let taable = document.querySelector('table tbody');
    while (taable.firstChild) {
        taable.removeChild(taable.firstChild);
    }
    saveContacts();
}

function showContacts() {
    contacts.forEach(function (item, i, arr) {
        addRowByContactObject(item);
    });
}

function sortColumn(event) {
    let sorted = document.querySelector('.sorted');
    if (sorted != null) {
        sorted.classList.remove('sorted');
    }
    let target = event.target;
    sort(target.dataset.sortBy);
    target.classList.add("sorted");
}

//удаление элементов таблицы(кнопка "корзина")
// ***
function cleanTable() {
    let taable = document.querySelector('table tbody');
    while (taable.firstChild) {
        taable.removeChild(taable.firstChild);
    }
    contacts = [];
    saveContacts();
}

function clickOn() {
    let div = document.querySelector('.stena1');
    div.classList.remove('visible');
    div.classList.add("invisible");
    let div1 = document.querySelector('.stena2');
    div1.classList.remove('invisible');
    div1.classList.add("visible");
}

function closeWindow() {
    // let div1 = document.querySelector('.close');
    // div1.parentNode.classList.remove('visible');
    // div1.parentNode.classList.add("invisible");

    let div = document.querySelector('.stena2');
    div.classList.remove('visible');
    div.classList.add("invisible");
    let div1 = document.querySelector('.stena1');
    div1.classList.remove('invisible');
    div1.classList.add("visible");
}

function addListeners() {
    addSortColumnListener();
    addCloseWindowListener();
    addDeleteListener();
    addContactClose();
}

function addCloseWindowListener() {
    let closeButton = document.querySelector('.close');
    closeButton.onclick = closeWindow;

}

function addSortColumnListener() {
    let th = document.querySelectorAll('th.can-sort');
    th.forEach(function (item) {
        item.onclick = sortColumn;
    });
}

//кнопка корзины
//***
function addDeleteListener() {
    let delete1 = document.querySelector('.proverka_svyazi');
    delete1.onclick = confirmDELITEoN;
}

function confirmDELITEoN() {
    if (confirm('Точно все удалить???')) {
        cleanTable();
    }
}

function addContactClose() {
    let closeButton1 = document.querySelector('.knopka');
    closeButton1.onclick = function () {
        addContacts();
        closeWindow();
        cleanForm();
    };
}

function cleanForm() {
    let inputs = document.querySelectorAll('.add-form input');
    inputs.forEach(function (input) {
        input.value = '';
    });
}

addListeners();

// let counterLoc = 0;
//
//
// //array загружает сохраненный в локалсторидж данные с переменной
// function loadCounter() {
//     counterLoc = localStorage.getItem("counterLoc");
// }
//
// function count() {
//     counterLoc++;
//     localStorage.setItem("counterLoc", counterLoc);
//
//     return counterLoc;
// }
//
// if (isCounter()) {
//     loadCounter();
// }
//
// function isCounter() {
//     return localStorage.getItem("counterLoc") !== null;
// }
//
// function showCounter() {
//     let counter = document.querySelector('.counter');
//     let newText1 = document.createTextNode(counterLoc + 'заходили на страницу');
//     counter.appendChild(newText1);
// }
//
// console.log(count());
// showCounter();



let counterObj = new Counter();
counterObj.doCount().render();

// function cleanTable() {
// //comment   g.deleteRow(1);   можно удалить первую строку таблицы всегда, не трогая 0 строку это название
// //   comment  let taable = document.getElementById('table');
//     let taable = document.querySelector('table tbody');
//     while (taable.firstChild) {
//         taable.removeChild(taable.firstChild);
//     }
//     // comment $("tbody").children().remove();
// }

//todo при отрисовке контакта надо добавить атрибут у кнопки по которой мы будем определять какой контакт нужно удалять
//todo написать функцию удаления заданного контакта из  массива по ид