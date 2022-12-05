'use strict'

var PACMAN = '😷'
// const SUPER = '👾'
var gPacman

function createPacman(board) {
    // DONE: initialize gPacman...
    gPacman = {
        location: {
            i: 2,
            j: 2
        },
        isSuper: false
    }
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {
    if (!gGame.isOn) return
    // DONE: use getNextLocation(), nextCell
    const nextLocation = getNextLocation(ev.key)
    const nextCell = gBoard[nextLocation.i][nextLocation.j]

    // DONE: return if cannot move
    if (nextCell === WALL) return

    // DONE: hitting a ghost? call gameOver
    if (gPacman.isSuper && nextCell === GHOST) {
        killGhost(nextLocation.i, nextLocation.j)
    }
    if (nextCell === GHOST) {
        gameOver()
        return
    }
    if (nextCell === FOOD) {
        updateScore(1)
    }
    if (nextCell === CHERRY) {
        updateScore(10)
    }
    if (nextCell === PIZZA) {
        if (gPacman.isSuper) return
        setTimeout(cancelSuperMode, 5000)
        superMode()

    }

    // DONE: moving from current location:
    // DONE: update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // DONE: update the DOM
    renderCell(gPacman.location, EMPTY)

    // DONE: Move the pacman to new location:
    // DONE: update the model
    gBoard[nextLocation.i][nextLocation.j] = PACMAN
    gPacman.location = nextLocation
    // DONE: update the DOM
    renderCell(nextLocation, PACMAN)
}

function getNextLocation(eventKeyboard) {
    // console.log(eventKeyboard)
    const nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    // DONE: figure out nextLocation
    switch (eventKeyboard) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
    }
    return nextLocation
}

function superMode() {
    // backToLifeGhosts()
    renderCell
    gPacman.isSuper = true
    console.log(gPacman.isSuper)
    PACMAN = '👾'
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // scaredGhosts()
}
function cancelSuperMode() {
    gPacman.isSuper = false
    console.log(gPacman.isSuper)
    PACMAN = '😷'
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // cancelScaredGhosts()
}

function backToLifeGhosts() {
    for (var i = 0; i < gDeadGhosts.length; i++) {
        gGhosts.push(gDeadGhosts[i])
        console.log('gGhosts2:', gGhosts);
    }

}
killGhost(2, 5)
function killGhost(nextRow, nextColl) {
    console.log(nextRow)
    console.log(nextColl)
    for (var i = 0; i < gGhosts.length; i++) {

        if (nextRow === gGhosts[i].location.i &&
            nextColl === gGhosts[i].location.j) {
            gGhosts.splice(i, 1)
            gDeadGhosts.push(gGhosts[i])

        }
    }
}