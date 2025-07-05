let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let isRunning = false;

const display = document.getElementById("display");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  isRunning = false;
  updateDisplay();
}

updateDisplay(); // initialize display
