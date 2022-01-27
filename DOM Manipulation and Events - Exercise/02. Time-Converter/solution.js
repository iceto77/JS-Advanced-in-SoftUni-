function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');
    let dayButtonElement = document.getElementById('daysBtn');
    let hourButtonElement = document.getElementById('hoursBtn');
    let minuteButtonElement = document.getElementById('minutesBtn');
    let secondsButtonElement = document.getElementById('secondsBtn');
    let rations = {
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400
    };
    dayButtonElement.addEventListener('click', convertTime);
    hourButtonElement.addEventListener('click', convertTime);
    minuteButtonElement.addEventListener('click', convertTime);
    secondsButtonElement.addEventListener('click', convertTime);
    
    function convert(value, unit){
        let koef = value / rations[unit];

        return {
            days:koef,
            hours:koef*rations.hours,
            minutes:koef*rations.minutes,
            seconds:koef*rations.seconds
        };
    }
    function convertTime(event){
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time =  convert(Number(input.value), input.id);
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds;
    }
}