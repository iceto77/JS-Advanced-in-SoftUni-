function editElement(element, match, replaser) {
    while(element.textContent.includes(match)){
        element.textContent = element.textContent.replace(match, replaser);
    }
}