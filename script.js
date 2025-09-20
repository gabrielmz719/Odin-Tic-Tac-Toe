// ==== GameBoard ====
const GameBoard = (() => {
    let board = Array(9).fill('');

    const getBoard = () => [...board];

    const setSquare = (index, symbol) => {
        if (board[index] === '') {
            board[index] = symbol;
            return true;
        }
        return false;
    };

    const reset = () => board = Array(9).fill('');

    return { getBoard, setSquare, reset };
})();

// ==== Player ====
function Player(name, symbol) {
    return { name, symbol };
}

// ==== GameController ====
const GameController = (() => {
    const players = [];
    let currentPlayerIndex = 0;

    const addPlayer = (name, symbol) => players.push(Player(name, symbol));
    const getCurrentPlayer = () => players[currentPlayerIndex];
    const switchPlayer = () => currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

    const checkWin = (symbol) => {
        const board = GameBoard.getBoard();
        const combos = [
            [0,1,2],[3,4,5],[6,7,8], // linhas
            [0,3,6],[1,4,7],[2,5,8], // colunas
            [0,4,8],[2,4,6]          // diagonais
        ];
        return combos.some(combo => combo.every(i => board[i] === symbol));
    };

    const checkDraw = () => GameBoard.getBoard().every(sq => sq !== '');

    const playTurn = (index) => {
        const player = getCurrentPlayer();
        if (!GameBoard.setSquare(index, player.symbol)) return { invalid: true };

        if (checkWin(player.symbol)) return { win: true, player: player.name };
        if (checkDraw()) return { draw: true };

        switchPlayer();
        return {};
    };

    return { addPlayer, getCurrentPlayer, playTurn, checkDraw };
})();

// ==== UI ====
const boardDiv = document.getElementById("board");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const messageDiv = document.getElementById("message");

function createBoard() {
    boardDiv.innerHTML = "";
    GameBoard.reset();
    messageDiv.textContent = `Vez de ${GameController.getCurrentPlayer().name}`;

    for (let i = 0; i < 9; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.index = i;
        square.textContent = "";

        square.addEventListener("click", () => {
            const result = GameController.playTurn(i);
            if (result.invalid) return;

            square.textContent = GameBoard.getBoard()[i];

            if (result.win) {
                messageDiv.textContent = `${result.player} venceu!`;
                Array.from(boardDiv.children).forEach(sq => sq.style.pointerEvents = "none");
            } else if (result.draw) {
                messageDiv.textContent = "Empate!";
            } else {
                messageDiv.textContent = `Vez de ${GameController.getCurrentPlayer().name}`;
            }
        });

        boardDiv.appendChild(square);
    }
}

// Start Button
startBtn.addEventListener("click", () => {
    const p1 = document.getElementById("player1").value.trim();
    const p2 = document.getElementById("player2").value.trim();

    if (!p1 || !p2) {
        alert("Por favor, preencha o nome de ambos os jogadores!");
        return; // não inicia o jogo
    }

    // Limpa jogadores antigos antes de adicionar novos
    // (Se quiser reiniciar totalmente o jogo)
    GameController.addPlayer(p1, "X");
    GameController.addPlayer(p2, "O");

    createBoard();
});

// Restart Button
restartBtn.addEventListener("click", () => {
    GameBoard.reset();
    Array.from(boardDiv.children).forEach(sq => sq.textContent = "");
    Array.from(boardDiv.children).forEach(sq => sq.style.pointerEvents = "auto");
    messageDiv.textContent = `Vez de ${GameController.getCurrentPlayer().name}`;
});
