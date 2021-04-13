const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const secondsOne = document.getElementById("secondsOne");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");
const fiveMinute = document.getElementById("fiveMinute");
const oneMinute = document.getElementById("oneMinute");
const minimizeFive = document.getElementById("minimizeFive");
const minimizeOne = document.getElementById("minimizeOne");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`December 31 ${currentYear} 00:00:00`);

// Set background year
year.innerText = currentYear;

// Update Countdown time
function updateCountdownFive() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 5;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  // days.innerHTML = d;
  // hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  if (m === 4) {
    fiveMinute.style.background = "blue";
    fiveMinute.style.color = "white";
  } else if (m === 3) {
    fiveMinute.style.background = "purple";
  } else if (m === 2) {
    fiveMinute.style.background = "magenta";
  } else if (m === 1) {
    fiveMinute.style.background = "orange";
  } else if (m === 0 && s >= 30) {
    fiveMinute.style.background = "yellow";
    fiveMinute.style.color = "black";
  } else if (m === 0 && s <= 30) {
    fiveMinute.style.background = "white";
    fiveMinute.style.color = "black";
  }
}
// Update Countdown time One Minute
function updateCountdownOne() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  secondsOne.innerHTML = s < 10 ? "0" + s : s;

  if (s >= 51) {
    oneMinute.style.background = "blue";
    oneMinute.style.color = "white";
  } else if (s >= 41) {
    oneMinute.style.background = "purple";
  } else if (s >= 31) {
    oneMinute.style.background = "magenta";
  } else if (s >= 21) {
    oneMinute.style.background = "orange";
  } else if (s >= 11) {
    oneMinute.style.background = "yellow";
    oneMinute.style.color = "black";
  } else if (s >= 0) {
    oneMinute.style.background = "white";
    oneMinute.style.color = "black";
  }
}

// Clear h1
function clearTitle() {
  minimizeOne.innerHTML = "";
  minimizeFive.innerHTML = "";
  minutes.style.fontSize = "250%";
  seconds.style.fontSize = "250%";
  secondsOne.style.fontSize = "250%";
}

// Restore h1
function restoreTitle() {
  minimizeOne.innerHTML = "1 Minute";
  minimizeFive.innerHTML = "5 Minute";
  minutes.style.fontSize = "150%";
  seconds.style.fontSize = "150%";
  secondsOne.style.fontSize = "150%";
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Event Listeners
minimizeFive.addEventListener("click", clearTitle);
minimizeOne.addEventListener("click", clearTitle);
minutes.addEventListener("click", restoreTitle);
seconds.addEventListener("click", restoreTitle);
secondsOne.addEventListener("click", restoreTitle);

// Run every second
setInterval(updateCountdownFive, 1000);
setInterval(updateCountdownOne, 1000);
