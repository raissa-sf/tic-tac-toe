# ✨ Jogo da Velha - React + Vite

Um jogo da velha simples, bonito e funcional feito com **React** e **Vite**. Estilizado com uma paleta suave e moderna em tons de roxo pastel, o projeto permite partidas entre dois jogadores, identifica automaticamente o vencedor e inclui um botão de reinício.

![Jogo da Velha - Preview](https://via.placeholder.com/600x300.png?text=Jogo+da+Velha+com+React) <!-- Substitua pelo link do seu screenshot/gif depois -->

---

## 🚀 Tecnologias

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 CSS

---

## 🎮 Funcionalidades

- ✅ Dois jogadores: `X` e `O`
- 🧠 Lógica de verificação de vencedor
- 🌀 Botão para reiniciar o jogo
- 🎨 Estilo customizado com hover, cores vibrantes e layout centrado

---

## 🖼️ Visual

O projeto utiliza uma paleta clean e suave:
| Elemento                | Cor HEX   | Descrição             |
|-------------------------|-----------|------------------------|
| Fundo da página         | `#f5ecff` | Lilás claro            |
| Borda dos quadrados     | `#E1BEE7` | Roxo suave             |
| Hover nos quadrados     | `#cc78f3` | Roxo vibrante          |
| Texto vencedor (X)      | `#8E24AA` | Roxo padrão            |
| Texto vencedor (O)      | `#8E24AA` | Roxo padrão            |
| Botão de reinício       | `#8E24AA` | Roxo padrão            |
| Hover do botão          | `#6A1B9A` | Roxo escuro            |

---

## 📂 Estrutura

A estrutura do projeto é organizada da seguinte forma:
tic-tac-toe/ │ ├── public/ # Arquivos públicos, como index.html e imagens │ ├── vite.svg # Ícones de logo, imagens ou outros arquivos estáticos │ └── index.html # Arquivo HTML principal │ ├── src/ # Diretório de código-fonte │ ├── assets/ # Imagens ou arquivos de recursos │ ├── components/ # Componentes React do jogo │ │ ├── Board.jsx # Componente para o tabuleiro do jogo │ │ ├── Square.jsx # Componente para cada quadrado do tabuleiro │  ├── App.jsx # Componente principal da aplicação │ └── App.css # Estilos principais do jogo │ ├── package.json # Arquivo de dependências e scripts do npm ├── vite.config.js # Arquivo de configuração do Vite 


### Explicação da Estrutura

- **public/**: Contém arquivos públicos, como o `index.html` e ícones de logo. Esses arquivos são diretamente acessíveis no navegador.
  
- **src/**: Contém o código-fonte da aplicação.
  - **assets/**: Aqui ficam imagens e outros recursos que são utilizados no jogo.
  - **components/**: Contém os componentes React usados no jogo, como o tabuleiro (`Board.jsx`) e os quadrados individuais (`Square.jsx`).
  - **App.jsx**: O componente principal que gerencia a lógica do jogo.
  - **App.css**: O arquivo de estilização do jogo, com as cores e estilos aplicados.

- **package.json**: Contém as dependências do projeto e scripts de execução.
  
- **vite.config.js**: Arquivo de configuração do Vite, que permite otimizar e configurar o projeto.

