// script.js

const quizData = {
    simple: [
        {
            question: "What is the time complexity of binary search?",
            a: "O(n)",
            b: "O(log n)",
            c: "O(n^2)",
            d: "O(n log n)",
            correct: "b"
        },
        {
            question: "Which HTML tag is used to define an unordered list?",
            a: "&lt;ol&gt;",
            b: "&lt;ul&gt;",
            c: "&lt;li&gt;",
            d: "&lt;u&gt;",
            correct: "b"
        },
        {
            question: "What is the correct syntax for referring to an external script called 'script.js'?",
            a: "&lt;script src='script.js'&gt;",
            b: "&lt;script href='script.js'&gt;",
            c: "&lt;script link='script.js'&gt;",
            d: "&lt;script file='script.js'&gt;",
            correct: "a"
        },
        {
            question: "What does HTTP stand for?",
            a: "Hypertext Transfer Protocol",
            b: "Hypertext Transfer Product",
            c: "Hyper Textual Transfer Path",
            d: "High Transfer Protocol",
            correct: "a"
        },
        {
            question: "Which JavaScript method is used to convert an object to a string in JSON format?",
            a: "JSON.parse()",
            b: "JSON.stringify()",
            c: "JSON.objectify()",
            d: "JSON.string()",
            correct: "b"
        },
        // Additional questions for the simple category...
    ],
    medium: [
        {
            question: "What does SOLID stand for in software development principles?",
            a: "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion",
            b: "Single Optimization, Large Integration, Data handling",
            c: "System Overload, Lack of Documentation",
            d: "None of the above",
            correct: "a"
        },
        {
            question: "What is the main purpose of Docker?",
            a: "To build machine learning models",
            b: "To virtualize hardware",
            c: "To create isolated, reproducible application environments",
            d: "To develop native mobile applications",
            correct: "c"
        },
        {
            question: "Which HTTP method is idempotent?",
            a: "POST",
            b: "GET",
            c: "DELETE",
            d: "PATCH",
            correct: "b"
        },
        {
            question: "What is the purpose of the MVC design pattern?",
            a: "To provide a way to manage users",
            b: "To separate concerns in software architecture",
            c: "To optimize database queries",
            d: "To create responsive web applications",
            correct: "b"
        },
        {
            question: "In React, what is the difference between a class component and a functional component?",
            a: "Functional components are stateful while class components are stateless",
            b: "Functional components are stateless while class components can have state",
            c: "Both have the same capabilities",
            d: "Functional components cannot return JSX",
            correct: "b"
        },
        // Additional questions for the medium category...
    ],
    complex: [
        {
            question: "What is the best approach to optimize a database query with multiple joins?",
            a: "Use indexes on joined columns",
            b: "Use noSQL databases",
            c: "Denormalize the tables",
            d: "Use an ORM",
            correct: "a"
        },
        {
            question: "Explain the concept of a 'deadlock' in concurrent programming.",
            a: "When two threads wait on each other indefinitely to release resources",
            b: "When one thread uses all CPU resources",
            c: "When a program crashes due to stack overflow",
            d: "When garbage collection fails",
            correct: "a"
        },
        {
            question: "What is tail recursion, and how does it improve performance?",
            a: "A recursion where the recursive call is the last statement in the function, allowing optimizations",
            b: "Recursion that avoids base cases",
            c: "A recursive call that prevents memory overflow",
            d: "Recursion limited to sorting algorithms",
            correct: "a"
        },
        {
            question: "What is the primary difference between synchronous and asynchronous programming?",
            a: "Synchronous executes in sequence while asynchronous allows tasks to run concurrently",
            b: "Synchronous is faster than asynchronous",
            c: "Asynchronous doesn't require functions",
            d: "Synchronous cannot run functions",
            correct: "a"
        },
        {
            question: "What is the CAP theorem in distributed systems?",
            a: "Consistency, Availability, Partition Tolerance",
            b: "Consistency, Adaptability, Parallelism",
            c: "Concurrent Access, Partitioning, Time Complexity",
            d: "Concurrency, Adaptability, Partitioning",
            correct: "a"
        },
        // Additional questions for the complex category...
    ]
};

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let selectedQuestions = [];

// Function to select 10 random questions from each category
function selectQuestions() {
    const simpleQuestions = quizData.simple.sort(() => 0.5 - Math.random()).slice(0, 10);
    const mediumQuestions = quizData.medium.sort(() => 0.5 - Math.random()).slice(0, 10);
    const complexQuestions = quizData.complex.sort(() => 0.5 - Math.random()).slice(0, 10);

    selectedQuestions = [...simpleQuestions, ...mediumQuestions, ...complexQuestions].sort(() => 0.5 - Math.random());
}

// Function to load the current question
function loadQuiz() {
    const currentQuizData = selectedQuestions[currentQuestionIndex];
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
    updateProgress();
    startTimer();
}

// Function to start the countdown timer
function startTimer() {
    timeLeft = 30;
    timerEl.textContent = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswerAutomatically();
        }
    }, 1000);
}

// Function to automatically submit answer if time runs out
function submitAnswerAutomatically() {
    submitBtn.click();
}

// Function to get the selected answer
function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer;

    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.value;
        }
    });
    return answer;
}

// Function to update the progress display
function updateProgress() {
    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
}

// Function to submit the answer
function submitAnswer() {
    const answer = getSelectedAnswer();
    if (answer === selectedQuestions[currentQuestionIndex].correct) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer was ${selectedQuestions[currentQuestionIndex][selectedQuestions[currentQuestionIndex].correct]}`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

// Function to show the final result
function showResult() {
    clearInterval(timer);
    quiz.innerHTML = `<h2>You answered correctly ${score}/${selectedQuestions.length} questions.</h2>`;
    submitBtn.style.display = "none";
}

// Event listener for the submit button
submitBtn.addEventListener('click', submitAnswer);

// Initialize the quiz
function initQuiz() {
    selectQuestions();
    loadQuiz();
}

initQuiz();
