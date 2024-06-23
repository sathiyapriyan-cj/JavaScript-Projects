'use strict';

let secret_number = Math.trunc(Math.random() * 20) + 1;

let score_number = 20; // it is  so-called application state which is basically all the data that is relevant this application

console.log(secret_number);

let high_score = 0;

document.querySelector('.again').addEventListener('click', function () {
  // Reset the secret number to a new random number
  secret_number = Math.trunc(Math.random() * 20) + 1;

  // Reset the score to the initial state
  score_number = 20;

  // Reset the message text to the initial state
  document.querySelector('.message').textContent = 'Start guessing...';

  // Reset the score to the initial state
  document.querySelector('.score').textContent = score_number;

  // Reset the guess to the initial state
  document.querySelector('.guess').value = '';

  // Reset the number element to the initial state
  document.querySelector('.number').textContent = '?';

  // Reset the background color of the body to the initial state
  document.querySelector('body').style.backgroundColor = '#222';

  // Reset the width of the number element to the initial state
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secret_number) {
    document.querySelector('.message').textContent = '🛫 Correct Number!';

    // visible only for winners

    document.querySelector('.number').textContent = secret_number;

    // CSS styles

    document.querySelector('body').style.backgroundColor = 'green';
    // document.querySelector('.number').style.width = '30rem'; // it should be string
    document.querySelector('body').style.backgroundColor = 'green';

    // high score
    if (score_number > high_score) {
      high_score = score_number;
      document.querySelector('.highscore').textContent = high_score;
    }
  } else if (guess > secret_number) {
    if (score_number > 1) {
      document.querySelector('.message').textContent = '🔼 Too high!';
      score_number--;
      document.querySelector('.score').textContent = score_number;
    } else {
      document.querySelector('.message').textContent = '💠 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret_number) {
    if (score_number > 1) {
      document.querySelector('.message').textContent = '🔽 Too low!';
      score_number--;
      document.querySelector('.score').textContent = score_number;
    } else {
      document.querySelector('.message').textContent = '💠 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
