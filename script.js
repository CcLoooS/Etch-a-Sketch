// Simple layout
// 3 Different Functions: Different colors, Different size grid, and Reset or Clear the grid
// 16 X 16 Grid to start, than resized by either a prompt, or a selector.
// When square is clicked, it will trigger a function in javascript. we will use DOM manipulation methods.

const cdiv = document.querySelector('.box');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.addEventListener("click", changeColor);
  div.addEventListener("mouseover", changeColor);
  cdiv.appendChild(div);

}

let isMouseDown;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

function changeColor(event) {
    if(!isMouseDown) 
    return; this.style.backgroundColor = randomColor();
}

function randomColor() {

const randomRed = Math.floor(Math.random() * 255);
const randomGreen = Math.floor(Math.random() * 255);
const randomBlue = Math.floor(Math.random() * 255);
//create the string that is the ‘random color’
const randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

return randomColor;
}

