function addContacts() {
    let contact = {
        name: document.getElementById('first_name').value + document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value + document.getElementById('job-title').value,
    };
    addRowByContactObject(contact);
    contacts.push(contact);
}

// let sortedRows = Array.from(table.rows).slice(1).sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
// table.tBodies[0].append(...sortedRows);

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

let contacts = [];

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
    newText4.setAttribute("onClick", "deleteRow(this)");
    newCell4.appendChild(newText4);
}

// console.log(contacts.sort((a, b) => (a.name > b.phone) ? 1 : (a.name === b.phone) ? ((a.company > b.email) ? 1 : -1) : -1 ));
function sort(sortBy) {
    console.log(contacts.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1));
    cleanTable();
    contacts.forEach(function (item, i, arr) {
        addRowByContactObject(item);
    });
}

function cleanTable() {
//g.deleteRow(1);   можно удалить первую строку таблицы всегда, не трогая 0 строку это название
//     let taable = document.getElementById('table');
    let taable = document.querySelector('table tbody');
    while (taable.firstChild) {
        taable.removeChild(taable.firstChild);
    }
    // $("tbody").children().remove();
}

let th = document.querySelectorAll('th.can-sort');
th.forEach(function (item){
    item.onclick = function (event){
        let sorted = document.querySelector('.sorted');
        if (sorted != null) {
            sorted.classList.remove('sorted');
        }
        let target = event.target;
        sort(target.dataset.sortBy);
        target.classList.add("sorted");
    };
});