function toggle() {
    let button = document.querySelector('.button');
    let hiddenText = document.querySelector('#extra');
    if(button.textContent === 'More'){
        hiddenText.style.display = 'block';
        button.textContent = 'Less';
    } else {
        hiddenText.style.display = 'none';
        button.textContent = 'More';
    }
}