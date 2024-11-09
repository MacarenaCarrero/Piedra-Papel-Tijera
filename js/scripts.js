const rulesElement = document.getElementById("rules");
const modalElement = document.getElementById("modal");

const showModal = () => {
  modalElement.classList.add("modalRules-show");
};

const hideModal = () => {
  modalElement.classList.remove("modalRules-show");
};

rulesElement.addEventListener("click", showModal);
modalElement.addEventListener("click", hideModal);
