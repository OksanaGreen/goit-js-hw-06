const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const markup = ingredients.map((ingredient) => {
  const liIngredient = document.createElement("li");
  liIngredient.classList.add("item");
  liIngredient.textContent = ingredient;
  return liIngredient;
});
const ulIngredients = document.querySelector("ul");
ulIngredients.append(...markup);
