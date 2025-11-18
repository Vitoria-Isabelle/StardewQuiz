// Importação dos scripts de inicialização de outras páginas
import { startQuiz } from './quiz.js';
import { initFormValidation } from './validation.js';

// Possibilita a importação para o main.js
export function initRouter() {
    // Escutador para troca de páginas
    window.addEventListener('hashchange', handleRouteChange);
    // Escutador para rodar a tela inicio.html
    window.addEventListener('load', handleRouteChange);
}

async function handleRouteChange() {
    // Traz o hash da página
    const hash = window.location.hash.substring(1) || 'inicio';

    // Pega o main
    const appContent = document.getElementById('app-content');

    try {
        const response = await fetch(`pages/${hash}.html`); // Procura parte do HTML 
        if (!response.ok) throw new Error('Página não encontrada'); // Erro para o caso do arquivo não ser encontrado
        
        const html = await response.text(); // Pega o conteúdo de texto
        
        // Coloca o HTML da parte dentro do main
        appContent.innerHTML = html;

        // Liga o JavaScript da página
        if (hash === 'quiz') {
            startQuiz(); 
        } else if (hash === 'feedback') {
            initFormValidation(); 
        }

    } catch (error) {
        // Caso o try dê errado é mostrado uma mensagem
        console.error('Erro ao carregar página:', error);
        appContent.innerHTML = '<h2>Página não encontrada!</h2>';
    }
}