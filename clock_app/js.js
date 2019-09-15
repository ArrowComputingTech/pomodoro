let counter = 0;
let secondscounter = 0;
let minutescounter = 0;
let hourscounter = 0;
function setDate() {
    const NOW = new Date();
    const SECONDS = NOW.getSeconds();
    const MINUTES = NOW.getMinutes();
    const HOURS = NOW.getHours();
    const SECONDSDEGREES = ((((SECONDS / 60) *360) + 90)+secondscounter);
    const MINUTESDEGREES = ((((MINUTES / 60) * 360) + 90)+minutescounter);
    const HOURSDEGREES = (((((HOURS / 12) * 360) + 90))+hourscounter);
    SECONDHAND.style.transform = `rotate(${SECONDSDEGREES}deg)`;
    MINUTEHAND.style.transform = `rotate(${MINUTESDEGREES}deg)`;
    HOURHAND.style.transform = `rotate(${HOURSDEGREES}deg)`;
    
    if (SECONDS == 59) {
        secondscounter += 360;
    }
    if (MINUTES == 59) {
        minutescounter += 360;
    }
    if (HOURS == 11) {
        hourscounter += 360;
    }
}

const SECONDHAND = document.querySelector('.second-hand');
const MINUTEHAND = document.querySelector('.min-hand');
const HOURHAND = document.querySelector('.hour-hand');
const HAND = document.querySelector('.hand');

setInterval(setDate, 1000);