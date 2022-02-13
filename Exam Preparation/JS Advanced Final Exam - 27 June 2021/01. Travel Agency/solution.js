window.addEventListener('load', solution);

function solution() {
  const fullNameElement = document.getElementById('fname');
  const emailElement = document.getElementById('email');
  const phoneElement = document.getElementById('phone');
  const addressElement = document.getElementById('address');
  const postalCodeElement = document.getElementById('code');
  const submitButtonElement = document.getElementById('submitBTN');
  const editButtonElement = document.getElementById('editBTN');
  const continueButtonElement = document.getElementById('continueBTN');
  const infoPreviewElement = document.getElementById('infoPreview');
  const blockElement = document.getElementById('block');

  let fullName;
  let email;
  let phoneNumber;
  let address;
  let postalCode;

  submitButtonElement.addEventListener('click', submitClickHandler);
  function submitClickHandler(e){
     fullName = fullNameElement.value;
     email = emailElement.value;
     phoneNumber = phoneElement.value;
     address = addressElement.value;
     postalCode = postalCodeElement.value;

    if(fullName == '' || email == ''){
      return;
    }
    let fnLiElement = document.createElement('li');
    let emailLiElement = document.createElement('li');
    let phoneLiElement = document.createElement('li');
    let addressLiElement = document.createElement('li');
    let pcLiElement = document.createElement('li');

    fnLiElement.textContent = `Full Name: ${fullName}`;
    emailLiElement.textContent = `Email: ${email}`;
    phoneLiElement.textContent = `Phone Number: ${phoneNumber}`;
    addressLiElement.textContent = `Address: ${address}`;
    pcLiElement.textContent = `Postal Code: ${postalCode}`;

    infoPreviewElement.appendChild(fnLiElement);
    infoPreviewElement.appendChild(emailLiElement);
    infoPreviewElement.appendChild(phoneLiElement);
    infoPreviewElement.appendChild(addressLiElement);
    infoPreviewElement.appendChild(pcLiElement);
   
    submitButtonElement.disabled = true;
    editButtonElement.removeAttribute('disabled');
    continueButtonElement.removeAttribute('disabled');
   
    fullNameElement.value = '';
    emailElement.value = '';
    phoneElement.value = '';
    addressElement.value = '';
    postalCodeElement.value = '';  
  }
  editButtonElement.addEventListener('click', editClickHandler);
  function editClickHandler(e){

    while (infoPreviewElement.firstChild) {
      infoPreviewElement.removeChild(infoPreviewElement.firstChild);
    }
    editButtonElement.disabled = true;
    continueButtonElement.disabled = true;
    submitButtonElement.removeAttribute('disabled');
    fullNameElement.value = fullName;
    emailElement.value = email;
    phoneElement.value = phoneNumber;
    addressElement.value = address;
    postalCodeElement.value = postalCode;
  }
  continueButtonElement.addEventListener('click', continueClickHandler);
  function continueClickHandler(e){
   
    while (blockElement.firstChild) {
      blockElement.removeChild(blockElement.firstChild);
    }
    //let divElement = document.createElement('div');
    //divElement.setAttribute('id', 'block');
    let h3Element = document.createElement('h3');
    h3Element.textContent = 'Thank you for your reservation!';
    //divElement.appendChild(h3Element);
    blockElement.appendChild(h3Element);
  }
}
