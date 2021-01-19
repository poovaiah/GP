'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 69;
document.querySelector('.guess').value = 21;
console.log(document.querySelector('.guess').value);

*/

let ranNum = Math.floor(Math.random() * 20) + 1;

let score = 20;

console.log(score);

document.querySelector('.check').addEventListener('click', function () {
  const guess = parseInt(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number';
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Number should be below 20';
  } else if (guess === ranNum) {
    document.querySelector('.message').textContent =
      'You guessed it right! The secrect number is ' + guess + '!';
    document.querySelector('.number').textContent = ranNum;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > ranNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost. try again buddy';
      document.querySelector('.score').textContent = score;
    }
  } else if (ranNum > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost. try again buddy';
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
