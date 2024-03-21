function randomNum() {
  return Math.floor(Math.random() * 360 + 1);
}

console.log(randomNum);
function hslColor(color) {
  return (randomHsl = `hsl(${color}, 100%, 50%)`);
}

button = document.getElementById("button");

button.addEventListener("click", function () {
  document.body.style.backgroundColor = hslColor(randomNum());
  console.log(hslColor(randomNum));
  console.log(randomNum);
});
