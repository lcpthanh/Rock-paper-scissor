// Start button function
const startGame = () => {
  // console.log("click");
  document.getElementById("game").style.display = "none";
  document.getElementById("playGame").style.display = "flex";
  document.getElementById("startBtn").style.opacity = "0%";
  document.getElementById("backBtn").style.opacity = "100%";
  document.querySelector("html").style.backgroundColor = "white";
  document.getElementById("removeBG").style.background = "none";
};

// Back button function
const backGame = () => {
  // console.log("click");
  document.getElementById("game").style.display = "flex";
  document.getElementById("playGame").style.display = "none";
  document.getElementById("startBtn").style.opacity = "100%";
  document.getElementById("backBtn").style.opacity = "0%";
  document.querySelector("html").style.backgroundColor = "#E9C93F";
};

// Add number of round
const addRound = () => {
  let round = parseInt(document.getElementById("round-choice").innerText);
  if (round < 10) {
    round = round + 1;
  }
  document.getElementById("round-choice").innerHTML = "<h1>" + round + "</h1>";
};

// Reduce number of round
const minusRound = () => {
  let round = parseInt(document.getElementById("round-choice").innerText);
  if (round > 0) {
    round = round - 1;
  }
  document.getElementById("round-choice").innerHTML = "<h1>" + round + "</h1>";
};

// Add number of timer
const addTimer = () => {
  let timer = parseInt(document.getElementById("timer-choice").innerText);
  if (timer < 15) {
    timer = timer + 1;
  }
  document.getElementById("timer-choice").innerHTML = "<h1>" + timer + "</h1>";
};

// Reduce number of timer
const minusTimer = () => {
  let timer = parseInt(document.getElementById("timer-choice").innerText);
  if (timer > 0) {
    timer = timer - 1;
  }
  document.getElementById("timer-choice").innerHTML = "<h1>" + timer + "</h1>";
};

// Complete logic of game inside this function
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice);

        // Calling gameOver function after 10 moves
        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  // Function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Computer: " + computer.toUpperCase() + ".Tie";
    } else if (
      (player == "rock" && computer == "paper") ||
      (player == "paper" && computer == "scissors") ||
      (player == "scissors" && computer == "rock")
    ) {
      result.textContent =
        "Computer: " + computer.toUpperCase() + ". Computer Won";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent =
        "Computer: " + computer.toUpperCase() + ". Player Won";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  };

  // Function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Game Over!!";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Won The Game";
      result.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Lost The Game";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Tie";
      result.style.color = "grey";
    }
    reloadBtn.innerText = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  // Calling playGame function inside game
  playGame();
};

// Calling the game function
// game();
