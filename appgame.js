// Start button function
const startGame = () => {
  document.getElementById("game").style.display = "none";
  document.getElementById("playGame").style.display = "flex";
  document.getElementById("counter").style.opacity = "100%";
  document.getElementById("startBtn").style.opacity = "0%";
  document.getElementById("startBtn").style.pointerEvents = "none";
  document.getElementById("backBtn").style.opacity = "100%";
  document.getElementById("backBtn").style.pointerEvents = "auto";
  document.querySelector("html").style.backgroundColor = "white";
  document.getElementById("removeBG").style.background = "none";
  document.querySelector(".movesleft").innerText =
    "Rounds Left: " + document.getElementById("round-choice").innerText;
  // Calling the game function
  game();
};

// Back button function
const backGame = () => {
  // console.log("click");
  window.location.reload();
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

// Click sound function
const audio = new Audio("Sound_files/click.mp3");
const buttons = document.querySelectorAll(".soundBtn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

// Complete logic of game inside this function
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  let round = parseInt(document.getElementById("round-choice").innerText);

  //   // Function to
  const playGame = () => {
    // Player random choice
    const randomChoice = () => {
      const options = ["rock", "paper", "scissors"];
      const playerChoiceNumber = Math.floor(Math.random() * 3);
      const computerChoiceNumber = Math.floor(Math.random() * 3);
      const playerRandom = options[playerChoiceNumber];
      const computerRandom = options[computerChoiceNumber];
      winner(playerRandom, computerRandom);
    };

    // Timer function
    const countDown = (timer) => {
      document.getElementById("counter").innerHTML = "<h2>Next Round</h2>";
      window.timeleft = setInterval(function () {
        if (timer <= 0) {
          clearInterval(window.timeleft);
          randomChoice();
        }
        document.getElementById("counter").innerHTML = "<h1>" + timer + "</h1>";
        timer -= 1;
      }, 1000);
    };

    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorBtn = document.getElementById("scissors");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const userTimer = document.getElementById("timer-choice").innerText;
        clearInterval(window.timeleft);
        countDown(userTimer);

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice);

        // Calling gameOver function after 10 moves
        if (moves == round) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  // Function to decide winner
  const winner = (player, computer) => {
    window.movesLeft = document.querySelector(".movesleft");
    moves++;
    window.movesLeft.innerText = `Rounds Left: ${round - moves}`;

    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorBtn = document.getElementById("scissors");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];

    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.innerHTML =
        "Computer: <b>" + computer.toUpperCase() + "</b>. Round <b>Ties</b>";
    } else if (
      (player == "rock" && computer == "paper") ||
      (player == "paper" && computer == "scissors") ||
      (player == "scissors" && computer == "rock")
    ) {
      result.innerHTML =
        "Computer: <b>" +
        computer.toUpperCase() +
        "</b>. Round Winner: <b>Computer</b>.";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.innerHTML =
        "Computer: <b>" +
        computer.toUpperCase() +
        "</b>. Round Winner: <b>Player</b>.";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
    if (moves == round) {
      gameOver(playerOptions, movesLeft);
    }
  };

  //   Function to run when game is over
  let winningsound = new Audio("Sound_files/TB7L64W-winning.mp3");
  winningsound.volume = 0.2;
  let losingsound = new Audio("Sound_files/ACYR47F-8bit-lose.mp3");
  losingsound.volume = 0.2;
  let tiesound = new Audio("Sound_files/V89QYW3-tie-game-horns.mp3");
  tiesound.volume = 0.2;
  const gameOver = (playerOptions, movesLeft) => {
    clearInterval(window.timeleft);
    const result = document.querySelector(".result");

    playerOptions.forEach((option) => {
      option.style.pointerEvents = "none";
    });

    document.getElementById("counter").innerHTML = "<h2>Game Over</h2>";
    movesLeft.style.opacity = "0";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Won The Game";
      result.style.color = "#308D46";
      winningsound.play();
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Lost The Game";
      result.style.color = "red";
      losingsound.play();
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Game Ties";
      result.style.color = "grey";
      tiesound.play();
    }
  };

  // Calling playGame function inside game
  playGame();
};
