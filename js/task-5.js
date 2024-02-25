function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const clickButton = document.querySelector(".change-color");
clickButton.addEventListener("click", () => {
  const bodyEl = document.querySelector("body");
  const pageColor = getRandomHexColor();
  bodyEl.style = `background-color: ${pageColor}`;
  const spanColor = document.querySelector(".color");
  spanColor.textContent = pageColor;
});

const boxStyle = document.querySelector(".widget");
boxStyle.style = `display: flex; flex-direction: column; gap: 16px; max-width: max-content; align-items: center;`;
const textStyle = document.querySelector(".widget p");
textStyle.style = `font-family: "Montserat"; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.04em; margin: 0;`;
console.log(textStyle);
clickButton.style = `padding: 8px 16px; border-radius: 8px; background-color: #4E75FF; color: #FFFFFF; cursor: pointer; border: none; max-width: max-content; font-family: "Montserat"; font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: 0.04em;`;
