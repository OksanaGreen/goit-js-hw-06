// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// nameInput.addEventListener("input", onTextInput);
// function onTextInput(event) {
//   nameOutput.textContent = event.currentTarget.value;
// }
// function onAddTextInput(event) {
//   let name = event.target.value;
//   if (name === "") {
//     name = "Anonymous";
//   }
//   spanEl.textContent = name;
// }
const refs = {
  input: document.querySelector("#name-input"),
  nemalabel: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", (event) => {
  refs.nemalabel.textContent = event.currentTarget.value;
  if (refs.nemalabel.textContent.length === 0) {
    refs.nemalabel.textContent = "Anonymous";
  }
});
