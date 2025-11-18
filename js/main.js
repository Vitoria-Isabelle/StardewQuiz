// Importação da função initRouter do router.js.
import { initRouter } from './router.js';

// Evento que o escutador é adicionado para esperar o carregamento da página 
document.addEventListener('DOMContentLoaded', () => {
    initRouter(); // Ao carregar a página, dá início no roteador
});