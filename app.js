let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = {
    wins: 0,
    loss: 0,
    tie: 0,
  };
}

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  pickComputerMove();
  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissor") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    pickComputerMove();
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "You lose";
    }
  } else if (playerMove === "rock") {
    pickComputerMove();

    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissor") {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.loss += 1;
  } else if (result === "Tie") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon" alt="" />
  <img src="images/${computerMove}-emoji.png" class="move-icon" alt="" />
  Computer `;

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissor";
    }
    return computerMove;
  }
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, loss: ${score.loss}, tie: ${score.tie}`;
}
