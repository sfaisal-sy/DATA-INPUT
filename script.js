let allInputValue = Array.from(document.querySelectorAll('input'));
let submitBtn = document.getElementById('submit');
let tbody = document.getElementById('tbody');



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();


    let trElement = document.createElement('tr')

    let srtd = document.createElement('td');
    srtd.textContent = tbody.children.length + 1;
    trElement.appendChild(srtd);

    // How updateSrNo function is related to srtd explain me step by step with guide lines
    function updateSrNo() {
        let rows = tbody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            row.children[0].textContent = index + 1;
        });
    }


        // tbody.appendChild(trElement);

        allInputValue.forEach(eachInputValue => {

            let inputValue = eachInputValue.value;
            let tdElement = document.createElement('td');
            tdElement.textContent = inputValue;
            trElement.appendChild(tdElement);
        });

        let editTd = document.createElement('td')
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'btn btn-primary'
        editTd.appendChild(editBtn)
        trElement.appendChild(editTd);

    editBtn.addEventListener('click', () => {
        let tdValues = trElement.querySelectorAll('td');

        allInputValue.forEach((eachinput, index) => {
            eachinput.value = tdValues[index + 1].textContent;
        })

        tbody.removeChild(trElement)
        updateSrNo()
    })

    let deleteTd = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.className = 'btn btn-primary';
    deleteTd.appendChild(deleteBtn);
    trElement.appendChild(deleteTd);



    deleteBtn.addEventListener('click', () => {
        alert('YOU WANT TO REMOVE THE RECORED')
        trElement.remove();
        updateSrNo();
    })



    tbody.appendChild(trElement);

    allInputValue.forEach(eachValue => {
        eachValue.value = '';
        allInputValue[0].focus();
    })


})