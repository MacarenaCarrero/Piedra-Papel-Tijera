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

const gameRules = {
  paper: {
    rock: true,
    scissors: false,
  },
  rock: {
    scissors: true,
    paper: false,
  },
  scissors: {
    paper: true,
    rock: false,
  },
};

const updateScore = () => {
  resultUserElement.textContent = counterUser;
  resultPcElement.textContent = counterPc;
};

const checkWinner = () => {
  if (userChoice === pcChoice) {
    resultTextElement.textContent = "EMPATE";
    return;
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
