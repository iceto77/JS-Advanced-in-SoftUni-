function solve() {
   let authorElement = document.getElementById('creator');
   let titleElement = document.getElementById('title');
   let categoryElement = document.getElementById('category');
   let contentElement = document.getElementById('content');
   let createBTNElement = document.querySelector('button');
   let postsElement = document.querySelector('.site-content main section');
   let arhivElement = document.querySelector('.archive-section ol');
   let arhivArr = [];

   createBTNElement.addEventListener('click', (e) => {
      e.preventDefault();
      let author = authorElement.value;
      let title = titleElement.value;
      let category = categoryElement.value;
      let content = contentElement.value;
      if (!author || !title || !category || !content) {
         return
      };

      let newArticle = document.createElement('article');
      let newH1 = document.createElement('h1');
      newH1.textContent = title;
      newArticle.appendChild(newH1);

      let categoryP = document.createElement('p');
      categoryP.textContent = 'Category: ';
      let categoryStrong = document.createElement('strong');
      categoryStrong.textContent = category;
      categoryP.appendChild(categoryStrong);
      newArticle.appendChild(categoryP);

      let creatorP = document.createElement('p');
      creatorP.textContent = 'Creator: ';
      let creatorStrong = document.createElement('strong');
      creatorStrong.textContent = author;
      creatorP.appendChild(creatorStrong);
      newArticle.appendChild(creatorP);

      let contentP = document.createElement('p');
      contentP.textContent = content;
      newArticle.appendChild(contentP)

      let newDiv = document.createElement('div');
      newDiv.classList.add('buttons');

      let deleteBTN = document.createElement('button');
      deleteBTN.setAttribute('class', 'btn delete');
      deleteBTN.textContent = 'Delete';
      newDiv.appendChild(deleteBTN);
      deleteBTN.addEventListener('click', deleteBtnClickHandler);

      let archiveBTN = document.createElement('button');
      archiveBTN.setAttribute('class', 'btn archive');
      archiveBTN.textContent = 'Archive';
      newDiv.appendChild(archiveBTN);
      archiveBTN.addEventListener('click', archiveBtnClickHandler);

      newArticle.appendChild(newDiv);
      postsElement.appendChild(newArticle);

      // authorElement.value = '';
      // titleElement.value = '';
      // categoryElement.value = '';
      // contentElement.value = '';
   });

   function deleteBtnClickHandler(e) {
      let currentArticle = e.currentTarget.parentElement.parentElement;
      postsElement.removeChild(currentArticle);
   };

   function archiveBtnClickHandler(e) {
      let currentArticle = e.currentTarget.parentElement.parentElement;
      let arhivLine = currentArticle.querySelector('h1').textContent;
      postsElement.removeChild(currentArticle);

      arhivArr.push(arhivLine);
      arhivArr.sort((a, b) => a.localeCompare(b));
      let arhivCount = arhivElement.childElementCount;
      for (let i = 0; i < arhivCount; i++) {
         let target = arhivElement.querySelector('li')
         arhivElement.removeChild(target);
      };
      for (const li of arhivArr) {
         let newLi = document.createElement('li');
         newLi.textContent = li;
         arhivElement.appendChild(newLi);
      };
   };
}
