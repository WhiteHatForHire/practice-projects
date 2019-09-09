const coinArray = ["Heads", "Tails"];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
let score = [0, 0];

// adding event listeners
for (let i = 0; i < buttons.length; i++) {
  // console.log(buttons[i]);
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * 2);
  let computerGuess = coinArray[computerToss];
  console.log(playerGuess, computerGuess);
  if (playerGuess === computerGuess) {
    output = "Player Wins";
    //win
    score[0]++;
  } else {
    output = "Computer Wins";
    //loss
    score[1]++;
  }

  message.innerHTML = `
    Computer selected ${computerGuess}
    <br>
    Player selected ${playerGuess}
    <br>
    <strong>${output}</strong> 
    <br>
    Player ${score[0]} Computer ${score[1]}
    `;
}
