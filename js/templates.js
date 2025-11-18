// Faz com que haja uma página para cada pergunta. O export possibilita a importação para o quiz.js.

export function createQuestionTemplate(questionObj) {
    // .map utilizado para loop das option
    const optionsHtml = questionObj.options.map((option, index) => `
    <div class="option">
        <input type="radio" id="option${index}" name="answer" value="${option}" required>
        <label for="option${index}">${option}</label>
        </div>
        `).join(''); //.join utilizado para junta tudo em uma única string

        // Retorna o molde completo da pergunta com as opções 
        return `
            <div class="quiz-question">
                <h3>${questionObj.question}</h3>
                <form id="quiz-form">
                    <div class="options-container">${optionsHtml}</div>
                    <button type="submit" id="next-question-btn">Próxima</button>
                </form>
            </div>
        `;
}

// Faz com que haja uma página apenas de resultados
export function createResultsTemplate(score, total) {
    return `
    <div class="quiz-results">
        <h2>Quiz Finalizado!</h2>
        <p>Você acertou <strong>${score}</strong> de <strong>${total}</strong> perguntas!</p>
        <a href="quiz.html" class="btn-try-again">Tentar Novamente</a>
    </div>
    `;
}