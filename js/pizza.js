
var gRowsLocation = [1, 1, 8, 8]
var gColsLocation = [1, 8, 1, 8]

const PIZZA = '🍕'
var gPizza

function createPizza() {
    // DONE: initialize gPizza...
    for (var i = 0; i < gRowsLocation.length; i++) {
        gPizza = {
            location: {
                i: gRowsLocation[i],
                j: gColsLocation[i]
            }
        }
        gBoard[gPizza.location.i][gPizza.location.j] = PIZZA
    }

}
