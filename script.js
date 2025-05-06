let countdown; // To store the interval

function startTimer() {
  clearInterval(countdown); // Clear any previous timer
  const input = document.getElementById('timeInput');
  let timeLeft = parseInt(input.value);
  const timerElement = document.getElementById('timer');

  if (isNaN(timeLeft) || timeLeft <= 0) {
    timerElement.textContent = 'Enter a valid number';
    return;
  }

  timerElement.textContent = timeLeft;

  countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerElement.textContent = "Time's up!";
    }
  }, 1000);
}
