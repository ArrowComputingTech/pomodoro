// !!! JS
/*
    0. when play button is pressed then do stuff
    Default style for counter = work option
    1. Get option page options (variables)
    2. round donut needs to change colors corresponding with current option, red = work, short break = gree, long break = blue
    3. round numbers 1/4 needs to increment by 1 everytime we hit 00:00 (work)
    4. sound files
    5. volume control:https://www.w3schools.com/tags/av_prop_volume.asp    
    6. setInterval
*/

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

https://www.w3schools.com/howto/howto_js_countdown.asp

https://awwapp.com/b/uak6mtllt/

function playClick() {
    console.log('Pause Button');
    /* 
    Get time, start countdown
    Set countdown timer to 0 if not pausing, store value if paused
    */
    let seconds_counter = 0;
    let minutes_counter = work_time;
    
    
    setProgress(Math.max(work)/360 * (parseFloat(finish_time/start)));
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