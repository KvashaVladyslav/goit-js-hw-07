const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = inputValue;
  }
});

// textInput.style = `display: flex; padding: 8px 16px; border-radius: 8px; border: 1px solid #808080; color: #2E2F42; font-family: "Montserat"; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.04em; margin: 0;`;
