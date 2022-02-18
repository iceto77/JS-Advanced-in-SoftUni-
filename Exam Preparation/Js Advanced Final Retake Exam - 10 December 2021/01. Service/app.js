window.addEventListener('load', solve);

function solve() {
    let productTypeElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let nameElement = document.getElementById('client-name');
    let phoneElement = document.getElementById('client-phone');
    let sendBTNElement = document.getElementById('right').querySelector('button');
    let receivedOrdersElement = document.getElementById('received-orders');
    let completedOrdersElement = document.getElementById('completed-orders');
    let clearBTNElement = document.querySelector('.clear-btn');


    sendBTNElement.addEventListener('click', (e) => {
        e.preventDefault();
        let productType = productTypeElement.value;
        let description = descriptionElement.value;
        let name = nameElement.value;
        let phone = phoneElement.value;

        if (!productType || !description || !name || !phone) {
            return;
        };

        let newDiv = document.createElement('div');
        newDiv.classList.add('container');
        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${productType}`;
        newDiv.appendChild(h2);
        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${name}, ${phone}`;
        newDiv.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description}`;
        newDiv.appendChild(h4);
        let startBTN = document.createElement('button');
        startBTN.classList.add('start-btn');
        startBTN.textContent = 'Start repair';
        newDiv.appendChild(startBTN);
        startBTN.addEventListener('click', startClickHandler);
        let finishBTN = document.createElement('button');
        finishBTN.classList.add('finish-btn');
        finishBTN.textContent = 'Finish repair';
        finishBTN.disabled = true;
        newDiv.appendChild(finishBTN);
        finishBTN.addEventListener('click', finishClickHandler);

        //editButtonElement.removeAttribute('disabled');
        receivedOrdersElement.appendChild(newDiv);

        productTypeElement.value = '';
        descriptionElement.value = '';
        nameElement.value = '';
        phoneElement.value = '';
    });

    clearBTNElement.addEventListener('click', (e) => {
        e.preventDefault();
        let elemnttoRemove = completedOrdersElement.querySelectorAll('.container');
        for (const element of elemnttoRemove) {
            completedOrdersElement.removeChild(element);
        };
    });

    function startClickHandler(e) {
        let currentStartBTN = e.target;
        let currentFinishtBTN = e.target.parentElement.querySelector('.finish-btn');;
        currentStartBTN.disabled = true;
        currentFinishtBTN.removeAttribute('disabled');
    };

    function finishClickHandler(e) {
        let currentParent = e.target.parentElement.parentElement;
        let elemnttoRemove = currentParent.querySelector('.container');
        currentParent.removeChild(elemnttoRemove);
        let currentContainerElement = e.target.parentElement;
        let currentProductType = currentContainerElement.querySelector('h2').textContent;
        let currentDescription = currentContainerElement.querySelector('h4').textContent;
        let currentNamePhoneInfo = currentContainerElement.querySelector('h3').textContent;
        currentProductType = getUsefulInfo(currentProductType);
        currentDescription = getUsefulInfo(currentDescription);
        currentNamePhoneInfo = getUsefulInfo(currentNamePhoneInfo);
        currentNamePhoneInfo = currentNamePhoneInfo.split(', ');
        let currentName = currentNamePhoneInfo[0];
        let currentPhone = currentNamePhoneInfo[1];

        let newDiv = document.createElement('div');
        newDiv.classList.add('container');
        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${currentProductType}`;
        newDiv.appendChild(h2);
        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${currentName}, ${currentPhone}`;
        newDiv.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${currentDescription}`;
        newDiv.appendChild(h4);
        completedOrdersElement.appendChild(newDiv);
    };

    function getUsefulInfo(input, name) {
        let result = input.split(': ');
        return result[1];
    };
}