function slove(stars){
    let numberOfStars = Number(stars);
    let line = '';
    for(let i = 0; i < numberOfStars; i++){
        for(let j = 0; j < numberOfStars; j++){
            line += '* ';
        }
        console.log(line);
        line = '';
    }
}

slove(1);
slove(2);
slove(5);
slove(7);