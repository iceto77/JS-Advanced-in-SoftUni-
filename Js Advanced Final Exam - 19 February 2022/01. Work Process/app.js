function solve() {
    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthdayElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    let hireWorkerBTNElement = document.getElementById('add-worker');
    let sumElement = document.getElementById('sum');
    let tableBodyElement = document.getElementById('tbody');

    hireWorkerBTNElement.addEventListener('click', (e) => {
        e.preventDefault();
        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let email = emailElement.value;
        let birthday = birthdayElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;
        if (!firstName || !lastName || !email || !birthday || !position || !salary) {
            return;
        };

        let newTr = document.createElement('tr');
        let newFirstName = document.createElement('td');
        newFirstName.textContent = firstName;
        newTr.appendChild(newFirstName);
        let newLastName = document.createElement('td');
        newLastName.textContent = lastName;
        newTr.appendChild(newLastName);
        let newEmail = document.createElement('td');
        newEmail.textContent = email;
        newTr.appendChild(newEmail);
        let newBirthday = document.createElement('td');
        newBirthday.textContent = birthday;
        newTr.appendChild(newBirthday);
        let newPosition = document.createElement('td');
        newPosition.textContent = position;
        newTr.appendChild(newPosition);
        let newSalary = document.createElement('td');
        newSalary.textContent = salary;
        newTr.appendChild(newSalary);
        let newButtonsTd = document.createElement('td');
        let newFiredBTN = document.createElement('button');
        newFiredBTN.classList.add('fired');
        newFiredBTN.textContent = 'Fired';
        newButtonsTd.appendChild(newFiredBTN);
        newFiredBTN.addEventListener('click', firedClickHandler);
        let newEditBTN = document.createElement('button');
        newEditBTN.classList.add('edit');
        newEditBTN.textContent = 'Edit';
        newButtonsTd.appendChild(newEditBTN);
        newEditBTN.addEventListener('click', editClickHandler);
        newTr.appendChild(newButtonsTd);
        tableBodyElement.appendChild(newTr);
        let sum = Number(sumElement.textContent);
        sum += Number(salary);
        sumElement.textContent = sum.toFixed(2);
        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        birthdayElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';
    });

    function firedClickHandler(e) {
        let targetElement = e.target.parentElement.parentElement;
        let allInfo = Array.from(targetElement.querySelectorAll('td'));
        let sum = Number(sumElement.textContent);
        sum -= Number(allInfo[5].textContent);
        sumElement.textContent = sum.toFixed(2);
        tableBodyElement.removeChild(targetElement);
    };

    function editClickHandler(e) {
        let targetElement = e.target.parentElement.parentElement;
        let allInfo = Array.from(targetElement.querySelectorAll('td'));

        firstNameElement.value = allInfo[0].textContent;
        lastNameElement.value = allInfo[1].textContent;
        emailElement.value = allInfo[2].textContent;
        birthdayElement.value = allInfo[3].textContent;
        positionElement.value = allInfo[4].textContent;
        salaryElement.value = allInfo[5].textContent;
        let sum = Number(sumElement.textContent);
        sum -= Number(allInfo[5].textContent);
        sumElement.textContent = sum.toFixed(2);
        tableBodyElement.removeChild(targetElement);
    };
};



solve()


