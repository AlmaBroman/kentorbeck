const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

        }
    );
};

function showResults(){};

//call the function
buildQuiz();

//On submit Show results
submitButton.addEventlistener('click', showResults)
