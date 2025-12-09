const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];


let editedPlayer = 0;
let activePlayer = 0;
let cuurentround = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];
const playerConfigOverlay = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");

const formElement = document.querySelector('form');
const errorOutput = document.getElementById('error');
const gameArea = document.getElementById('active-game')

const  editPlayer1BtnElement = document.getElementById("edit-btn-1");
const  editPlayer2BtnElement = document.getElementById("edit-btn-2");

const cancelConfigBtn = document.getElementById('cancel-config');

const activePlayerName = document.getElementById("active-player-name");
const gameOver = document.getElementById('game-over');
const startNewGameBtn = document.getElementById('start-game-btn');
// const gameFields = document.querySelectorAll('#game-board li');
const gameBoard = document.getElementById('game-board')

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backDrop.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

// for (const gameField of gameFields){
//     gameField.addEventListener('click', selectField);
// }

gameBoard.addEventListener('click', selectField)