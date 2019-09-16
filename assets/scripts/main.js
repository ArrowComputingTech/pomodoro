// all this code is useless now :(

// // Get values for timer circle
// const circle = document.querySelector('.progress-ring__circle');
// const radius = circle.r.baseVal.value;
// const circumference = radius * 2 * Math.PI;
// // Use values for timer circle
// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = circumference;
// // Reduce offset for timer circle
// function setProgress(percent) {
//     const offset = (circumference - percent / 100  * circumference);
//     circle.style.strokeDashoffset = offset;
// }

// // !!! Create timer
// const work_time = document.getElementById('work');

// /*
// let count_seconds = setInterval(function() {
//     let now = new Date().getTime();
//     let distance = new Date(start + (start.getMinutes() + work_time.value));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// });
// */

// function playClick() {
//     console.log('Pause Button');
//     /* 
//     Get time, start countdown
//     Set countdown timer to 0 if not pausing, store value if paused
//     */
//     let seconds_counter = 0;
//     let minutes_counter = work_time;
    
    
//     setProgress(Math.max(work)/360 * (parseFloat(finish_time / start)));
// }

// function timerFunction() {
    
// }

// document.getElementById('main_pause').addEventListener('click', playClick);

// ^^ End useless code

/*
Table of Contents
    1. Pause and Play alternate
    2. Slide Menu

    SOMENUMBER. Event Listeners
*/

/*********************** 
Pause and Play Alternate
************************/
const playFunctions = {
    play: 'assets/images/play.svg',
    pause: 'assets/images/pause.svg'
}

// const play = document.getElementById('p');
const playButton = document.getElementById('play_button');
const pauseButton = document.getElementById('pause_button');

// function switchImage() {
//     if (play.src.endsWith(playFunctions.pause)) {
//         play.src = playFunctions.play;
//     } else {
//         play.src = playFunctions.pause;
//     }
// }

function play() {
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
}

function pause() {
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
}



/*********************** 
    Event Listeners
************************/
// play.addEventListener('click', switchImage)
playButton.addEventListener('click', play)
pauseButton.addEventListener('click', pause)


    /*
    let i = 0
        an object {
            img1: './assets/images/play.svg',
            img2: './assets/images/pause.svg'

        }
        i += 1
        i -= 1 
     */


// function switchThis(type) {
//     return play.src = type;
// }

// function foo() {

// }

// switchThis(playImages[image1]);





// http://jsfiddle.net/cCvtL/1/
