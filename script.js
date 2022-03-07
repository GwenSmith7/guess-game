'use strict';

// define secret number outside of the click event so number remains constant through the guesses
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// store the score in a variable
let score = 10;

// store highscore in a variable
let highscore = '' + 1;

// This is just a function expression -> select button class -> listen for event -> type of event -> what happens when the event happens (function)
document.querySelector('.check').addEventListener('click', function () {
  ////// VARIABLES ////////////

  // store the value of the guess text box in 'guess' variable
  let guess = Number(document.querySelector('.guess').value);

  //store the text message in the variable 'message'
  const message = document.querySelector('.message');

  // store hidden number in 'hiddenNum'
  let hiddenNum = (document.querySelector('.number').value = secretNumber);

  /////// END VARIABLES ///////

  // if there is no input show text
  if (!guess) {
    message.textContent = 'Not a number! Guess again';

    // comapring guess to hiddenNum
  } else if (guess === hiddenNum && score >= 1) {
    message.textContent = 'You Win!';

    // change the background colour
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // add to highscore
    document.querySelector('.highscore').textContent = highscore++;

    // display hidden number
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess !== hiddenNum) {
    if (score >= 1) {
      guess > hiddenNum
        ? (message.textContent = 'Too High!')
        : (message.textContent = 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.score').textContent = score = 0;
      message.textContent = 'YOU LOSE!!';
      // change the background colour
      document.querySelector('body').style.backgroundColor = 'red';
    }

    // OLD STUFF
    // } else if (guess > hiddenNum && score >= 1) {
    //   document.querySelector('.score').textContent = score--;
    //   document.querySelector('.guess').value = '';
    //   message.textContent = 'Too High!';
    // } else if (guess < hiddenNum && score >= 1) {
    //   document.querySelector('.score').textContent = score--;
    // } else {
    //   document.querySelector('.score').textContent = score = 0;
    //   message.textContent = 'YOU LOSE!!';

    // // change the background colour
    // document.querySelector('body').style.backgroundColor = 'red';
  }

  // if someone presses the again button
  document.querySelector('.again').addEventListener('click', function () {
    // reset message, score, and secret number
    message.textContent = 'Start guessing...';

    // reset the score
    score = 10;
    document.querySelector('.score').textContent = 10;

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // reset the guess box
    document.querySelector('.guess').value = '';

    // show question mark again
    document.querySelector('.number').textContent = '?';

    // set background color back to black
    document.querySelector('body').style.backgroundColor = 'black';
    console.log('again click');
  }); // end click event function for play again button
}); // end click event function that starts the game

// HOW TO SET THE GUESS BOX TO NOTHING ON RESET
