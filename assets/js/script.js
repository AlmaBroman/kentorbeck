//var for pop up
let popUp = document.getElementById("pop-up-box");
let popUpButton = document.getElementById("open-pop-up");
let popUpClose = document.getElementsByClassName("close-pop-up")[0];
//var for questions
let correctAnswer = document.getElementById("answer-is");
let questionTitle = document.getElementById("question-title");
let questionTransl = document.getElementById("question-transl");
let questionInfo = document.getElementById("answer-info");
//var for score/results
let currentNumberCorrect = document.getElementById("correct-answers");
let currentNumberWrong = document.getElementById("wrong-answers")
let numCorrect = 0;
let numWrong = 0;
//var for eventlisteners buttons
const startButton = document.getElementById("start-button");
const nextButton = document.getElementsByClassName("next-button")[0];
const questionButtons = document.getElementsByClassName("question-buttons")[0];
const restartButton = document.getElementById("restart-button");
const homeButton = document.getElementById("home-button");
const questionHeader = document.getElementById("question-header");
const resultMessage = document.getElementById("result-message");
//var for containers
const gameTitle = document.getElementsByClassName("game-title")[0];
const startPage = document.getElementsByClassName("start-page")[0];
const questionContainer = document.getElementsByClassName("question-container")[0];
const scoreContainer = document.getElementsByClassName("score-container")[0];
const answerContainer = document.getElementById("answer-container");
const resultContainer = document.getElementsByClassName("result-container")[0];
//var for options buttons
const kentButton = document.getElementById("opt-kent");
const beckButton = document.getElementById("opt-beck");

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
    questionButtons.classList.remove("hide");
    questionHeader.classList.remove("hide");
});

//Eventlisteners to show/hide e
//question buttons - hides buttons, shows answer.
questionButtons.addEventListener("click", function(){
    questionButtons.classList.add("hide");
    answerContainer.classList.remove("hide");
    compareAnswer();
    
});

//Next Button - hides answer-container
nextButton.addEventListener("click", function() {
    /** 
     * if last question do: 
     * answerContainer.classList.add("hide");
     * questionContainer.classList.add("hide");
     * scoreContainer.classList.add("hide");
     * gameTitle.classList.remove("hide");
     * resultContainer.classList.remove("hide");
     * else: 
     *  answerContainer.classList.add("hide");
     * questionButtons.classList.remove("hide");
     */
    
    /**if not last question */
    answerContainer.classList.add("hide");
    //questionContainer.classList.add("hide");
    //scoreContainer.classList.add("hide");
    questionHeader.classList.add("hide");
    gameTitle.classList.remove("hide");
    resultContainer.classList.remove("hide");
    resultMessage.classList.remove("hide");
});

//Restart button
restartButton.addEventListener("click", function() {
    resultContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    scoreContainer.classList.remove("hide");
    questionButtons.classList.remove("hide");
    gameTitle.classList.add("hide");
    questionHeader.classList.remove("hide");
    resultContainer.classList.add("hide");
    resultMessage.classList.add("hide");
});

// Home button
homeButton.addEventListener("click", function() {
    resultContainer.classList.add("hide");
    startPage.classList.remove("hide");
    resultContainer.classList.add("hide");
    resultMessage.classList.add("hide");
    questionContainer.classList.add("hide")
});

function runGame() {

};

/**
 * displays questions + transl + info + answer
 */
function displayQuestion() {
    questions.forEach( 
        (currentQuestion, questionNumber) => {
            
            //variables to store list items
            const name = [];
            const question = [];
            const info = [];
            const answer = [];
            
            questionTitle.innerHTML = currentQuestion.name;
            questionTransl.innerHTML = currentQuestion.transl;
            questionInfo.innerHTML = currentQuestion.info;
            correctAnswer.innerHTML = currentQuestion.answer;
    });
    //make array items appear in html
    /**
     * questionTitle.innerHTML = currentQuestion.name;
     * questionTransl.innerHTML = currentQuestion.transl;
     * questionInfo.innerHTML = currentQuestion.info;
     * correctAnswer.innerHTML = currentQuestion.answer;
     */
};
displayQuestion()
displayQuestion()

/**
 * compares answer(button) with correctAnswer
 * and counts correct/wrong answers
 */
function compareAnswer() {
    kentButton = 'Kent';
    beckButton = 'Beck';
    if (kentButton === correctAnswer.innerHTML || beckButton === correctAnswer.innerHTML){
        numCorrect ++;
    } else {
        numWrong ++;
    };
};
//compareAnswer()

//currentNumberCorrect.innerHTML = 'Correct answers: ' + numCorrect;
//currentNumberWrong.innerHTML = 'Wrong answers: ' + numWrong;

function displayStartPage() {

};

function displayAnswer() {

};

function displayScore() {

};

function displayResult() {

};

