'use strict';
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const currenrt1El = document.getElementById('current--1');

let curentScore, playing, activePlayer, scores;

score0El.textContent = 0;
score1El.textContent = 0;
const init = function () {
  curentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  currenrt1El.textContent = 0;

  diceEl.classList.add('hidden');
  player1el.classList.remove('player--winner');
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--active');
  player0el.classList.add('player--active');
};
init();
const swithPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  curentScore = 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};

diceEl.classList.add('hidden');
// rollong dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    // dispay dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);
    //check if num is 1,
    if (dice !== 1) {
      //add to the score
      curentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        curentScore;
    } else {
      //swithc to next player
      swithPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //add curr score to the player
  if (scores[activePlayer] < 10) scores[activePlayer] += curentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // check if score is >=100
  if (scores[activePlayer] >= 10) {
    playing = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    swithPlayer();
  }
});

btnNew.addEventListener('click', init);
