function attachEventsListeners() {
    let convertTable = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }
    let [inputField, outputField] = document.querySelectorAll('input[type="text"]');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    let convertButtonElement = document.getElementById('convert');

    convertButtonElement.addEventListener('click', convertDistance);
    function convertDistance(){
        let distance = Number(inputField.value)*convertTable[inputUnits.value];
        let result = distance / convertTable[outputUnits.value];
        outputField.value = result;
    }

}