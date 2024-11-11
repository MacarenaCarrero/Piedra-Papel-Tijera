const rulesElement = document.getElementById("rules");
const modalElement = document.getElementById("modal");

const iconsElement = document.getElementById("icons");
const resultPcElement = document.getElementById("resultPc");
const resultUserElement = document.getElementById("resultUser");
const pcOptions = ["scissors", "paper", "rock"];
let userChoice;
let pcChoice;
let counterUser = 0;
let counterPc = 0;

const updateScore = () => {
  resultUserElement.textContent = counterUser;
  resultPcElement.textContent = counterPc;
};

const checkWinner = () => {
  if (userChoice === pcChoice) {
  }

  if (
    (userChoice === "scissors" && pcChoice === "paper") ||
    (userChoice === "paper" && pcChoice === "rock") ||
    (userChoice === "rock" && pcChoice === "scissors")
  ) {
    counterUser++;
  } else if (
    (userChoice === "paper" && pcChoice === "scissors") ||
    (userChoice === "rock" && pcChoice === "paper") ||
    (userChoice === "scissors" && pcChoice === "rock")
  ) {
    counterPc++;
  }

  console.log(userChoice, pcChoice);
  updateScore();
};

const setPcChoice = () => {
  const randomPosition = Math.floor(Math.random() * pcOptions.length);

  pcChoice = pcOptions[randomPosition];
  checkWinner();
};

const setUserChoice = (event) => {
  if (event.target.id === "icons") {
    return;
  }
  userChoice = event.target.dataset.icon;
  setPcChoice();
};

const showModal = () => {
  modalElement.classList.add("modalRules-show");
};

const hideModal = () => {
  modalElement.classList.remove("modalRules-show");
};

iconsElement.addEventListener("click", setUserChoice);
rulesElement.addEventListener("click", showModal);
modalElement.addEventListener("click", hideModal);
