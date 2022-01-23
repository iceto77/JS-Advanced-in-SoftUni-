function colorize() {
   /* let rowEleemnts = document.querySelectorAll('tr:nth-of-type(2n) td');
    rowEleemnts.forEach(x =>{
        x.style.backgroundColor = 'teal';
    }); */

    let rowEleemnts = document.getElementsByTagName('tr');
    let rows = Array.from(rowEleemnts);
    rows.forEach((x, i) => {
        if(i % 2 != 0){
            x.style.backgroundColor = 'teal';
        }
    });
}