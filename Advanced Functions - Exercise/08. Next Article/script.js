function getArticleGenerator(articles) {    
    let input =  articles;
    return ()=>{
       if(input.length){
            let result = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = input.shift();
            article.innerText = currentText;
            result.appendChild(article);
       }
    }
}



