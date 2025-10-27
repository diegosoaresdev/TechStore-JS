/* REQUISITO 3: Organização e clareza
    Usamos 'const' para variáveis que não mudam.
    Usamos nomes claros como 'buyButtons' e 'themeToggle'.
*/

// --- REQUISITO 2a: Alerta de Confirmação ---

// 1. Seleciona TODOS os botões de "Comprar"
const buyButtons = document.querySelectorAll('.product-card button');

// 2. Adiciona um "ouvinte" de clique para cada botão
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 3. Encontra o 'card' pai do botão
        const card = button.closest('.product-card');
        
        // 4. Encontra o 'h3' (nome do produto) dentro desse card
        const productName = card.querySelector('h3').textContent;

        // 5. Exibe o alerta com o nome do produto
        alert(`"${productName}" foi adicionado ao carrinho!`);
    });
});


// --- REQUISITO 2c: Alternar Modo Claro/Escuro ---

// 1. Seleciona o botão de alternar tema (que vamos criar no HTML)
const themeToggle = document.getElementById('theme-toggle');

// 2. Adiciona um "ouvinte" de clique para ele
themeToggle.addEventListener('click', () => {
    // 3. Adiciona ou remove a classe 'dark-mode' do <body>
    // O CSS fará a mágica de mudar as cores
    document.body.classList.toggle('dark-mode');
});