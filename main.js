var colors =[generateRandomColors(6)];
var squares = document.getElementsByClassName("squares");
var rgbValueQuestion = document.getElementById("rgb-question-value");
var resultDialogue = document.getElementById("result-alert");
var easyBtn = document.querySelector(".difficulty-option-one");
var hardBtn = document.querySelector(".difficulty-option-two");
var bottomColumn = document.querySelectorAll(".squares-bottom");
var header = document.querySelector("header");
var resetBtn = document.getElementById("reset-game");
var scoreNumber = document.getElementById("score-number");
var navbar = document.getElementById("nav-container");
var headerBackgroundColor =  "rgb(0, 0, 58)";
navbar.style.backgroundColor=randomColorCreator();
//reset function
var isEasy;
function resetGame(nums){
    colors = generateRandomColors(nums);
    pickedColor = pickColor();
    rgbValueQuestion.innerHTML = pickedColor;
    for(i=0; i<colors.length; i++){
        //fills in colors
        squares[i].style.backgroundColor = colors[i];
    }
    // score = 0;
    header.style.background = "#003A60";
}
resetBtn.addEventListener("click", function(){
    // alert("yup");
    if(isEasy===true){
        resetGame(3);
    }
    else{
        resetGame(6);
    }
    header.style.background = "#003A60";
});

//TWO FUNCTIONS FOR EASY AND HARD MODE
function deleteBottomColumn(){
    for(i=0;i<bottomColumn.length;i++){
        bottomColumn[i].style.display="none";
    }
}
function addBottomColumn(){
    for(i=0;i<bottomColumn.length;i++){
        bottomColumn[i].style.display="block";
    }
}

//CREATES ONE RANDOM COLOR
function randomColorCreator(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var randomColorOutcome = "rgb(" +r +", "+g+", "+b+")";
    return randomColorOutcome;
}

//GENERATES MULTIPLE RANDOM COLORS
function generateRandomColors(elements){
    var arr=[];
    for(i=0; i<elements;i++){
        arr.push(randomColorCreator());
    }
    return arr;
}
//EASY OR HARD MODE
easyBtn.addEventListener("click", function(){
    isEasy = true;
    if(isEasy === true){
        easyBtn.style.backgroundColor = "rgb(255, 250, 108)";
        hardBtn.style.backgroundColor = "rgb(255, 255, 255)";
        // colors.length = 3;
        deleteBottomColumn();
        resetGame(3);
    }
    else {
        easyBtn.style.backgroundColor = "rgb(0, 0, 0)";
        colors = generateRandomColors(6);
    }
});
hardBtn.addEventListener("click", function(){
    resetGame(6);
    isEasy = false;
    addBottomColumn();
    hardBtn.style.backgroundColor = "rgb(255, 250, 108)";
    easyBtn.style.backgroundColor = "rgb(255, 255, 255)";
});
colors = generateRandomColors(6);

//PICKS RANDOM COLOR
function pickColor(){
    var randomColor = Math.floor(Math.random() * colors.length);
    // console.log("colors length = " + colors.length);
    // console.log("random color = " + colors[randomColor]);
    return colors[randomColor];
}
var pickedColor = pickColor();

rgbValueQuestion.innerHTML = pickedColor;

var score;
//COLOR FILLER & CHECKER
for(i=0; i<colors.length; i++){
    //fills in colors
    squares[i].style.backgroundColor = colors[i];
    //checks for similar colors
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            // alert("right");
            resultDialogue.innerHTML="CONGRATS! YOU GOT IT RIGHT!";
            header.style.backgroundColor=pickedColor;
            changeAllSquareColors();
            // score++;
            // scoreNumber.innerHTML = score;
            resetBtn.innerHTML = "Play Again?";
        }
        else{
            // alert("wrong");
            resultDialogue.innerHTML="Try Again Please!";
            this.style.backgroundColor= "rgb(16, 16, 16)";
            resetBtn.innerHTML = "Reset Game";
            // score = 0;
            // scoreNumber.innerHTML = score;
        }
    });
}
//ALL SQUARES TURN PICKED COLOR
function changeAllSquareColors(){
    for(i=0; i<colors.length; i++){
        squares[i].style.backgroundColor=pickedColor;
    }
}

