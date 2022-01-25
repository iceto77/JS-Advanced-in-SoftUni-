function solve() {
  let inputTextElement = document.getElementById('text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  let result ='';

  if(conventionElement === 'Camel Case'){
    for(let i = 0; i < inputTextElement.length; i++){
      if(inputTextElement[i] === ' '){
        result += inputTextElement[i+1].toUpperCase();
        i++;
      } else{
        result += inputTextElement[i].toLowerCase();
      }
    }
  } else if(conventionElement === 'Pascal Case'){
    result += inputTextElement[0].toUpperCase();
    for(let i = 1; i < inputTextElement.length; i++){
      if(inputTextElement[i] === ' '){
        result += inputTextElement[i+1].toUpperCase();
        i++;
      } else{
        result += inputTextElement[i].toLowerCase();
      }
    }

  } else{
    result = 'Error!';
  }
  resultElement.textContent = result;
}