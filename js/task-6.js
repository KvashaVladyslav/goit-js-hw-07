function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector("#boxes");
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const inputField = document.querySelector("input");

createBtn.addEventListener("click", () => {
  if (inputField.value > 0 && inputField.value <= 100) {
    createBoxes(inputField.value);
  } else {
    alert("Your amount is incorrect");
  }
});

destroyBtn.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  inputField.value = "";
});

function createBoxes(amount) {
  divBoxes.innerHTML = "";
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const createNewDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    divBoxes.insertAdjacentHTML("beforeend", createNewDiv);
    boxSize += 10;
  }
}
