// Espera o DOM (a estrutura da página) estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // ===================================================
    //  CONFIGURAÇÃO DAS SEÇÕES DINÂMICAS
    // ===================================================
    // Mapeia cada seção, ligando o ID, os dados e os elementos HTML correspondentes.
    // Para adicionar uma nova seção no futuro, basta adicioná-la aqui.
    const secoesConfig = [
        {
            id: 'notas',
            dados: notasDeEstudo, // Vem de conteudo.js
            container: document.querySelector('#notas'),
            navLink: document.querySelector('a[href="#notas"]')
        },
        {
            id: 'artigos',
            dados: artigos, // Vem de conteudo.js
            container: document.querySelector('#artigos'),
            navLink: document.querySelector('a[href="#artigos"]')
        }
        // Exemplo: se um dia você criar uma seção "projetos", adicionaria aqui:
        // {
        //     id: 'projetos',
        //     dados: projetos,
        //     container: document.querySelector('#projetos'),
        //     navLink: document.querySelector('a[href="#projetos"]')
        // }
    ];

    // ===================================================
    //  RENDERIZAÇÃO INTELIGENTE DO CONTEÚDO
    // ===================================================

    // Itera sobre a configuração de cada seção
    secoesConfig.forEach(secao => {
        // 1. Filtra para encontrar apenas os itens que NÃO estão ocultos
        const itensVisiveis = secao.dados.filter(item => !item.ocultar);

        // 2. Verifica se existem elementos HTML correspondentes
        if (!secao.container || !secao.navLink) {
            console.warn(`Elementos para a seção '${secao.id}' não encontrados no HTML.`);
            return;
        }

        // 3. Se não houver itens visíveis, oculta a seção e o link do menu
        if (itensVisiveis.length === 0) {
            secao.container.hidden = true;
            secao.navLink.hidden = true;
        } else {
            // 4. Se houver itens, garante que tudo está visível e renderiza o conteúdo
            secao.container.hidden = false;
            secao.navLink.hidden = false;
            renderizarItens(secao.container, itensVisiveis);
        }
    });

    // Função que cria o HTML para cada item (agora recebe apenas itens visíveis)
    function renderizarItens(container, itens) {
        // Itera sobre a lista JÁ FILTRADA
        itens.forEach(item => {
            const itemHtml = `
                <article class="post-item">
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                    <a href="${item.link}" target="_blank" rel="noopener noreferrer">Ver conteúdo</a>
                </article>
            `;
            container.innerHTML += itemHtml;
        });
    }

    // ===================================================
    //  FUNCIONALIDADE DE TROCA DE TEMA
    //  (código anterior, continua funcionando perfeitamente)
    // ===================================================
    const body = document.body;
    const themeKey = 'theme-preference';

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    };

    const toggleTheme = () => {
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem(themeKey, isDark ? 'light' : 'dark');
        body.classList.toggle('dark-theme');
    };

    window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'c') {
            toggleTheme();
        }
    });

    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
});