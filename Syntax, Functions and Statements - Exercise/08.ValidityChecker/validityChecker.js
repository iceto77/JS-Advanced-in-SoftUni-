function slove(x1, y1, x2, y2){
    let distance = chekDistance(x1, y1, 0, 0);
    if((distance % 1) === 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    distance = chekDistance(0, 0, x2, y2);
    if((distance % 1) > 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    distance = chekDistance(x1, y1, x2, y2);
    if((distance % 1) > 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }

    function chekDistance(a1, b1, a2, b2){
        let result = Math.sqrt(Math.pow((a2 - a1), 2) + Math.pow((b2 - b1), 2));
        return result;
    }
}


slove(3, 0, 0, 4);
slove(2, 1, 1, 1);