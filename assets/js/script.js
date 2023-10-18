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
const nextButton = document.getElementsByClassName("next-button")[0];
const resultContainer = document.getElementsByClassName("result-container")[0];
const restartButton = document.getElementById("restart-button");
const homeButton = document.getElementById("home-button");
const questions = [
    {
        name: 'Den Osynlige Mannen',
        transl: 'The Invisible Man',
        dirOrAlb: 'Kent',
        year: '1995',
        isSong: 'yes',
    },
    {
        name: 'Lockpojken',
        transl: 'The Decoy Boy',
        dirOrAlb: 'Pelle Seth',
        year: '1997',
        isSong: 'no',
    },
];

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
});

//question buttons - hides buttons, shows answer.
questionButtons.addEventListener("click", function(){
    questionButtons.classList.add("hide");
    answerContainer.classList.remove("hide");
});

//Next Button - hides answer-container
nextButton.addEventListener("click", function() {
    /** 
     * if not last question do: 
     * answerContainer.classList.add("hide");
     * questionButtons.classList.remove("hide");
    }*/
    answerContainer.classList.add("hide");
    questionContainer.classList.add("hide");
    scoreContainer.classList.add("hide");
    gameTitle.classList.remove("hide");
    resultContainer.classList.remove("hide");
});

//Restart button
restartButton.addEventListener("click", function() {
    resultContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    scoreContainer.classList.remove("hide");
    questionButtons.classList.remove("hide");
    gameTitle.classList.add("hide");
});

// Home button
homeButton.addEventListener("click", function() {
    resultContainer.classList.add("hide");
    startPage.classList.remove("hide");
});

/**
 * get questions from questions array
 * returns random question
 */
function randomQuestions(questions) {
    return questions[Math.floor(Math.random() * questions.length)];

    for (question of questions) {
    let questionTitle = question.name;
    let questionTransl = question.transl;
    let questionDirOrAlb = question.DirOrAlb;
    let questionYear = question.year;
    let questionIsSong = question.isSong;
}

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
