
const GameBoard = (() => {

    let board = ['', '', '',
        '', '', '',
        '', '', ''
    ]
    const getBoard = () => {
        return [...board];
    }

    const setSquare = (index,symbol) => {
        if (board[index] === '') {
            board[index] = symbol
            return true;
        }
        return false;
    }
    const reset = () => {
        return board = ['', '', '',
            '', '', '',
            '', '', ''
        ]
    }

    return {getBoard,reset,setSquare}
})();


function Player(name, symbol) {
    return {
        name,
        symbol,
    }
};

const GameController = () => {
    return {

        checkDraw() {

        }
    }
}

//teste da função de fabrica
const player1 = Player('gabriel', 'X');

console.log(player1);


