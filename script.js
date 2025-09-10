
const GameBoard = (() => {

    let board = ['', '', '',
        '', '', '',
        '', '', ''
    ]

    const render = ()=>{
        let boardHTML ="";
        GameBoard.forEach((square,index)=>{
            boardHTML+= `<div class="square" id="square-${index}">${square}</div>`;
        })
    }
})();


const Player=(name, symbol)=> {
    return {
        name,
        symbol,
    }
};

function GameController() {
    return {

    }
}

//teste da função de fabrica
const player1 = Player('gabriel', 'X');

console.log(player1);


