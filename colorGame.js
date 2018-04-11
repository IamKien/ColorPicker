var numSquares = 6;
// colors use to be generatesRandomColor(6), but was change to numSquare to keep track of Easy or Hard mode
var colors = [];
//create a loop to go through the squares and select all of them
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else if(this.textContent === "Medium"){
        numSquares = 6;
      } else {
        numSquares = 9;
      }
      reset();
    });
  }

}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    // add additional color to squares
    // squares[i].style.backgroundColor = colors[i]

    //add click listener to squares
    squares[i].addEventListener("click", function(){

    //grab color of click squares
    var clickedColor = this.style.backgroundColor;

    //compare color to picked color
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      resetButton.textContent = "Play Again";
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
     }
    });
  }
}

function reset(){
  colors = generatesRandomColor(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  //change color to display to match pick color
  colorDisplay.textContent = pickedColor;
  // change color of squares
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
  // add additional color to squares
    if(colors[i]){
      // use the block display to unhid it before looping so when you click hard mode, it will show it
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else{
      squares[i].style.display = "none";
    }
    
  }
    h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  //loop through all the squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  // Math.random generates a number between 0 and 1 in decimals
  // to get it to pick up to 6, we have to * it and add 1
  // we use Math.floor to make it an integer instead of decimals
  // since the # of squares change from 3 to 6, we use color.length

  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generatesRandomColor(num){
  //make an array
  var arr = []

  //add random num color to array
  for (var i = 0; i < num; i++){
    arr.push(randomColor());
  }

  //return array
  return arr;
}

function randomColor(){
  // pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}









