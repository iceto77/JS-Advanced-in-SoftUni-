function solve() {
  let inputElement = document.getElementById('input').value;
  let textArray = inputElement.split('.').filter(s => s !== '');
  let resultDiv = document.getElementById('output');
  while(textArray.length > 0){
    let p = document.createElement('p');
    p.textContent = textArray.splice(0, 3).join('. ') + '.';
    resultDiv.appendChild(p);
  } 
}