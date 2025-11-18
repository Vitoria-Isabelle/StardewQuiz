// Função primária que vai ser chamada pelo router.js

export function initFormValidation() {
    const form = document.getElementById('feedback-form');
    if (!form) return; // Caso não encontre o formulário

    //Escutador de envio quando for encontrado formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Para que o formulário não recarregue a página

        // Puxa os input
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        let isValid = true;

        // Limpa os erros para validação novamente
        clearError(name);
        clearError(email);

        // Validação 
        if (name.value.trim() === '') {
            showError(name, 'O campo Nome é obrigatório.');
            isValid = false;
        }

        if (email.value.trim() === '') {
            showError(email, 'O campo Email é obrigatório.');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido.');
            isValid = false;
        }

        if (isValid) { 
            alert('Feedback enviado com sucesso!');
            form.reset();
        }
    });
}

// Para mostrar o erro
function showError(field, message) {
    field.classList.add('invalid');
    const errorId = `${field.id}-error`;
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
}

// Para limpar o erro
function clearError(field) {
    field.classList.remove('invalid');
    const errorId = `${field.id}-error`;
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = '';
}

// Regex para chegar a validade do email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}