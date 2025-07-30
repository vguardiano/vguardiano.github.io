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
    const sunIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="#ffffff"></path> <g opacity="0.5"> <path d="M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z" fill="#ffffff"></path> <path d="M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z" fill="#ffffff"></path> <path d="M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z" fill="#ffffff"></path> <path d="M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z" fill="#ffffff"></path> </g> </g></svg>`;
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

    // --- Define o tema inicial ao carregar a página ---
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
});