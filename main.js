var turno = "X" // O turno começa pelo x = vermelho
win = [[0,1,2], [3,4,5], [6,7,8],//Horizontais - Horizontals
       [0,3,6], [1,4,7], [2,5,8], //Verticais - Verticals
          [0,4,8], [2,4,6]] //Diagonais - Diagonals

var jogoTerminado = false

function insert(clickedField) { // A funçao principal, roda ao clicar em qualquer quadrado do jogo
    if (jogoTerminado == false) { // So ira rodar caso o jogo nao tenha se encerrado ainda

        clickedField = parseInt(clickedField) // Transforma o numero que veio em string para número
        let fields = document.getElementsByClassName('field') //Uma lista com todos os quadrados
        for (let field of fields) { // Para cada quadrado nessa lista de quadrados roda uma vez

            var classX = field.classList.contains('choiceX') //Verifica se o espaço da vez tem a classe choiceX
            var classCircle = field.classList.contains('choiceCircle')// e se retorna True ou False

            //O if abaixo verifica se o valor da div da vez é o mesmo da div que foi clicada
            //Além disso verifica o turno, e se os valores definidos acima são Falses
            if (field.innerHTML == clickedField && turno == "X" && !classX && !classCircle) {
                field.classList.add('choiceX')
                //Abaixo segue a várivel de turno trocando
                turno = "circle"

            //Mesma regra do if ali de cima, só que para o turno do circulo
            } else if (field.innerHTML == clickedField && turno == "circle" && !classCircle && !classX) {
                field.classList.add('choiceCircle')
                turno = "X"
            }
        }
        checkWin() // Após toda jogada, é checado se teve algum vencedor
        jogoTerminado = checkWin() // E aqui é para obter o valor True ou False de se teve ou não um vencedor
    }

}
var winner = ""
function checkWin() {
    // Definindo variaveis usadas
    var markedX = [], markedCircle = []
    var xIguais = 0, circleIguais = 0
    let fields = document.getElementsByClassName('field')

    for (var field of fields) {// Irá rodar para cada quadrado do jogo

        if (field.classList.contains('choiceX')) { // Se o quadrado da vez tiver a class choiceX
            markedX.push(parseInt(field.innerHTML))// O valor que está dentro da div será inserida na lista
        }
        if (field.classList.contains('choiceCircle')) {// As mesmas regras para o de cima, só que choiceCircle
            markedCircle.push(parseInt(field.innerHTML))
        }
    }
    var i = 0
    for (var w of win) { // w = [0,1,2] - [3,4,5] etc
        for (var n of w) { // n = 0 - 1 - 2 -- 3 - 4 -5
            if (markedX.includes(n)) { // Se os x marcados incluirem o valor de n, vai somar mais um para o x
                xIguais++
            }
            if (markedCircle.includes(n)) { // Mesma regra do x só que para o O
                circleIguais++
            }
            if (circleIguais >= 3 || xIguais >= 3) { // Se o X ou o Circle tiverem 3 iguais, va quebrar o loop
                break
            }
        }
        if (circleIguais >= 3 || xIguais >=3) {// E a mesma regra do de cima
                break
            }
        circleIguais = 0 // Caso o X ou o Circle não tenham os 3 para a vitória,
        xIguais = 0 // a contagem de igual deles será zerada
    }

    if (xIguais >= 3) {
        winner = "x"
        jogoTerminado = true
        document.getElementsByTagName('h1')[0].innerHTML = `O vencedor foi o Vermelho`
        return jogoTerminado
    }
    if (circleIguais >= 3) {
        winner = "o"
        jogoTerminado = true
        document.getElementsByTagName('h1')[0].innerHTML = `O vencedor foi o Verde`
        return jogoTerminado
    }
    return jogoTerminado

}
