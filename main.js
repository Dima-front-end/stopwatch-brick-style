const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.querySelector('#display');
let a = null;

startBtn.addEventListener('click', function() {
    if (a !== null) {
        clearInterval(a);
    }
    a = setInterval(displayTimer, 11);
});

pauseBtn.addEventListener('click', function() {
startBtn.innerText = 'Resume'
startBtn.style.color = "green"

pauseBtn.classList.add('none')
startBtn.classList.remove('none')
})

startBtn.addEventListener('click', function() {
    startBtn.innerText = 'start'
    startBtn.style.color = "black"

    pauseBtn.classList.remove('none')
    startBtn.classList.add('none')
})

resetBtn.addEventListener('click', function() {
    startBtn.innerText = 'start'
    startBtn.style.color = 'black'

    startBtn.classList.remove('none')
    pauseBtn.classList.add('none')
})


pauseBtn.addEventListener('click', function() {
    clearInterval(a);

});

resetBtn.addEventListener('click', function() {
    clearInterval(a);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    display.innerText = "00 : 00 : 00 : 000";
});

function displayTimer() {
    milliseconds+=9;

    if(milliseconds > 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;


    display.innerText = `${h} : ${m} : ${s} : ${ms}`;
}
