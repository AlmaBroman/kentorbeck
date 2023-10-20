//var for pop up
let popUp = document.getElementById("pop-up-box");
let popUpButton = document.getElementById("open-pop-up");
let popUpClose = document.getElementsByClassName("close-pop-up")[0];
//var for score/results
let numCorrect = 0;
let numWrong = 0;
const smile = document.getElementById("smile");
const skull = document.getElementById("skull");
//var for options buttons
const kentButton = document.getElementById("opt-kent");
const beckButton = document.getElementById("opt-beck");
//var for eventlistener buttons
const startButton = document.getElementById("start-button");
const nextButton = document.getElementsByClassName("next-button")[0];
const questionButtons = document.getElementsByClassName("question-buttons")[0];
const restartButton = document.getElementById("restart-button");
const homeButton = document.getElementById("home-button");
//var to show/hide elements
const gameTitle = document.getElementsByClassName("game-title")[0];
const startPage = document.getElementsByClassName("start-page")[0];
const questionContainer = document.getElementsByClassName("question-container")[0];
const scoreContainer = document.getElementsByClassName("score-container")[0];
const answerContainer = document.getElementById("answer-container");
const resultContainer = document.getElementsByClassName("result-container")[0];
const resultMessage = document.getElementById("result-message");
const questionHeader = document.getElementById("question-header");

//take first question from question array
let questionsIndex = 0;
let question = questions[questionsIndex];

//Hide startpage, show question.
startButton.addEventListener("click", function () {
    gameTitle.classList.add("hide");
    startPage.classList.add("hide");
    questionContainer.classList.remove("hide");
    scoreContainer.classList.remove("hide");
    questionButtons.classList.remove("hide");
    questionHeader.classList.remove("hide");
    getQuestion();
});

//hide question, show answer.
questionButtons.addEventListener("click", function () {
    questionButtons.classList.add("hide");
    answerContainer.classList.remove("hide");
    compareAnswer();
});

//get user answer
kentButton.addEventListener("click", function () {
    userAnswer = 'Kent';
});

beckButton.addEventListener("click", function () {
    userAnswer = 'Beck';
});

//hide answer, show next question/ show result + hide question header
nextButton.addEventListener("click", function () {
    answerContainer.classList.add("hide");
    questionsIndex++;
    if (questionsIndex < questions.length) {
        getQuestion();
        questionButtons.classList.remove("hide");
    } else {
        resultMessage.classList.remove("hide");
        resultContainer.classList.remove("hide");
        gameTitle.classList.remove("hide");
        questionHeader.classList.add("hide");
    }
});

//Show questions / hide results / reset quiz
restartButton.addEventListener("click", function () {
    resultContainer.classList.add("hide");
    gameTitle.classList.add("hide");
    resultContainer.classList.add("hide");
    resultMessage.classList.add("hide");
    questionContainer.classList.remove("hide");
    scoreContainer.classList.remove("hide");
    questionButtons.classList.remove("hide");
    questionHeader.classList.remove("hide");
    resetQuiz();
});

// show start page / hide result / reset quiz
homeButton.addEventListener("click", function () {
    //show startpage / hide result
    startPage.classList.remove("hide");
    resultContainer.classList.add("hide");
    resultMessage.classList.add("hide");
    questionContainer.classList.add("hide");
    resetQuiz();
});

//open pop up on button click
popUpButton.onclick = function () {
    popUp.style.display = "block";
};

//close pop up on x-mark click
popUpClose.onclick = function () {
    popUp.style.display = "none";
};

//close pop up when clicking outside pop up box
window.onclick = function (event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
};

/**
 * gets a question from questions(array) and puts in html
 */
function getQuestion() {
    question = questions[questionsIndex];
    document.getElementById("question-title").innerHTML = question.name;
    document.getElementById("question-transl").innerHTML = question.transl;
    document.getElementById("answer-info").innerHTML = question.info;
    document.getElementById("answer-is").innerHTML = question.answer;
}

/**
* compares user answer with answer and counts score
*/
function compareAnswer() {
    if (userAnswer === question.answer) {
        numCorrect++;
        //show smile icon hide skull icon
        smile.classList.remove("hide");
        skull.classList.add("hide");
    } else {
        numWrong++;
        //show skull icon hide smile icon
        skull.classList.remove("hide");
        smile.classList.add("hide");
    }
    currentScore();
}

/**
 * display current score
 */
function currentScore() {
    document.getElementById("wrong-answers").innerHTML = 'Wrong Answers: ' + numWrong;
    document.getElementById("correct-answers").innerHTML = 'Correct Answers: ' + numCorrect;
}

/**
 * start from first question and reset score
 */
function resetQuiz() {
    //start from first question
    questionsIndex = 0;
    question = questions[questionsIndex];
    getQuestion();
    //set correct/wrong answers count to zero
    numCorrect = 0;
    numWrong = 0;
    //display correct answers count
    currentScore();
}
