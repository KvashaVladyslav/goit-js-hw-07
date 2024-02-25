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

const bodyStyle = document.querySelector("body");
bodyStyle.style = `background-color" #FFFFFF;`;
const formBox = document.querySelector("#controls");
formBox.style = `display: flex; flex-direction: row; gap: 16px; padding: 32px; background-color: #F6F6FE; margin-bottom: 16px;`;
inputField.style = `display: flex; padding: 8px 72px; border: 1px solid #808080; border-radius: 8px; font-family: "Montserat"; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.04em; margin: 0; text-align: center;`;
createBtn.style = `display: flex; padding: 8px 32px; background-color: #4E75FF; color: #FFFFFF; gap: 10px; border: none; border-radius: 8px; font-family: "Montserat"; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0.04em`;
destroyBtn.style = `display: flex; padding: 8px 32px; background-color: #FF4E4E; color: #FFFFFF; gap: 10px; border: none; border-radius: 8px; font-family: "Montserat"; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0.04em`;
divBoxes.style = `display: flex; flex-direction: row; gap: 16px; padding: 32px; background-color: #F6F6FE;`;
