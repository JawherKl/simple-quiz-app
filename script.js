const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    }
];

let currentQuestion = 0;
let score = 0;

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quiz.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}
        </label>
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selected = '';
    answers.forEach((answer) => {
        if (answer.checked) {
            selected = answer.value;
        }
    });
    return selected;
}

function showResult() {
    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
    submitBtn.style.display = "none";
}

submitBtn.addEventListener('click', () => {
    const answer = getSelectedAnswer();
    if (answer === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
});

loadQuiz();
