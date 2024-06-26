'use strict';

// Helper function to set text content
const setTextContent = (selector, message) => {
  document.querySelector(selector).textContent = message;
};

// Helper function to set CSS styles
const setStyle = (selector, property, value) => {
  document.querySelector(selector).style[property] = value;
};

// Helper function to reset the game state
const resetGame = () => {
  secret_number = Math.trunc(Math.random() * 20) + 1;
  score_number = 20;
  setTextContent('.message', 'Start guessing...');
  setTextContent('.score', score_number);
  document.querySelector('.guess').value = '';
  setTextContent('.number', '?');
  setStyle('body', 'backgroundColor', '#222');
  setStyle('.number', 'width', '15rem');
};

// Helper function to update the score
const updateScore = () => {
  setTextContent('.score', score_number);
};

// Initialize game state
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score_number = 20;
let high_score = 0;

console.log(secret_number);

document.querySelector('.again').addEventListener('click', resetGame);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    setTextContent('.message', '⛔️ No number!');
  } else if (guess === secret_number) {
    setTextContent('.message', '🛫 Correct Number!');
    setTextContent('.number', secret_number);
    setStyle('body', 'backgroundColor', 'green');
    setStyle('.number', 'width', '30rem');

    if (score_number > high_score) {
      high_score = score_number;
      setTextContent('.highscore', high_score);
    }
  } else {
    if (score_number > 1) {
      setTextContent(
        '.message',
        guess > secret_number ? '🔼 Too high!' : '🔽 Too low!'
      );
      score_number--;
      updateScore();
    } else {
      setTextContent('.message', '💠 You lost the game!');
      setTextContent('.score', 0);
    }
  }
});
