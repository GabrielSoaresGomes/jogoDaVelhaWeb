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
    var winner = ""
    var markedX = []
    var markedCircle = []
    var xIguais = 0
    var oIguais = 0
    let fields = document.getElementsByClassName('field')
    for (var field of fields) {
        if (field.classList.contains('choiceX')) {
            markedX.push(parseInt(field.innerHTML))
        }
        if (field.classList.contains('choiceCircle')) {
            markedCircle.push(parseInt(field.innerHTML))
            //console.log("markedcir", markedCircle)
        }
    }
    var i = 0
    for (var w of win) {
        for (var n of w) {
            if (markedX.includes(n)) {
                xIguais++
            }
            if (markedCircle.includes(n)) {
                oIguais++
            }
            if (oIguais >= 3 || xIguais >= 3) {
                break
            }
        }
        if (oIguais >= 3 || xIguais >=3) {
                break
            }
        oIguais = 0
        xIguais = 0


    }
    console.log(xIguais)
    if (xIguais >= 3) {
        winner = "x"
        document.getElementsByTagName('h1')[0].innerHTML = `O vencedor foi o Vermelho`
    }
    if (oIguais >= 3) {
        winner = "o"
        document.getElementsByTagName('h1')[0].innerHTML = `O vencedor foi o Verde`
    }

}
