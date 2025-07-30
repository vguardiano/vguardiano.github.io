const CONFIGURACAO = {
    // Informações que aparecem no cabeçalho da página inicial
    pagina_inicial: {
        titulo: "Vinícius Guardiano Souza",
        subtitulo: "Doutorando em Matemática na Universidade Federal de Alagoas",
    },

    // Informações para a página "Sobre Mim"
    sobre: {
        titulo: "Olá! Eu sou o Vinícius.",
        nome_arquivo_foto: "foto.jpg",
        descricao_foto: "Foto de perfil de Vinícius Guardiano",
        texto_perfil: `
            <p>Nascido e criado em Maceió, Alagoas, sou um entusiasta de matemática, tecnologia e um bom café. Quando não estou imerso em provas e demonstrações, gosto de explorar a fotografia, ler ficção científica e descobrir novas bandas de rock progressivo.</p>
            <p>Este site é meu cantinho na internet para organizar e compartilhar um pouco da minha jornada acadêmica.</p>
        `
    },

    // Texto que aparece no rodapé de todas as páginas
    rodape: {
        nome_autor: "Vinícius Guardiano Souza"
    }
};


// ===================================================
//      BLOCO DE CONTEÚDO: NOTAS DE ESTUDO
// ===================================================
const secaoNotas = {
    // Metadados da seção inteira
    id: 'notas',
    titulo: 'Notas de Estudo',
    ocultar: false, // Se true, esconde a seção inteira e o link do menu

    // Lista de itens dentro desta seção
    items: [
        {
            ocultar: false, // Se true, esconde apenas este item
            titulo: "Cálculo I - Resumo de Limites e Derivadas",
            descricao: "Um guia consolidado sobre os principais conceitos de limites, continuidade e as regras de derivação, incluindo a regra da cadeia e derivação implícita.",
            link: "#"
        },
        {
            ocultar: false,
            titulo: "Estrutura de Dados I - Pilhas, Filas e Listas",
            descricao: "Implementação e análise de estruturas de dados lineares. Inclui exemplos de código em pseudocódigo e diagramas de funcionamento.",
            link: "#"
        },
        {
            ocultar: false,
            titulo: "Banco de Dados - Normalização (1FN, 2FN, 3FN)",
            descricao: "Guia prático para entender e aplicar as três primeiras Formas Normais para projetar bancos de dados relacionais eficientes e sem redundância.",
            link: "#"
        },
        {
            ocultar: false,
            titulo: "Arquitetura de Computadores - Pipeline e Paralelismo",
            descricao: "Notas sobre como a técnica de pipelining aumenta a performance de processadores e introdução aos conceitos de paralelismo de instrução.",
            link: "#"
        },
        {
            ocultar: false,
            titulo: "Engenharia de Software - Padrões de Projeto (GoF)",
            descricao: "Resumo dos padrões de projeto criacionais, estruturais e comportamentais mais comuns, como Singleton, Factory, Adapter e Observer.",
            link: "#"
        },
        {
            ocultar: true,
            titulo: "Inteligência Artificial - Redes Neurais (Rascunho)",
            descricao: "Este item está oculto, pois as notas ainda estão em fase de rascunho. Não aparecerá no site.",
            link: "#"
        },
        {
            ocultar: false,
            titulo: "Sistemas Operacionais - Gerenciamento de Memória",
            descricao: "Estudo sobre paginação, segmentação e memória virtual como técnicas para gerenciamento eficiente da memória principal.",
            link: "#"
        }
    ]
};


// ===================================================
//      BLOCO DE CONTEÚDO: ARTIGOS (com links reais)
// ===================================================
const secaoArtigos = {
    // Metadados da seção inteira
    id: 'artigos',
    titulo: 'Publicações',
    ocultar: false,

    // Lista de itens dentro desta seção
    items: [
        {
            ocultar: false,
            titulo: "The Anatomy of a Large-Scale Hypertextual Web Search Engine",
            descricao: "O paper original de Sergey Brin e Larry Page que descreve a arquitetura do Google e o algoritmo PageRank. Um marco na história da recuperação de informação.",
            link: "http://infolab.stanford.edu/~backrub/google.html"
        },
        {
            ocultar: false,
            titulo: "Go To Statement Considered Harmful",
            descricao: "A famosa carta de Edsger W. Dijkstra de 1968 que argumentou contra o uso excessivo do comando GOTO, influenciando a programação estruturada por décadas.",
            link: "https://dl.acm.org/doi/10.1145/362929.362947"
        },
        {
            ocultar: false,
            titulo: "Inversion of Control Containers and the Dependency Injection pattern",
            descricao: "Artigo seminal de Martin Fowler que popularizou e clarificou os conceitos de Inversão de Controle (IoC) e Injeção de Dependência (DI), fundamentais no desenvolvimento de software moderno.",
            link: "https://www.martinfowler.com/articles/injection.html"
        },
        {
            ocultar: false,
            titulo: "On Computable Numbers, with an Application to the Entscheidungsproblem",
            descricao: "O trabalho de Alan Turing de 1936 que introduziu as 'Máquinas de Turing', estabelecendo as fundações teóricas da ciência da computação e do que é 'computável'.",
            link: "https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf"
        },
        {
            ocultar: false,
            titulo: "Site Reliability Engineering (SRE)",
            descricao: "Introdução do Google à disciplina de SRE, que trata as operações de infraestrutura como um problema de engenharia de software, focando em automação e confiabilidade.",
            link: "https://sre.google/sre-book/introduction/"
        }
    ]
};


// ===================================================
//      BLOCO DE CONTEÚDO: PROJETOS (Exemplo)
// ===================================================
const secaoProjetos = {
    id: 'projetos',
    titulo: 'Projetos Pessoais',
    ocultar: false, 
    items: [
        {
            ocultar: false,
            titulo: "Este mesmo site-portfólio",
            descricao: "Desenvolvimento de um site pessoal e minimalista com HTML, CSS e JavaScript puros, com geração de conteúdo dinâmica. Hospedado no GitHub Pages.",
            link: "https://github.com/vguardiano/vguardiano.github.io"
        }
    ]
};


// ===================================================
//      NOVO BLOCO: APRESENTAÇÕES E SEMINÁRIOS
// ===================================================
const secaoApresentacoes = {
    id: 'apresentacoes',
    titulo: 'Apresentações e Seminários',
    ocultar: true,
    items: [
        {
            ocultar: false,
            titulo: "Introdução à Arquitetura de Microsserviços",
            descricao: "Seminário apresentado para a disciplina de Sistemas Distribuídos, abordando os prós e contras do padrão de arquitetura de microsserviços em comparação com monólitos.",
            link: "#" // Link para os slides
        },
        {
            ocultar: false,
            titulo: "Workshop: Versionamento com Git e GitHub",
            descricao: "Workshop prático ministrado para calouros do curso, cobrindo os comandos básicos e o fluxo de trabalho essencial do Git.",
            link: "#"
        }
    ]
};


// ===================================================
//      NOVO BLOCO: LINGUAGENS E FERRAMENTAS
// ===================================================
const secaoFerramentas = {
    id: 'ferramentas',
    titulo: 'Linguagens e Ferramentas',
    ocultar: true,
    items: [
        {
            ocultar: false,
            titulo: "Python",
            descricao: "Utilizado para automação de scripts, desenvolvimento back-end com Flask e Django, e projetos de análise de dados com Pandas e NumPy.",
            link: "https://www.python.org/"
        },
        {
            ocultar: false,
            titulo: "JavaScript & TypeScript",
            descricao: "Desenvolvimento de aplicações front-end com React e back-end com Node.js. Ampla experiência com o ecossistema moderno (ES6+, npm, etc).",
            link: "https://www.typescriptlang.org/"
        },
        {
            ocultar: false,
            titulo: "Docker, Git & Linux",
            descricao: "Controle de versão com Git, criação de ambientes de desenvolvimento e produção com Docker, e proficiência no ambiente de linha de comando Linux.",
            link: "https://www.docker.com/"
        },
        {
            ocultar: false,
            titulo: "SQL (PostgreSQL & MySQL)",
            descricao: "Modelagem de bancos de dados relacionais, escrita de consultas complexas, e otimização de performance.",
            link: "https://www.postgresql.org/"
        }
    ]
};


// ===================================================
//      LISTA MESTRA DE SEÇÕES
// ===================================================
// A ordem das seções aqui define a ordem no site.
// Adicionei os novos blocos a esta lista.
const todasAsSecoes = [
    secaoNotas,
    secaoArtigos,
    secaoProjetos,
    secaoApresentacoes,
    secaoFerramentas
];