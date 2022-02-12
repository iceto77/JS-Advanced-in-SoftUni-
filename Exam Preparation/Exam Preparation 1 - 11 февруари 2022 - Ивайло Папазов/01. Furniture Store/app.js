window.addEventListener('load', solve);

function solve() {
    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');
    const addButtonElement = document.getElementById('add');
    let bodyInformationElement = document.getElementById('furniture-list');
    let totalPriceElement = document.querySelector('.total-price');
    
   

    addButtonElement.addEventListener('click', addClickHandler);

    function addClickHandler(e){
        e.preventDefault();
        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);
        if(!model || !description || year <= 0 || price <= 0){
            return;
        };

        let rowElement = document.createElement('tr');
        let modelTdElement = document.createElement('td');
        let priceTdElement = document.createElement('td');
        let actionTdElement = document.createElement('td');
        let moreInfoButtonElement = document.createElement('button');
        let buyButtonElement = document.createElement('button');
        let rowHidenElement = document.createElement('tr');
        let yearTdElement = document.createElement('td');
        let descriptionTdElement = document.createElement('td');// TODO:

        modelTdElement.textContent = model;
        priceTdElement.textContent = price.toFixed(2);
        moreInfoButtonElement.textContent = 'More Info';
        buyButtonElement.textContent = 'Buy it';
        yearTdElement.textContent = `Year: ${year}`;
        descriptionTdElement.setAttribute('colspan', 3);
        descriptionTdElement.textContent = `Description: ${description}`;;

        rowElement.classList.add('info');
        moreInfoButtonElement.classList.add('moreBtn');
        buyButtonElement.classList.add('buyBtn');
        rowHidenElement.classList.add('hide'); 
        rowHidenElement.style.display = 'none';
       
        moreInfoButtonElement.addEventListener('click', (e)=>{
            if(e.currentTarget.textContent == 'More Info'){
                e.currentTarget.textContent = 'Less Info';
                rowHidenElement.style.display = 'contents';
            }else{
                e.currentTarget.textContent = 'More Info';
                rowHidenElement.style.display = 'none';
            }            
        });

        buyButtonElement.addEventListener('click', (e)=>{
            let currentTotal = Number(totalPriceElement.textContent);
            currentTotal += price;
            totalPriceElement.textContent = currentTotal.toFixed(2);
            rowElement.remove();
            rowHidenElement.remove();
        });

        actionTdElement.appendChild(moreInfoButtonElement);
        actionTdElement.appendChild(buyButtonElement); 
        rowElement.appendChild(modelTdElement);
        rowElement.appendChild(priceTdElement);
        rowElement.appendChild(actionTdElement);
        rowHidenElement.appendChild(yearTdElement);
        rowHidenElement.appendChild(descriptionTdElement);

        bodyInformationElement.appendChild(rowElement);
        bodyInformationElement.appendChild(rowHidenElement);

        modelInputElement.value = '';
        descriptionInputElement.value = '';
        yearInputElement.value = '';
        priceInputElement.value = '';
    }
}
