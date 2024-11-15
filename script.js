let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);

  let formattedHours = hours.toString().padStart(2, '0');
  let formattedMinutes = minutes.toString().padStart(2, '0');
  let formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startStop() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById("time-display").textContent = timeToString(elapsedTime);
    }, 1000);
    document.getElementById("start-stop-btn").textContent = "Pause";
    isRunning = true;
  } else {
    clearInterval(timerInterval);
    document.getElementById("start-stop-btn").textContent = "Start";
    isRunning = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById("time-display").textContent = "00:00:00";
  document.getElementById("start-stop-btn").textContent = "Start";
  elapsedTime = 0;
  isRunning = false;
  document.getElementById("lap-times").innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = timeToString(elapsedTime);
    const lapContainer = document.getElementById("lap-times");
    const lapElement = document.createElement("div");
    lapElement.className = "lap-time";
    lapElement.textContent = `Lap: ${lapTime}`;
    lapContainer.appendChild(lapElement);
  }
}
