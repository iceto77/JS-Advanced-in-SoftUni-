function argumentInfo(input){
    let counter = {};
    for (let element of arguments) {
        let type = typeof(element);
        console.log(`${type}: ${element}`);
        if(!counter[type]){
            counter[type] = 0;
        }
        counter[type]++;
    };
    Object.keys(counter).sort((a,b) => counter[b] - counter[a]).forEach((key) => console.log(`${key} = ${counter[key]}`))
}

argumentInfo('cat', 42, 55, function () { console.log('Hello world!'); });