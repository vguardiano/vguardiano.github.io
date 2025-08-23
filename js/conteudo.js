// ===================================================================
//      CONFIGURAÇÕES GLOBAIS DO SITE
// ===================================================================
const CONFIGURACAO = {
    // Informações que aparecem no cabeçalho da página inicial
    pagina_inicial: {
        titulo: "Vinícius Guardiano Souza",
        subtitulo: "Doutorando em Matemática na Universidade Federal de Alagoas",
    },

    // Texto que aparece no rodapé de todas as páginas
    rodape: {
        nome_autor: "Vinícius Guardiano Souza"
    }
};


// ===================================================================
//      BLOCO DE CONTEÚDO: NOTAS DE ESTUDO
// ===================================================================
const secaoNotas = {
    id: 'notas',
    titulo: 'Notas de Estudo',
    ocultar: false,
    items: [
        {
            ocultar: false,
            titulo: "Cálculo I - Resumo de Limites e Derivadas",
            descricao: "Um guia consolidado sobre os principais conceitos de limites, continuidade e as regras de derivação, incluindo a regra da cadeia e derivação implícita.",
            link: "#"
        },
        {
            ocultar: false,
            titulo: "Cálculo II - Teorema fundamental do Cálculo",
            descricao: "Um guia consolidado sobre os principais conceitos.",
            link: "#"
        },
        {
            ocultar: false,
            titulo: "Análise geométrica",
            descricao: '',
            link: "#"
        },
        {
            ocultar: false,
            titulo: "Espaços métricos e topologia geral",
            descricao: "Conceitos simples, porém essenciais!",
            link: "#"
        },
    ]
};


// ===================================================================
//      BLOCO DE CONTEÚDO: PUBLICAÇÕES (com BibTeX)
// ===================================================================
const secaoPublicacoes = {
    id: 'publicacoes',
    titulo: 'Publicações',
    ocultar: false,
    // Cada item agora contém uma chave 'bibtex' com a string BibTeX completa.
    // O JavaScript irá processar isso para formatar a citação.
    items: [
        {
            ocultar: false,
            bibtex: `
                @article{MR3962030,
                    AUTHOR = {Cavalcante, Marcos P. and Mendes, Abra{\\~a}o and Vit{\\'o}rio, Feliciano},
                    TITLE = {Vanishing theorems for the cohomology groups of free boundary submanifolds},
                    JOURNAL = {Ann. Global Anal. Geom.},
                    VOLUME = {56},
                    YEAR = {2019},
                    NUMBER = {1},
                    PAGES = {137--146},
                    MRNUMBER = {3962030},
                    DOI = {10.1007/s10455-019-09660-1},
                    URL = {https://doi.org/10.1007/s10455-019-09660-1}
                }
            `
        },
        {
            ocultar: false,
            bibtex: `
                @article{Turing1936,
                    AUTHOR = {Turing, Alan M.},
                    TITLE = {On Computable Numbers, with an Application to the Entscheidungsproblem},
                    JOURNAL = {Proceedings of the London Mathematical Society},
                    VOLUME = {s2-42},
                    YEAR = {1937},
                    NUMBER = {1},
                    PAGES = {230--265},
                    DOI = {10.1112/plms/s2-42.1.230},
                    URL = {https://doi.org/10.1112/plms/s2-42.1.230}
                }
            `
        },
        {
            ocultar: false, // Exemplo de item oculto
            bibtex: `
                @article{ExemploOculto,
                    AUTHOR = {Autor, Exemplo de},
                    TITLE = {Um Título de Artigo que Não Irá Aparecer},
                    JOURNAL = {Revista de Testes},
                    YEAR = {2025}
                }
            `
        }
    ]
};


// ===================================================================
//      BLOCO DE CONTEÚDO: PROJETOS
// ===================================================================
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


// ===================================================================
//      LISTA MESTRA DE SEÇÕES
// ===================================================================
// A ordem das seções aqui define a ordem no site.
const todasAsSecoes = [
    secaoNotas,
    secaoPublicacoes,
    secaoProjetos,
];