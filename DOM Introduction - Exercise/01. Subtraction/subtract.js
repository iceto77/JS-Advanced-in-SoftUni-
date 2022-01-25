function subtract() {
    let firstNumberElement = document.getElementById('firstNumber').value;
    let secondNumberElement = document.getElementById('secondNumber').value;
    let firstNumber = Number(firstNumberElement);
    let secondNumber = Number(secondNumberElement);
    let result = firstNumber - secondNumber;
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}