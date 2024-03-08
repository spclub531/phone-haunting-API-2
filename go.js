const display = document.querySelector('.display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const millisecondsFormatted = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}:${millisecondsFormatted}`;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 10); // Update every 10 milliseconds
    startBtn.disabled = true; // Disable start button after starting the timer
    stopBtn.disabled = false; // Enable stop button after starting the timer
}

function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false; // Enable start button after stopping the timer
    stopBtn.disabled = true; // Disable stop button after stopping the timer
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = formatTime(elapsedTime);
    startBtn.disabled = false; // Enable start button after resetting the timer
    stopBtn.disabled = true; // Disable stop button after resetting the timer
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
