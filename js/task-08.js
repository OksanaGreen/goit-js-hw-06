const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const formEmail = formElements.email.value;
  const formPassword = formElements.password.value;
  if (formEmail === "" || formPassword === "") {
    alert("All form fields must be completed");
    return;
  }
  console.log({ formEmail, formPassword });
  form.reset();
}
