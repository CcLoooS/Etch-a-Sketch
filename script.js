// Simple layout
// 3 Different Functions: Different colors, Different size grid, and Reset or Clear the grid
// 16 X 16 Grid to start, than resized by either a prompt, or a selector.
// When square is clicked, it will trigger a function in javascript. we will use DOM manipulation methods.

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const box = document.querySelector('.box');
  const div = document.createElement('div');
  div.addEventListener("mouseover", changeColor);
  box.appendChild(div);
}
let isMouseDown;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

function randomColor() {

const randomRed = Math.floor(Math.random() * 255);
const randomGreen = Math.floor(Math.random() * 255);
const randomBlue = Math.floor(Math.random() * 255);
//create the string that is the ‘random color’
const randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

  return randomColor;
}

function changeColor() {
  if (!isMouseDown) 
    return;

  if (setting === "rgb") {
    this.style.backgroundColor = randomColor();
    return;
  } else if (setting === "regular") {
    this.style.backgroundColor = "DimGray";
    return;
  } else if (setting === "eraser") {
    this.style.backgroundColor = "white";
    return;
  }
}

const regularMode = document.getElementById('regular')
regularMode.addEventListener("click", () => {
  setting = "regular";
});

const rgbMode = document.getElementById('rgb')
rgbMode.addEventListener("click", () => {
  setting = "rgb";
});

const eraserMode = document.getElementById('eraser')
eraserMode.addEventListener("click", () => {
  setting = "eraser";
});
