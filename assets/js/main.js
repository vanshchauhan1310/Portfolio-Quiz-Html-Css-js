const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// --- Quiz ---

const questions = [
    {
        question: "Which tag is used to define an unordered list in HTML?",
        answers: [
            {text: "ul",  correct: true},
            {text :"ol", correct: false},
            {text :"li", correct: false},
            {text :"dl", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            {text: "text-style",  correct: false},
            {text :"font-color", correct: false},
            {text :"text-color", correct: false},
            {text :"color", correct: true},
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Creative Style Sheets",  correct: false},
            {text :"Computer Style Sheets", correct: false},
            {text :"Cascading Style Sheets", correct: true},
            {text :"Colorful Style Sheets", correct: false},
        ]
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            {text: "String",  correct: false},
            {text :"Integer", correct: true},
            {text :"Boolean", correct: false},
            {text :"Undefined", correct: false},
        ]
    },
    {
        question: "What does DOM stand for in JavaScript?",
        answers: [
            {text: "Document Object Model",  correct: true},
            {text :"Data Object Model", correct: false},
            {text :"Document Order Model", correct: false},
            {text :"Document Offset Model", correct: false},
        ]
    },
    {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        answers: [
            {text: "push()",  correct: true},
            {text :"append()", correct: false},
            {text :"addToEnd()", correct: false},
            {text :"addElement()", correct: false},
        ]
    },
    {
        question: "Which HTML attribute is used to specify an external JavaScript file?",
        answers: [
            {text: "href",  correct: false},
            {text :"src", correct: true},
            {text :"script", correct: false},
            {text :"link", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        answers: [
            {text: "margin",  correct: true},
            {text :"padding", correct: false},
            {text :"space", correct: false},
            {text :"gap", correct: false},
        ]
    },
    {
        question: "What is Node.js primarily used for?",
        answers: [
            {text: "Front-end development",  correct: false},
            {text :"Database management", correct: false},
            {text :"Server-side scripting", correct: true},
            {text :"Graphics rendering", correct: false},
        ]
    },
    {
        question: "Which npm command is used to install dependencies listed in the package.json file?",
        answers: [
            {text: "npm add",  correct: false},
            {text :"npm install", correct: true},
            {text :"npm update", correct: false},
            {text :"npm require", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    nextbutton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        return displayScore();
    }

    let currenQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currenQuestion.question;

    answerButtons.innerHTML = '';

    currenQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');

        button.addEventListener('click', function() {
            if (answer.correct) {
                score++;
            }

            currentQuestionIndex++;
            showQuestion();
        });

        answerButtons.appendChild(button);
    });
}

function displayScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    answerButtons.innerHTML = '';
    nextbutton.style.display = "block";
    nextbutton.innerHTML = "Play Again";
    nextbutton.addEventListener('click', startQuiz);
}

startQuiz();