const questions = [
    {
        questions: "What is a correct syntax to output 'Hello World' in Java?",
        answers: [
            {text: "System.out.println('Hello World');", correct: true},
            {text: "echo('Hello World');", correct: false},
            {text: "Console.WriteLine('Hello World');", correct: false},
            {text: "cout<<'Hello World;", correct: false}
        ]
    },
    {
        questions: "Which among the following is the shortcut key to Zoom in window?",
        answers: [
            {text: "Shift + [+]", correct: false},
            {text: "Win + [+]", correct: true},
            {text: "Win + F4", correct: false},
            {text: "Alt + [+]", correct: false}
        ]
    },
    {
        questions: "Which among the following correctly defines the term ‘Virtual Memory'?",
        answers: [
            {text: "Server memory", correct: false},
            {text: "Secondary storage memory/hard disk", correct: true},
            {text: "Flash Drive", correct: false},
            {text: "Random Access Memory", correct: false}
        ]
    },
    {
        questions: "Which among the following is not correctly defines a functional domain name?",
        answers: [
            {text: ".net", correct: false},
            {text: ".org", correct: false},
            {text: ".gov", correct: false},
            {text: ".god", correct: true}
        ]
    },
    {
        questions: "Which data type is used to create a variable that should store text?",
        answers: [
            {text: "myString", correct: false},
            {text: "Txt", correct: false},
            {text: "string", correct: false},
            {text: "String", correct: true}
        ]
    },
    {
        questions: "How do you create a variable with the numeric value 5?",
        answers: [
            {text: "num x = 5", correct: false},
            {text: "int x = 5;", correct: true},
            {text: "float x = 5;", correct: false},
            {text: "x = 5;", correct: false}
        ]
    },
    {
        questions: "How do you create a variable with the floating number 2.8?",
        answers: [
            {text: "int x = 2.8f", correct: false},
            {text: "x = 2.8f;", correct: false},
            {text: "byte x = 2.8f;", correct: false},
            {text: "float x = 2.8f;", correct: true}
        ]
    },
    {
        questions: "Which method can be used to find the length of a string?",
        answers: [
            {text: "len()", correct: false},
            {text: "getLength()", correct: false},
            {text: "getSize()", correct: false},
            {text: "length()", correct: true}
        ]
    },
    {
        questions: "Which operator is used to add together two values?",
        answers: [
            {text: "The & sign", correct: false},
            {text: "The + sign", correct: true},
            {text: "The * sign", correct: false},
            {text: "None of the Above", correct: false}
        ]
    },
    {
        questions: "Which method can be used to return a string in upper case letters?",
        answers: [
            {text: "upperCase()", correct: false},
            {text: "touppercase", correct: false},
            {text: "tuc()", correct: false},
            {text: "toUpperCase()", correct: true}
        ]
    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
function showScore(){
    resetState();
    questionElement.innerHTML = `Score: ${score} / ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
startQuiz();

