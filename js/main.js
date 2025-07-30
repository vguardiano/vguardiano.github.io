document.addEventListener('DOMContentLoaded', () => {

    // --- Pega os contêineres vazios do HTML ---
    const navContainer = document.querySelector('.navigation');
    const mainContainer = document.querySelector('.content');

    // --- Preenche o cabeçalho dinamicamente ---
    const headerTitle = document.querySelector('.header h1');
    const headerSubtitle = document.querySelector('.header p');
    if(headerTitle) headerTitle.textContent = CONFIGURACAO.pagina_inicial.titulo;
    if(headerSubtitle) headerSubtitle.textContent = CONFIGURACAO.pagina_inicial.subtitulo;
    


    // --- Itera sobre a lista mestra de seções do conteudo.js ---
    todasAsSecoes.forEach(secao => {
        
        // Se a flag 'ocultar' da seção for true, pula para a próxima
        if (secao.ocultar) {
            return;
        }

        // --- 1. Gera o link de navegação ---
        const navLink = document.createElement('a');
        navLink.href = `#${secao.id}`;
        navLink.textContent = secao.titulo;
        navContainer.appendChild(navLink);// --- NOVO: Preenche o cabeçalho dinamicamente ---
    const headerTitle = document.querySelector('.header h1');
    const headerSubtitle = document.querySelector('.header p');
    if(headerTitle) headerTitle.textContent = CONFIGURACAO.pagina_inicial.titulo;
    if(headerSubtitle) headerSubtitle.textContent = CONFIGURACAO.pagina_inicial.subtitulo;
    

        // --- 2. Gera a seção de conteúdo ---

        const tituloElement = document.createElement('h1');
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

    // Adiciona o link estático para a página "Sobre Mim"
    const sobreLink = document.createElement('a');
    sobreLink.href = 'sobre.html';
    sobreLink.id = 'link-sobre'; // ID para estilização especial
    sobreLink.textContent = 'Sobre Mim';
    navContainer.appendChild(sobreLink);
});