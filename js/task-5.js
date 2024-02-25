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
