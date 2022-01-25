function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let rowsElement = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');
    let emailElements = Array.from(rowsElement);
    let targetElement = emailElements.find(x => x.textContent == inputElement.value);
    if(targetElement){
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}