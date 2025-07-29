// IIFE (Immediately Invoked Function Expression) para não poluir o escopo global
(function() {
    const body = document.body;
    const themeKey = 'theme-preference';

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    };

    // Função para alternar o tema e salvar a preferência
    const toggleTheme = () => {
        const isDark = body.classList.contains('dark-theme');
        // Salva a preferência oposta à atual
        localStorage.setItem(themeKey, isDark ? 'light' : 'dark');
        // Aplica a classe oposta à atual
        body.classList.toggle('dark-theme');
    };

    // Listener para a tecla 'C'
    window.addEventListener('keydown', (event) => {
        // Verifica se a tecla pressionada foi 'c' (sem Caps Lock) ou 'C' (com Caps Lock)
        if (event.key.toLowerCase() === 'c') {
            toggleTheme();
        }
    });

    // Lógica para carregar o tema na inicialização da página
    // 1. Verifica se há uma preferência salva no localStorage
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // 2. Se não houver, verifica a preferência do sistema operacional
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
})();