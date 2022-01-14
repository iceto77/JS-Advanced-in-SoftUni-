function slove(m, y){
    let year = Number(y);
    let month = Number(m);
    let day = 1;

    let date = new Date(year, month, day);
    date.setDate(date.getDate() - 1);
   console.log(date.getDate());
}

slove(1, 2012);
slove(2, 2021);

