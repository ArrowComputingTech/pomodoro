// Get values for timer circle
const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
// Use values for timer circle
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;
// Reduce offset for timer circle
function setProgress(percent) {
    const offset = (circumference - percent / 100  * circumference);
    circle.style.strokeDashoffset = offset;
}

// !!! Create timer
const work_time = document.getElementById('work');

/*
let count_seconds = setInterval(function() {
    let now = new Date().getTime();
    let distance = new Date(start + (start.getMinutes() + work_time.value));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

});
*/

function playClick() {
    console.log('Pause Button');
    /* 
    Get time, start countdown
    Set countdown timer to 0 if not pausing, store value if paused
    */
    let seconds_counter = 0;
    let minutes_counter = work_time;
    
    
    setProgress(Math.max(work)/360 * (parseFloat(finish_time / start)));
}

function timerFunction() {
    
}


// for later
function rounds() {
    /*
        if work time is equal 00 then
        increment the 1 from 1/4 
            if round is equal to 4/4 then reset the top number to 1
    */
}

function longBreak() {
    /*
        
    */
}

function shortBreak() {
    
}

function skip() {
    /*
        create a variable called short_breaks and set it equal to 0
        if skip button is pressed then increment short_break += 1
        once short_break equals 4 then call the long break function
     */
}

function sounds() {
    /*
        Create an object for 3 songs
        use Math.random to select a random song
    
    */
}

document.getElementById('main_pause').addEventListener('click', playClick);