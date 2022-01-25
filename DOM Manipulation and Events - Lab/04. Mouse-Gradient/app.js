function attachGradientEvents() {
    let resultElement = document.getElementById('result');
    let gradientElement = document.getElementById('gradient');

    const gradientMouseOverHandler = (e) => {
        let result = Math.floor(e.offsetX / e.target.clientWidth * 100);
        resultElement.textContent = `${result}%`;
    }
    const gradientMouseOut = (e) => {
        resultElement.textContent = '';
    }

    gradientElement.addEventListener('mousemove', gradientMouseOverHandler);
    gradientElement.addEventListener('mouseout', gradientMouseOut);
}