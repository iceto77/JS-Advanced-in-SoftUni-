window.addEventListener('load', solve);

function solve() {
    const addBtnElement = document.getElementById('add-btn');

    addBtnElement.addEventListener('click', addBtnClickHandler);

    function addBtnClickHandler(e) {
        e.preventDefault();
        let genreInputElement = document.getElementById('genre');
        let nameInputElement = document.getElementById('name');
        let authorInputElement = document.getElementById('author');
        let dateInputElement = document.getElementById('date');

        e.preventDefault();
        let genre = genreInputElement.value;
        let name = nameInputElement.value;
        let author = authorInputElement.value;
        let date = dateInputElement.value;
        if (!genre || !name || !author || !date) {
            return;
        };
        // if (!(typeof genre === 'string')) {
        //     return;
        // };

        let fatherNodeElement = document.querySelector('.all-hits-container');
        let newDivElement = document.createElement('div');
        newDivElement.setAttribute('class', "hits-info");
        let newImgElement = document.createElement('img');
        newImgElement.setAttribute('src', "./static/img/img.png");
        newDivElement.appendChild(newImgElement);
        let newGenreElement = document.createElement('h2');
        newGenreElement.textContent = `Genre: ${genre}`;
        newDivElement.appendChild(newGenreElement);
        let newNameElement = document.createElement('h2');
        newNameElement.textContent = `Name: ${name}`;
        newDivElement.appendChild(newNameElement);
        let newAuthorElement = document.createElement('h2');
        newAuthorElement.textContent = `Author: ${author}`;
        newDivElement.appendChild(newAuthorElement);
        let newDateElement = document.createElement('h3');
        newDateElement.textContent = `Date: ${date}`;
        newDivElement.appendChild(newDateElement);
        let newSaveBtnElement = document.createElement('button');
        newSaveBtnElement.setAttribute('class', "save-btn");
        newSaveBtnElement.textContent = 'Save song';
        newDivElement.appendChild(newSaveBtnElement);
        let newLikeBtnElement = document.createElement('button');
        newLikeBtnElement.setAttribute('class', "like-btn");
        newLikeBtnElement.textContent = 'Like song';
        newDivElement.appendChild(newLikeBtnElement);
        let newDeleteBtnElement = document.createElement('button');
        newDeleteBtnElement.setAttribute('class', "delete-btn");
        newDeleteBtnElement.textContent = 'Delete';
        newDivElement.appendChild(newDeleteBtnElement);
        
        newLikeBtnElement.addEventListener('click', likeBtnClickHandler);
        newSaveBtnElement.addEventListener('click', saveBtnClickHandler);
        newDeleteBtnElement.addEventListener('click', deleteBtnClickHandler);

        fatherNodeElement.appendChild(newDivElement);

        // genreInputElement.value = '';
        // nameInputElement.value = '';
        // authorInputElement.value = '';
        // dateInputElement.value = '';
    };

    function likeBtnClickHandler(e) {
        let totalLikesElement = document.querySelector('.likes p');
        let totalLikes = totalLikesElement.textContent.split(': ');
        let likes = Number(totalLikes[1]);
        likes++
        totalLikesElement.textContent = `${totalLikes[0]}: ${likes}`;
        this.disabled = true;
    };

    function saveBtnClickHandler(e) {
        let currentDivElement = this.parentElement;
        let saveBtn = currentDivElement.querySelector('.save-btn');
        let likeBtn = currentDivElement.querySelector('.like-btn');
        currentDivElement.removeChild(saveBtn);
        currentDivElement.removeChild(likeBtn);
        let savedSongsElement = document.querySelector('.saved-container');
        savedSongsElement.appendChild(currentDivElement);
    };
    
    function deleteBtnClickHandler(e) {
        let DivElement = this.parentElement;
        let parElement = DivElement.parentElement;
        // console.log(DivElement);
        // console.log(parElement);
        parElement.removeChild(DivElement);
    };
}