const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const userInfo = {
    Email: elements.email.value.trim(),
    Password: elements.password.value.trim(),
  };
  console.log(userInfo);
  if (userInfo.Email === "" || userInfo.Password === "") {
    alert("All form fields must be filled in");
  }
  event.currentTarget.reset();
}

form.style = `display: flex; flex-direction: column; gap: 8px; max-width: 360px`;
const labelStyle = document.querySelectorAll("label");
labelStyle.forEach((el) => {
  el.classList.add("label");
  el.style = `display: flex; flex-direction: column; font-family: "Montserat"; font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0.04em; margin: 0`;
});
const inputStyle = document.querySelectorAll("input");
inputStyle.forEach((el) => {
  el.classList.add("input");
  el.style = `padding: 8px; border-radius: 8px; border: 1px solid #808080; opacity: 0.7 `;
});
const btn = document.querySelector("button");
btn.style = `display: flex; padding: 8px 16px; background-color: #4E75FF; color: #FFFFFF; border: none; border-radius: 8px; max-width: max-content;`;
