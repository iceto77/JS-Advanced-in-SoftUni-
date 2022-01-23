function calc() {
    // TODO: sum = num1 + num2
    let firstNumberElement = document.getElementById('num1');
    let secondNumberElement = document.getElementById('num2');
    let resultElement = document.getElementById('sum');
    let sum = Number(firstNumberElement.value) + Number(secondNumberElement.value);
    resultElement.value = sum;
}
