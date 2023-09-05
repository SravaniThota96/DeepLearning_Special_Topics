let workTime = 25;
let breakTime = 5;
let isWorking = true;
let isRunning = false;
let interval;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const workTimeInput = document.getElementById('work-time');
const breakTimeInput = document.getElementById('break-time');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
workTimeInput.addEventListener('change', updateWorkTime);
breakTimeInput.addEventListener('change', updateBreakTime);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    isWorking = true;
    minutesElement.textContent = workTime;
    secondsElement.textContent = '00';
}

function updateTimer() {
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);

    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if (minutes < 0) {
        isWorking = !isWorking;
        minutes = isWorking ? workTime : breakTime;
    }

    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
}

function updateWorkTime() {
    workTime = parseInt(workTimeInput.value);
    if (isWorking) {
        minutesElement.textContent = workTime;
        secondsElement.textContent = '00';
    }
}

function updateBreakTime() {
    breakTime = parseInt(breakTimeInput.value);
    if (!isWorking) {
        minutesElement.textContent = breakTime;
        secondsElement.textContent = '00';
    }
}
