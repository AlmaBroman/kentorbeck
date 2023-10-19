const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for(kentOrBeck in currentQuestion.answers){
                answers.push(
                    `<div class= "question-buttons">
                    <button name="question${questionNumber} value="kentOrBeck" class="question-button">
                    ${kentOrBeck}
                    </Button>`
                );
            }

            output.push(
                `<div class="name"> ${currentQuestion.Name}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults(){};

//call the function
buildQuiz();

//On submit Show results
submitButton.addEventlistener('click', showResults)
