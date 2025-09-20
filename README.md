# Jogo da Velha (Tic Tac Toe)

## Descrição
Este é um jogo da velha (Tic Tac Toe) implementado com **HTML**, **CSS** e **JavaScript**, usando módulos e fábricas para manter o código organizado e minimizar variáveis globais.  
O jogo permite que dois jogadores insiram seus nomes, joguem alternadamente, e verifica automaticamente vitórias ou empates.  

## Funcionalidades
- Permite que dois jogadores joguem alternadamente.  
- Armazena o tabuleiro como um array dentro de um módulo `GameBoard`.  
- Cria objetos de jogador com nomes e símbolos (`X` e `O`).  
- Controla o fluxo do jogo através do módulo `GameController`.  
- Detecta vitória ou empate.  
- Permite reiniciar o jogo sem precisar atualizar a página.  
- Interface limpa e interativa para jogar diretamente no navegador.  

## Tecnologias Utilizadas
- **HTML5** – Estrutura do tabuleiro e campos de entrada dos jogadores.  
- **CSS3** – Estilização do tabuleiro e das mensagens.  
- **JavaScript (ES6)** – Lógica do jogo usando módulos (IIFE) e funções fábricas.  

## Como Jogar
1. Abra o arquivo `index.html` no navegador.  
2. Insira os nomes dos jogadores nos campos de entrada.  
3. Clique em **Start** para iniciar o jogo.  
4. Clique em uma casa do tabuleiro para marcar o seu símbolo.  
5. O jogo exibirá uma mensagem indicando:
   - Qual jogador venceu, ou  
   - Se houve empate.  
6. Para reiniciar o jogo, clique no botão **Restart**.  

## Estrutura do Código

### Módulos/Fábricas:
- **GameBoard**:  
  - Armazena o tabuleiro em um array de 9 posições.  
  - Permite marcar casas e resetar o tabuleiro.  

- **Player (função fábrica)**:  
  - Cria objetos de jogador com nome e símbolo.  

- **GameController**:  
  - Gerencia os jogadores e alterna turnos.  
  - Verifica vitórias e empates.  
  - Coordena a jogada de cada turno.  

- **UI (DisplayController)**:  
  - Cria a interface do tabuleiro.  
  - Atualiza o conteúdo do DOM a cada jogada.  
  - Mostra mensagens de vitória, empate ou vez do jogador. 

## Estrutura de arquivo

/jogo-da-velha
│
├─ index.html
├─ style.css
└─ script.js
 

## Exemplo de Uso
```javascript
// Criando jogadores
GameController.addPlayer("Alice", "X");
GameController.addPlayer("Bob", "O");

// Jogando a primeira jogada
GameController.playTurn(0); // Alice marca a posição 0

