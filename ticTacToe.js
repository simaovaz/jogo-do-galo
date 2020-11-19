var tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']]
var simbolo = "X"
var finished = false;

var cenas;
function jogada(cenas, lin, col) {
    if (!finished) {
        var block = "block_" + cenas;
        document.getElementById(block).innerHTML = simbolo;
        tabuleiro[lin][col] = simbolo;
        checkWinner()
        simbolo = simbolo === 'X' ? 'O' : 'X'
    }
}

function checkWinner() {
    for (var i = 0; i < 3; i++) {
        checkLinha(i) && grandeVencedor();
        checkColuna(i) && grandeVencedor();
        checkCross() && grandeVencedor();
    }
}


function checkLinha(i) {
    return tabuleiro[i][0] && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2];
}

function checkColuna(i) {
    return tabuleiro[0][i] && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i];
}

function checkCross() {
    return tabuleiro[1][1] && ((tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) ||
        (tabuleiro[2][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[0][2]))
}


function restart() {
    var elements = document.getElementsByClassName("area-jogo");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
    finished = true;
}

function grandeVencedor() {
    document.getElementById("vencedor").innerHTML = "TERMINOU! O vencedor é o jogador com o " + simbolo + "!!!";
    restart();
}
