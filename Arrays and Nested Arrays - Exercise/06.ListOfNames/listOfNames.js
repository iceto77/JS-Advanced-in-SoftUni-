function solve(input){
    let num = 1;
    let arr = [];

    let sortedArr = input.sort((a,b) => a.localeCompare(b));
    sortedArr.forEach((name) => {
        console.log(`${num++}.${name}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"]);
