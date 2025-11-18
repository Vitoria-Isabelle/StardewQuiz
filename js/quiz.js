// É o que traz a parte do "jogo"

//  Importa perguntas e moldes
import { questions } from './dataquiz.js';
import { createQuestionTemplate, createResultsTemplate } from './templates.js';

// Variáveis de Estado
let currentQuestionIndex = 0;
let score = 0;
let quizContainer;

// Conexão com router.js
export function startQuiz() {
    currentQuestionIndex = 0;// Reseta para um jogo novo
    score = 0;
    quizContainer = document.getElementById('quiz-container'); // Conexão com pages/quiz.html

    if (!quizContainer) return; // O quiz para caso o container não seja encontrado

    displayQuestion(); // Primeira pergunta
}
// Pergunta atual
function displayQuestion() {
    const question = questions[currentQuestionIndex]; // Puxa as perguntas do dataquiz.js
    const questionHtml = createQuestionTemplate(question);
    quizContainer.innerHTML = questionHtml;

    // Escutador para o botão de Próxima Pergunta
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', handleAnswerSubmit); 
}

// Quando é clicado em próxima
function handleAnswerSubmit(event) {
    event.preventDefault(); 
    const selectedAnswer = document.querySelector('input[name="answer"]:checked'); // Puxa a resposta escolhida
    if (!selectedAnswer) return; 

    if (selectedAnswer.value === questions[currentQuestionIndex].answer) {
        score++; 
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) { // Verifica se já finalizou o quiz
        displayQuestion();
    } else {
        displayResults();
    }
}

// Tela de resultados
function displayResults() {
    const resultsHtml = createResultsTemplate(score, questions.length);
    quizContainer.innerHTML = resultsHtml;

    
    const tryAgainBtn = quizContainer.querySelector('.btn-try-again');
    tryAgainBtn.addEventListener('click', (e) => {
        e.preventDefault();
        startQuiz(); 
    });
}