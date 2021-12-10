var turno = "X"
win = [[0,1,2], [3,4,5], [6,7,8],//Horizontais - Horizontals
       [0,3,6], [1,4,7], [2,5,8], //Verticais - Verticals
          [0,4,8], [2,4,6]] //Diagonais - Diagonals
function insert(clickedField) {
    clickedField = parseInt(clickedField)
    let fields = document.getElementsByClassName('field')
    for (let field of fields) {
        var classX = field.classList.contains('choiceX')
        var classCircle = field.classList.contains('choiceCircle')
        if (field.innerHTML == clickedField && turno == "X" && !classX && !classCircle) {
            field.classList.add('choiceX')
            if (turno == "X" && classX == false && classCircle == false) {
                turno = "circle"
            } else if (turno == "circle" && classCircle == false && classX == false) {
                turno = "X"
            }
        } else if (field.innerHTML == clickedField && turno == "circle" && !classCircle && !classX) {
            field.classList.add('choiceCircle')
            if (turno == "X" && classX == false && classCircle == false) {
                turno = "circle"
            } else if (turno == "circle" && classCircle == false && classX == false) {
                turno = "X"
            }
        }
    }
    checkWin()

}
var winner = ""
function checkWin() {
    let fields = document.getElementsByClassName('field')
    var markedX = []
    var markedCircle = []
    for (var field of fields) {
        if (field.classList.contains('choiceX')) {
            markedX.push(parseInt(field.innerHTML))
        }
        if (field.classList.contains('choiceCircle')){
            markedCircle.push(parseInt(field.innerHTML))
            //console.log("markedcir", markedCircle)
        }
    }
    var i = 0
    while (i < win.length) {
        console.log("I = "+i+" win "+win[i])
        if (markedX.includes(win[i])) {
            winner = "X"
        }else if (markedCircle.includes(win[i])) {
            winner = "Circle"
        }
        i++
    }
    console.log(winner)
}
