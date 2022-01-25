function search() {
   let inputTextEleemnt = document.getElementById('searchText').value;
   let townElements = Array.from(document.querySelectorAll('#towns li'));
   let mathces = document.getElementById('result');
   let count = 0;
   for (let town of townElements) {
      if(town.textContent.includes(inputTextEleemnt)){
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++;
      } else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }    
   }
   mathces.textContent = `${count} matches found`;
}
