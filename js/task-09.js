function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector(".change-color");
const texColorEl = document.querySelector(".color");
changeColorEl.addEventListener("click", onbatton);
function onbatton(event) {
  const color = getRandomHexColor();
  texColorEl.textContent = color;
  document.body.style.backgroundColor = color;
}
