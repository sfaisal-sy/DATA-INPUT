
    

    // Collect all input fields
let allInputValue = Array.from(document.querySelectorAll('input'));

// Select submit button and table body
let submitBtn = document.getElementById('submit');
let tbody = document.getElementById('tbody');

// ================= SERIAL NUMBER UPDATE FUNCTION =================
function updateSrNo() {
    let rows = tbody.querySelectorAll('tr');

    rows.forEach((row, index) => {
        // First column is always Sr No
        row.children[0].textContent = index + 1;
    });
}

// ================= SUBMIT BUTTON EVENT =================
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Create a table row
    let trElement = document.createElement('tr');

    // -------- SERIAL NUMBER COLUMN --------
    let srtd = document.createElement('td');
    srtd.textContent = tbody.children.length + 1;
    trElement.appendChild(srtd);

    // -------- INPUT VALUES COLUMNS --------
    allInputValue.forEach(input => {
        let td = document.createElement('td');
        td.textContent = input.value;
        trElement.appendChild(td);
    });

    // -------- EDIT BUTTON --------
    let editTd = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'btn btn-primary';
    editTd.appendChild(editBtn);
    trElement.appendChild(editTd);

    // -------- DELETE BUTTON --------
    let deleteTd = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-danger';
    deleteTd.appendChild(deleteBtn);
    trElement.appendChild(deleteTd);

    // ================= EDIT FUNCTION =================
    editBtn.addEventListener('click', () => {
        let tdValues = trElement.querySelectorAll('td');

        allInputValue.forEach((input, index) => {
            input.value = tdValues[index + 1].textContent;
        });

        trElement.remove();
        updateSrNo();
    });

    // ================= DELETE FUNCTION =================
    deleteBtn.addEventListener('click', () => {
        trElement.remove();
        updateSrNo();
    });

    // Add row to table
    tbody.appendChild(trElement);

    // Clear input fields
    allInputValue.forEach(input => {
        input.value = '';
    });

    allInputValue[0].focus();
});
