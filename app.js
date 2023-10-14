let hours = 0;
let minutes = 0;
let second = 0;
let millisecond = 0;
let intervel;
const dive = document.querySelectorAll('.dive')[0];
const startButton = document.querySelector('.startButton');
const stopButton = document.querySelector('.stopButton');
const resetButton = document.querySelector('.resetButton');




const incrementTime = () => {

    millisecond += 10;
    if (millisecond >= 100) {
        millisecond = 0;
        second += 1;
        if (second >= 60) {
            second = 0
            minutes += 1;
            if (minutes >= 60) {
                minutes = 0;
                hours += 1;
            }
        } 
    } 
    updateDisplay();
};




startButton.addEventListener('click' , ()=> {
    intervel = setInterval(incrementTime);
    // console.log(intervel);
    startButton.disabled = true;
    window.addEventListener('load', () => {
        dive.style.animation = 'glow 1s ease-in-out infinite alternate';})
} )

stopButton.addEventListener('click' , ()=> {
    clearInterval(intervel);
    // console.log(intervel);
    startButton.disabled =false;
})


resetButton.addEventListener('click' , () =>{
    clearInterval(intervel);
    hours = 0;
    minutes = 0;
    second = 0;
    millisecond = 0;
    updateDisplay();
   startButton.disabled = false;
//   console.log(intervel);
})

const updateDisplay = () => {
    dive.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${millisecond.toString().padStart(2, '0')}`;
};

