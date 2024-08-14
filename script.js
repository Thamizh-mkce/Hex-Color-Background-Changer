const colorInput = document.getElementById("color-input");
const changeColorButton = document.getElementById("change-color");

changeColorButton.addEventListener("click", () => {
  const colorValue = colorInput.value;
  if (/^#[0-9A-F]{6}$/i.test(colorValue)) {
    document.body.style.backgroundColor = colorValue;
  } else {
    alert("Please enter a valid hex color code.");
  }
});
