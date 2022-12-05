const CHERRY = '🍒'
var gCherry
function renderCherry() {
    var randRow = getRandomInt(1, 8)
    var randColl = getRandomInt(1, 10)
    var newCherry = { i: randRow, j: randColl }
    const targetBallCell = gBoard[randRow][randColl]

    if (targetBallCell.gameElement === BALL || targetBallCell.gameElement === GAMER) renderCherry()

    newCherry = { i: randRow, j: randColl }
    // console.log(newBall)
    gBoard[randRow][randColl].gameElement = GLUE
    gBallsOnBoard++
    renderCell(newGlue, GLUE_IMG)
}


function createCherry(board) {
    // DONE: initialize gCherry...
    // console.log('cherry')
    var randRow = getRandomIntInclusive(1, 8)
    var randColl = getRandomIntInclusive(1, 8)
    gCherry = {
        location: {
            i: randRow,
            j: randColl
        }
    }

    console.log(gCherry.location.i, gCherry.location.j)
    if (gBoard[gCherry.location.i][gCherry.location.j] === EMPTY || gBoard[gCherry.location.i][gCherry.location.j] === FOOD) {
        gBoard[gCherry.location.i][gCherry.location.j] = CHERRY
        renderCell(gCherry.location, CHERRY)
    }

    // else createCherry()

}