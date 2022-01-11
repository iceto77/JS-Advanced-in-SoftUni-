function stringLength(first, second, third) {
    let a = first.length;
    let b = second.length;
    let c = third.length;
    console.log(a + b + c);
    let averageLength = Math.floor((a + b + c) / 3);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
