'use strict'

const WALL = '#'
const FOOD = '.'
const EMPTY = ' '
var totalFoodOnBoard = 56
var gIsVictory = false
var gCherryInterval
const gGame = {
    score: 0,
    isOn: false
}

var gBoard

function onInit() {
    gBoard = buildBoard()
    setInterval(createCherry, 15000)
    createPizza(gBoard)
    createGhosts(gBoard)
    createPacman(gBoard)
    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) {
                board[i][j] = WALL
            }
        }
    }
    return board
}

function updateScore(diff) {
    // TODO: update model and dom
    // Model
    gGame.score += diff
    --totalFoodOnBoard
    console.log(totalFoodOnBoard)
    // DOM
    document.querySelector('h2 span').innerText = gGame.score
    if (totalFoodOnBoard === 0) {
        gIsVictory = true
        gameOver()
    }
}

function gameOver() {
    console.log('Game Over')
    // TODO
    clearInterval(gIntervalGhosts)
    renderCell(gPacman.location, '🪦')
    onOpenModal()
}

function onOpenModal() {
    var elModal = document.querySelector('.modal')
    var elTitle = document.querySelector('h3')
    if (!gIsVictory) {
        elTitle.innerText = 'loser '
    }
    else elTitle.innerText = 'Victory'
    elModal.style.display = 'block'
}