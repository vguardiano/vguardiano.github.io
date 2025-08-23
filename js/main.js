/**
 * Função para processar uma string BibTeX e formatá-la em HTML.
 * @param {string} bibtexString - A string contendo a entrada BibTeX.
 * @returns {string} - Uma string HTML formatada com a citação.
 */
function parseAndFormatBibTeX(bibtexString) {
    // Objeto para armazenar os campos extraídos do BibTeX.
    const bibData = {};

    // Regex para encontrar pares chave = {valor} ou chave = "valor".
    // Captura a chave (ex: AUTHOR) e o valor entre os delimitadores.
    // A flag 's' permite que '.' capture quebras de linha.
    const regex = /\s*(\w+)\s*=\s*[\{"']([\s\S]*?)[\}"'],/gs;
    let match;
    while ((match = regex.exec(bibtexString)) !== null) {
        const key = match[1].toUpperCase();
        let value = match[2];
        
        // Limpa o valor removendo quebras de linha excessivas e espaços.
        value = value.replace(/\s+/g, ' ').trim();
        // Remove caracteres especiais de LaTeX (exemplo simplificado).
        value = value.replace(/\{\\'o\}/g, 'ó').replace(/\{\\~a\}/g, 'ã');
        
        bibData[key] = value;
    }

    // Se não encontrou dados, retorna uma string vazia.
    if (Object.keys(bibData).length === 0) return '';
    
    // --- Formatação dos Autores ---
    let authorsFormatted = '';
    if (bibData.AUTHOR) {
        const authors = bibData.AUTHOR.split(/ and /i);
        authorsFormatted = authors.map(author => {
            const parts = author.split(',').map(p => p.trim());
            if (parts.length === 2) { // Formato "Sobrenome, Nome"
                const lastName = parts[0];
                const firstNames = parts[1].split(' ');
                const initials = firstNames.map(name => name.charAt(0) + '.').join(' ');
                return `${initials} ${lastName}`;
            }
            return author; // Retorna o nome como está se o formato for inesperado.
        }).join(', ');
    }

    // --- Montagem da String de Citação ---
    const title = bibData.TITLE || '';
    const journal = bibData.JOURNAL || '';
    const volume = bibData.VOLUME ? ` <strong>${bibData.VOLUME}</strong>` : '';
    const year = bibData.YEAR ? ` (${bibData.YEAR})` : '';
    const number = bibData.NUMBER ? `, no. ${bibData.NUMBER}` : '';
    const pages = bibData.PAGES ? `, ${bibData.PAGES}` : '';
    const mrNumber = bibData.MRNUMBER ? `. MR${bibData.MRNUMBER}` : '';
    const url = bibData.URL || bibData.DOI ? `https://doi.org/${bibData.DOI}` : '#';

    // Retorna a string HTML final.
    return `
        <p>
            ${authorsFormatted ? `${authorsFormatted}, ` : ''}
            <a href="${url}" target="_blank" rel="noopener noreferrer">
                <span class="bibtex-title">${title}</span>
            </a>,
            ${journal}${volume}${year}${number}${pages}${mrNumber}.
        </p>
    `;
}


document.addEventListener('DOMContentLoaded', () => {

    // --- Pega os contêineres vazios do HTML ---
    const navContainer = document.querySelector('.navigation');
    const mainContainer = document.querySelector('.content');

    // --- Preenche o cabeçalho dinamicamente ---
    const headerTitle = document.querySelector('.header h1');
    const headerSubtitle = document.querySelector('.header p');
    if (headerTitle) headerTitle.textContent = CONFIGURACAO.pagina_inicial.titulo;
    if (headerSubtitle) headerSubtitle.textContent = CONFIGURACAO.pagina_inicial.subtitulo;
    
    // --- Itera sobre a lista mestra de seções do conteudo.js ---
    todasAsSecoes.forEach(secao => {
        
        // Se a flag 'ocultar' da seção for true, pula para a próxima
        if (secao.ocultar) return;

        // --- 1. Gera o link de navegação ---
        const navLink = document.createElement('a');
        navLink.href = `#${secao.id}`;
        navLink.textContent = secao.titulo;
        navContainer.appendChild(navLink);

        // --- 2. Gera a seção de conteúdo ---

        const tituloElement = document.createElement('h1');
        tituloElement.textContent = secao.titulo;
        mainContainer.appendChild(tituloElement);

        const secaoElement = document.createElement('section');
        secaoElement.id = secao.id;
        //secaoElement.innerHTML = `<h1>${secao.titulo}</h1>`;  
        
        // --- 3. Gera os itens dentro da seção ---
        secao.items.forEach(item => {
            if (item.ocultar) return;
            
            //main.innerHTML = `<h1>${secao.titulo}</h1>`;

            const articleElement = document.createElement('article');
            articleElement.className = 'post-item';

            // Verifica se a seção é de publicações para usar o parser BibTeX
            if (secao.id === 'publicacoes' && item.bibtex) {
                articleElement.innerHTML = parseAndFormatBibTeX(item.bibtex);
            } else {
                // Lógica antiga para seções normais (Notas, Projetos, etc.)
                articleElement.innerHTML = `
                    <a href="${item.link}" target="_blank" rel="noopener noreferrer">
                        <h3>${item.titulo}</h3>
                    </a>
                    ${item.descricao && item.descricao.trim() !== '' ? `<p>${item.descricao}</p>` : ''}
                `;
            }
            secaoElement.appendChild(articleElement);
        });

        // Adiciona a seção completa ao container principal
        mainContainer.appendChild(secaoElement);
    });

    // --- 4. Adiciona o link estático para a página "Sobre Mim" ---
    const sobreLink = document.createElement('a');
    sobreLink.href = 'sobre.html';
    sobreLink.id = 'link-sobre';
    sobreLink.textContent = 'Sobre Mim';
    navContainer.appendChild(sobreLink);
});