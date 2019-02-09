/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

const diceImage = document.querySelector(".dice");
diceImage.style.display = "none";

document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector("#current-1").textContent = "0";
document.querySelector("#current-0").textContent = "0";


const btnRoll = document.querySelector(".btn-roll");

btnRoll.addEventListener("click", () => {
  let playerCurrentScore = document.querySelector("#current-" + activePlayer);
  dice = Math.floor(Math.random() * 6) + 1;
  diceImage.setAttribute("src", `images/dice-${dice}.png`);
  diceImage.style.display = "block";
  if (dice !== 1) {
    roundScore += dice;
    playerCurrentScore.textContent = roundScore;
  } else {
    roundScore = 0;
    playerCurrentScore.textContent = 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle("active");
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle("active");
    diceImage.style.display = "none";
  }
})