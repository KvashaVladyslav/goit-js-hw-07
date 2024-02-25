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
