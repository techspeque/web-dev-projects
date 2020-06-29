let numSquares = 6;
let colors;
let pickedColor;

const squares = document.querySelectorAll(".square");
const h1 = document.querySelector("#header-main");
const colorDisplay = document.getElementById("colorDisplay");
const resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor; 
let message = document.querySelector("#message");
const modeButtons = document.querySelectorAll(".mode");

init();

function init(){

    // mode button listeners
    for (let index = 0; index < modeButtons.length; index++) {
        const button = modeButtons[index];
        button.addEventListener("click", () => {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");  
            button.classList.add("selected");
            (button.textContent === "easy") ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

    // generate squares with event listeners

    for (let index = 0; index < squares.length; index++) {

        // add initial colors to squares
        const square = squares[index];    
        // add event handlers to each square
        square.addEventListener("click", () =>{
            // grab color of clicked square and compare to picked
            const clickedColor = square.style.backgroundColor;
            if (clickedColor === pickedColor) {
                // correct
                message.textContent = "Correct!!!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again?"
            }else{
                // incorrect
                square.style.backgroundColor = "#232323";
                message.textContent = "Try again!"
            }
        });
    }

    reset();
}


function reset() {
    // generate new set of colors
    colors = generateRandomColors(numSquares);
    // pick a new winning color
    pickedColor = pickColor();
    // update the rgb color display on head
    colorDisplay.textContent = pickedColor; 

    // update squares to reflect new colors
    for (let index = 0; index < squares.length; index++) {

        // add initial colors to squares
        const square = squares[index];

        if(colors[index]){
            square.style.display = "block";
            square.style.backgroundColor = colors[index];
        }else{
            square.style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click", () => {
    reset();    
});


function changeColors(color) {
    // loop all squares
    for (let index = 0; index < squares.length; index++) {
        const square = squares[index];
        square.style.backgroundColor = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    
    let arr = []

    for (let index = 0; index < num; index++) {
        // get random color
        // push to array
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return ret = "rgb(" + r + ", " + g + ", " + b + ")";
}
