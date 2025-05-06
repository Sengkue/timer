let timeLeft = 10;
const timerElement = document.getElementById('timer');

const countdown = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerElement.textContent = "Time's up!";
  }
}, 1000);
