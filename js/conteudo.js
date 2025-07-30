// ===================================================
//  ARQUIVO ÚNICO PARA GERENCIAR TODO O CONTEÚDO
// ===================================================
// Instruções:
// 1. Para ADICIONAR um item, copie um bloco `{...},` e cole no final da lista desejada.
// 2. Para OCULTAR um item temporariamente, mude a linha `ocultar: false,` para `ocultar: true,`.
// 3. Para REORDENAR, simplesmente recorte e cole o bloco na posição desejada.
// 4. Altere os valores de `titulo`, `descricao` e `link` conforme necessário.

// --- NOTAS DE ESTUDO ---
const notasDeEstudo = [
    {
        ocultar: false,
        titulo: "Cálculo I - Resumo de Limites e Derivadas",
        descricao: "Um guia consolidado sobre os principais conceitos de limites, continuidade e as regras de derivação, incluindo a regra da cadeia e derivação implícita.",
        link: "https://github.com/vguardiano/vguardiano.github.io/raw/main/pdfs/exemplo.pdf" // Exemplo de link para um PDF no seu próprio repositório
    },
    {
        ocultar: false,
        titulo: "Estrutura de Dados I - Pilhas, Filas e Listas",
        descricao: "Implementação e análise de estruturas de dados lineares. Inclui exemplos de código em pseudocódigo e diagramas de funcionamento.",
        link: "#"
    },
    {
        ocultar: false,
        titulo: "Álgebra Linear - Espaços Vetoriais",
        descricao: "Definição de espaços e subespaços vetoriais, combinação linear, dependência e independência linear. Notas de aula com exemplos resolvidos.",
        link: "#"
    },
    {
        ocultar: false,
        titulo: "Sistemas Operacionais - Gerenciamento de Processos",
        descricao: "Conceitos de processos, threads, escalonamento de CPU (FIFO, SJF, Round Robin) e comunicação entre processos (IPC).",
        link: "#"
    },
    {
        ocultar: true, // Este item não aparecerá no site
        titulo: "Cálculo II - Integrais Múltiplas (Rascunho)",
        descricao: "Notas iniciais sobre integrais duplas e triplas. Ainda em desenvolvimento.",
        link: "#"
    },
    {
        ocultar: false,
        titulo: "Redes de Computadores - Modelo OSI vs TCP/IP",
        descricao: "Um comparativo detalhado entre as camadas, protocolos e funcionalidades dos dois principais modelos de arquitetura de redes.",
        link: "#"
    }
];


// --- ARTIGOS E PUBLICAÇÕES ---
const artigos = [
    {
        ocultar: false,
        titulo: "Análise de Desempenho de Algoritmos de Ordenação em Diferentes Cenários",
        descricao: "Um estudo comparativo entre Quicksort, Mergesort e Heapsort, avaliando o tempo de execução com datasets de tamanhos e ordenações variadas.",
        link: "https://medium.com/@seu-usuario/link-para-artigo" // Exemplo de link para um post no Medium
    },
    // {
    //     ocultar: false,
    //     titulo: "Implementação de um Sistema de Cache Simples em Python",
    //     descricao: "Artigo técnico demonstrando a criação de um cache LRU (Least Recently Used) do zero para otimização de consultas em aplicações web.",
    //     link: "#"
    // },
    // {
    //     ocultar: false,
    //     titulo: "A Ética na Inteligência Artificial: Desafios e Perspectivas",
    //     descricao: "Ensaio acadêmico sobre os dilemas éticos no desenvolvimento de I.A., abordando vieses algorítmicos e o impacto social.",
    //     link: "https://www.linkedin.com/pulse/seu-artigo" // Exemplo de link para um artigo no LinkedIn
    // },
    // {
    //     ocultar: true, // Artigo em revisão
    //     titulo: "Visualização de Dados Geográficos com D3.js",
    //     descricao: "Tutorial sobre como criar mapas interativos para a web utilizando a biblioteca D3.js e dados no formato GeoJSON.",
    //     link: "#"
    // }
];