let millisecond = 0;
let second = 0;
let minutes = 0;
let hours = 0;

let interval;
const dive = document.querySelectorAll('.dive')[0];
const startButton = document.querySelector('.startButton');
const stopButton = document.querySelector('.stopButton');
const resetButton = document.querySelector('.resetButton');

const incrementTime = () => {
    millisecond += 1; 
    if (millisecond >= 25) {
        millisecond = 0;
        second += 1;
        if (second >= 60) {
            second = 0;
            minutes += 1;
            if (minutes >= 60) {
                minutes = 0;
                hours += 1;
            }
        } 
    } 
    updateDisplay();
};

startButton.addEventListener('click', () => {
    if (!interval) { // Prevent multiple intervals
        interval = setInterval(incrementTime, 40); 
        startButton.disabled = true;
        dive.style.animation = 'glow 1s ease-in-out infinite alternate';
    }
});

stopButton.addEventListener('click', () => {
    if (interval) { 
        clearInterval(interval);
        interval = null;
        startButton.disabled = false;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null; 
    hours = 0;
    minutes = 0;
    second = 0;
    millisecond = 0;
    updateDisplay();
    startButton.disabled = false;
});

const updateDisplay = () => {
    dive.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${millisecond.toString().padStart(2, '0')}`;
};