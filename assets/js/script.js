let popUp = document.getElementById("pop-up-box");
let popUpButton = document.getElementById("open-pop-up");
let popUpClose = document.getElementsByClassName("close-pop-up")[0];
const startButton = document.getElementById("start-button");
const gameTitle = document.getElementsByClassName("game-title")[0];
const startPage = document.getElementsByClassName("start-page")[0];
const questionContainer = document.getElementsByClassName("question-container")[0];
const scoreContainer = document.getElementsByClassName("score-container")[0];
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

/**
 * Gets a random question from questions array
 */
function randomQuestions(questions) {
    return questions[Math.floor(Math.random()*questions.length)];
}

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

/**
 * Button to start the quiz.
 * Hides startpage and un-hides questions.
 */
startButton.addEventListener("click", function() {
    gameTitle.classList.add("hide");
    startPage.classList.add("hide");
    questionContainer.classList.remove("hide");
    scoreContainer.classList.remove("hide");
});