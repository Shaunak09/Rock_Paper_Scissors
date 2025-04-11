const choices = document.querySelectorAll(".choices");

let userScore = 0;
let computerScore = 0;

const userScoreText = document.querySelectorAll("#heading2");
const user1 = document.getElementById("user");
const comp1 = document.getElementById("comp");
const computerScoreText = document.querySelectorAll("#heading3");
const gameNotification = document.getElementById("GameNoti");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.alt.toLowerCase(); // e.g. "rock", "paper", "sissors"
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    showResult(result, userChoice, computerChoice);
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "sissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "rock" && computer === "sissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "sissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function showResult(result, user, computer) {
  if (result === "win") {
    userScore++;
    gameNotification.textContent = `✅ You WIN! ${user} beats ${computer}`;
  } else if (result === "lose") {
    computerScore++;
    gameNotification.textContent = `❌ You LOSE! ${computer} beats ${user}`;
  } else {
    gameNotification.textContent = `🤝 It's a DRAW! Both chose ${user}`;
  }

  user1.innerHTML = `Your score ${userScore}`;
  comp1.innerHTML = `Computer score ${computerScore}`;
}
