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

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  pickComputerMove();
  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissor") {
      result = "Tie";
    }
    alert(
      `You picked ${playerMove}. Computer picked ${computerMove}, ${result}`
    );
  } else if (playerMove === "paper") {
    pickComputerMove();
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "You lose";
    }

    alert(
      `You picked ${playerMove}. Computer picked ${computerMove}, ${result}`
    );
  } else if (playerMove === "rock") {
    pickComputerMove();

    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissor") {
      result = "You win";
    }

    alert(
      `You picked ${playerMove}. Computer picked ${computerMove}, ${result}`
    );
  }
}
