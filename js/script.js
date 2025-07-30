document.addEventListener('DOMContentLoaded', () => {

    // --- Pega os contêineres vazios do HTML ---
    const navContainer = document.querySelector('.navigation');
    const mainContainer = document.querySelector('.content');

    // --- Itera sobre a lista mestra de seções do conteudo.js ---
    todasAsSecoes.forEach(secao => {
        
        // Se a flag 'ocultar' da seção for true, pula para a próxima
        if (secao.ocultar) {
            return;
        }

        // --- 1. Gera o link de navegação ---
        /* const navLink = document.createElement('a');
        navLink.href = `#${secao.id}`;
        navLink.textContent = secao.titulo;
        navContainer.appendChild(navLink); */

        // --- 2. Gera a seção de conteúdo ---

        const tituloElement = document.createElement('h2');
        tituloElement.textContent = secao.titulo;

        const secaoElement = document.createElement('section');
        secaoElement.id = secao.id;
        
        mainContainer.appendChild(tituloElement);

        // --- 3. Gera os itens (artigos) dentro da seção ---
        secao.items.forEach(item => {
            // Se a flag 'ocultar' do item for true, pula para o próximo
            if (item.ocultar) {
                return;
            }

            const articleElement = document.createElement('article');
            articleElement.className = 'post-item';
            articleElement.innerHTML = `
                <a href="${item.link}" target="_blank" rel="noopener noreferrer"><h3>${item.titulo}</h3></a>
                ${item.descricao && item.descricao.trim() !== '' ? `<p>${item.descricao}</p>` : ''}
            `;
            secaoElement.appendChild(articleElement);
        });

        // Adiciona a seção completa ao container principal
        mainContainer.appendChild(secaoElement);
    });


    // ==================================
    //  FUNCIONALIDADE DE TROCA DE TEMA 
    // ==================================
    
    // --- Pega o novo botão de tema ---
    const themeToggleButton = document.getElementById('theme-toggle');

    // --- Ícones SVG como strings ---
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.64 5.64c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.64 5.64zm12.73 12.73c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.06-1.06zM18.36 5.64c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.06-1.06zm-12.73 12.73c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.06-1.06z"/></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.82.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"/></svg>`;

    // --- Atualização do texto do rodapé ---
    const footerText = document.getElementById('footer-text');
    if (footerText) {
        footerText.textContent = `© ${new Date().getFullYear()} - vguardiano`;
    }

    // ===================================================
    //  FUNCIONALIDADE DE TROCA DE TEMA (ATUALIZADA)
    // ===================================================
    const body = document.body;
    const themeKey = 'theme-preference';

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            themeToggleButton.innerHTML = sunIcon;
        } else {
            body.classList.remove('dark-theme');
            themeToggleButton.innerHTML = moonIcon;
        }
    };

    const toggleTheme = () => {
        const isDark = body.classList.contains('dark-theme');
        // A preferência a ser salva é a OPOSTA da atual
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem(themeKey, newTheme);
        applyTheme(newTheme);
    };

    // Adiciona o listener de CLIQUE no botão
    themeToggleButton.addEventListener('click', toggleTheme);
    
    // O atalho 'C' continua funcionando!
    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'c') {
            toggleTheme();
        }
    });

    // --- Define o tema inicial ao carregar a página ---
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
});