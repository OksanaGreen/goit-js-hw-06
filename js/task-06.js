const inputEl = document.querySelector("#validation-input");
console.log(inputEl.getAttribute("data-length"));
inputEl.addEventListener("blur", colorCheng);
function colorCheng(evt) {
  console.log(evt.currentTarget.value);
  if (
    colorCheng.target.value.length ===
    Namber(inputEl.getAttribute("data-length"))
  ) {
    textInput.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
  }
}
