const form = document.querySelector(".color-form");
const input = document.querySelector(".color");
const fullWidth = document.querySelector(".full-width");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const color = input.value.trim();

  if (color === "") {
    return alert("Please enter any color");
  }

  fullWidth.style.backgroundColor = color;
});
