let popUp = document.getElementById("pop-up-box");
let popUpButton = document.getElementById("open-pop-up");
let popUpClose = document.getElementsByClassName("close-pop-up")[0];
const startButton = document.getElementById("start-button");
const gameTitle = document.getElementsByClassName("game-title")[0];
const startPage = document.getElementsByClassName("start-page")[0];
const questionContainer = document.getElementsByClassName("question-container")[0];
const scoreContainer = document.getElementsByClassName("score-container")[0];
const questionButtons = document.getElementsByClassName("question-buttons")[0];
const answerContainer = document.getElementById("answer-container");

//functions for pop up button
popUpButton.onclick = function() {
    popUp.style.display = "block";
}

popUpClose.onclick = function() {
    popUp.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
}

// Buttons to start the quiz.

//Start button - hides startpage and un-hides questions.
startButton.addEventListener("click", function() {
    gameTitle.classList.add("hide");
    startPage.classList.add("hide");
    questionContainer.classList.remove("hide");
    scoreContainer.classList.remove("hide");
});

questionButtons.addEventListener("click", function(){
    questionButtons.classList.add("hide");
    answerContainer.classList.remove("hide");
});


function checkAnswer() {

};

function calculateCorrectAnswer() {

};

function addToCorrectCount() {

};

function addToWrongCount() {
    
};

function displayStartPage() {

};

function displayquestion() {
    
};

function checkAnswer() {

};

function displayAnswer() {

};

function displayScore() {

};

function displayResult() {

};
