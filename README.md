# Portfólio Acadêmico Minimalista

Um template simples, rápido e minimalista para estudantes e acadêmicos que desejam criar um portfólio online sem a necessidade de frameworks complexos ou ferramentas de build. Totalmente customizável via um único arquivo de configuração JavaScript.

[![Deploy com GitHub Pages](https://github.com/vguardiano/vguardiano.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/vguardiano/vguardiano.github.io/actions/workflows/pages/pages-build-deployment)
[![Licença: MIT](https://img.shields.io/badge/Licença-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

### [Clique aqui para ver uma demonstração ao vivo](https://vguardiano.github.io/)

## ✨ Funcionalidades

- **100% Baunilha:** Feito com HTML, CSS e JavaScript puros. Sem dependências.
- **Configuração Centralizada:** Todo o conteúdo do site é gerenciado em um único arquivo `js/conteudo.js`.
- **Geração Dinâmica:** As seções de conteúdo e a navegação são criadas automaticamente.
- **Design Minimalista e Responsivo:** Layout limpo que se adapta a desktops e dispositivos móveis.
- **Tema Claro/Escuro:** Seletor de tema com ícone e atalho de teclado (`C`), com persistência no navegador.
- **Página "Sobre Mim" Separada:** Espaço dedicado para uma biografia mais detalhada.
- **Pronto para GitHub Pages:** Configuração otimizada para deploy gratuito e rápido.

## 🚀 Como Usar

Siga estes passos para criar sua própria versão do site.

### 1. Crie seu Repositório

Clique no botão **"Use this template"** no topo desta página e selecione **"Create a new repository"**. Isso criará uma cópia do projeto na sua conta do GitHub.

### 2. Nomeie o Repositório Corretamente

Para que o GitHub Pages funcione automaticamente, você **precisa** nomear seu novo repositório da seguinte forma:

`SEU-NOME-DE-USUARIO.github.io`

Substitua `SEU-NOME-DE-USUARIO` pelo seu nome de usuário exato do GitHub.

### 3. Clone seu Repositório

No seu computador, execute o comando abaixo para baixar os arquivos (lembre-se de trocar pelo seu nome de usuário):

```bash
git clone [https://github.com/SEU-NOME-DE-USUARIO/SEU-NOME-DE-USUARIO.github.io.git](https://github.com/SEU-NOME-DE-USUARIO/SEU-NOME-DE-USUARIO.github.io.git)
```

### 4. Personalize o Conteúdo

Esta é a parte mais importante. Abra o projeto no seu editor de código e edite o arquivo:

`js/conteudo.js`

Este arquivo é o "cérebro" do seu site. Ele é dividido em duas partes principais:

#### `CONFIGURACAO`
Aqui você coloca suas informações pessoais.

```javascript
const CONFIGURACAO = {
    pagina_inicial: {
        titulo: "Seu Nome Completo",
        subtitulo: "Sua Ocupação ou Curso",
    },
    sobre: {
        titulo: "Olá! Eu sou [Seu Nome].",
        nome_arquivo_foto: "minha-foto.png", // Coloque a foto em /img/
        descricao_foto: "Descrição da sua foto",
        texto_perfil: `<p>Escreva aqui sobre você.</p>`
    },
    rodape: {
        nome_autor: "Seu Nome Completo"
    }
};
```
**Importante:** Não se esqueça de colocar sua foto de perfil na pasta `/img/`!

#### Blocos de Seção (`secaoNotas`, `secaoArtigos`, etc.)
Cada `const secao...` é um bloco que gera uma seção no seu site. Você pode:
- **Editar** os itens dentro de cada bloco.
- **Ocultar** uma seção inteira (`ocultar: true`).
- **Criar** novos blocos para novas seções.

Para que uma nova seção apareça, lembre-se de adicioná-la à lista `todasAsSecoes` no final do arquivo. A ordem nesta lista determina a ordem no site.

```javascript
const todasAsSecoes = [
    secaoNotas,
    secaoArtigos,
    // suaNovaSecao,
];
```

### 5. Envie suas Alterações

Após personalizar o `conteudo.js` e adicionar sua foto, envie as mudanças para o GitHub.

```bash
# Adiciona todos os seus arquivos e mudanças
git add .

# Cria um "pacote" com suas alterações
git commit -m "Personaliza o conteúdo do site"

# Envia o pacote para o GitHub
git push origin main
```

### 6. Pronto!

Aguarde alguns minutos e seu site pessoal estará no ar no endereço `https://SEU-NOME-DE-USUARIO.github.io`.

## 📜 Licença

Este projeto é distribuído sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes. Sinta-se à vontade para usar, modificar e distribuir como quiser.