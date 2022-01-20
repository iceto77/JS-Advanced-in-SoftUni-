function solve(input){
    let catalog = input.sort((a,b) => a.localeCompare(b));
    let startChar = catalog[0][0];
    console.log(startChar);
    for(let i = 0; i < catalog.length; i++){
        let currentChar = catalog[i][0];
        let current = catalog[i].split(' : ');
        if(currentChar === startChar){
            console.log(` ${current[0]}: ${current[1]}`);
        } else {
            startChar = currentChar;
            console.log(currentChar);
            console.log(` ${current[0]}: ${current[1]}`);
        }

    }

}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);