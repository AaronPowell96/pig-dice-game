/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice, gamePlaying

const diceImage = document.querySelector(".dice");

newGame();

function getCurrentScore() {
  return document.querySelector("#current-" + activePlayer);
}

const btnRoll = document.querySelector(".btn-roll");

btnRoll.addEventListener("click", () => {
  if (gamePlaying) {
    let playerCurrentScore = getCurrentScore();
    dice = Math.floor(Math.random() * 6) + 1;
    diceImage.setAttribute("src", `images/dice-${dice}.png`);
    diceImage.style.display = "block";
    if (dice !== 1) {
      roundScore += dice;
      playerCurrentScore.textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

const btnHold = document.querySelector(".btn-hold");

btnHold.addEventListener("click", () => {
  if (gamePlaying) {
    //Add current score to global score;
    scores[activePlayer] += roundScore;
    //Update UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    //Check if player has won
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "WINNER";
      diceImage.style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
})

function nextPlayer() {
  let playerCurrentScore = getCurrentScore();
  roundScore = 0;
  playerCurrentScore.textContent = 0;
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle("active");
  activePlayer ? activePlayer = 0 : activePlayer = 1;
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle("active");
  diceImage.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", newGame);

function newGame() {
  gamePlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#current-0").textContent = "0";
  diceImage.style.display = "none";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function array() {
  return [0, 1, 2, 3, 4];
}

for (let n in array()) {
  console.log(n);
}

let object = { a: 1, b: 2, c: 3 };

for (let value in object)
  console.log(value, object[value]);