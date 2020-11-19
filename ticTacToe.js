
var tabuleiro = [["","",""],["","",""],["","",""]];
var simbolo = "X"
var finished = false;
var cenas;
function jogada(cenas,lin,col){
    if(!finished){
        var block = "block_" + cenas;
        document.getElementById(block).innerHTML = simbolo;
        tabuleiro[lin][col]= simbolo;
        checkWinner()
        simbolo= simbolo=== "X" ? "O" : "X";
    }
}
/*
function checkWinner () {
    if(tabVazio=== false) {
        if(tabuleiro[0]!= 0 && tabuleiro[0]==tabuleiro[1]){
            if(tabuleiro[0]==tabuleiro[2]){
            grandeVencedor()
            restart()
            }
        }else if(tabuleiro[3]!= 0 && tabuleiro[3]==tabuleiro[4]){
            if(tabuleiro[3]==tabuleiro[5]){
            grandeVencedor()
            restart()
            }
        }else if(tabuleiro[6]!= 0 && tabuleiro[6]==tabuleiro[7]){
            if(tabuleiro[6]==tabuleiro[8]){
            grandeVencedor()
            restart()
            }
        }else if(tabuleiro[0]!= 0 && tabuleiro[0]==tabuleiro[3]){
            if(tabuleiro[0]==tabuleiro[6]){
            grandeVencedor()
            restart()
            }
        }else if(tabuleiro[1]!= 0 && tabuleiro[1]==tabuleiro[4]){
            if(tabuleiro[1]==tabuleiro[7]){
            grandeVencedor()
            restart()
            }
        }else if(tabuleiro[2]!= 0 && tabuleiro[2]==tabuleiro[5]){
            if(tabuleiro[2]==tabuleiro[8]){
            grandeVencedor()
            restart()
            }
        }else if(tabuleiro[0]!= 0 && tabuleiro[0]==tabuleiro[4]){
            if(tabuleiro[0]==tabuleiro[8]){
            grandeVencedor()
            restart()
            }
        }else if(tabuleiro[2]!= 0 && tabuleiro[2]==tabuleiro[4]){
            if(tabuleiro[2]==tabuleiro[6]){
            grandeVencedor()
            restart()
            }
        }

    }
}
*/

function checkWinner(){
    //ciclo for para iterar os elementos do array
    for(var i=0; i<3;i++){
        //if checkLinha(i) is true, call grandeVencedor()  
        
        checkLinha(i) && grandeVencedor();
        checkColuna(i) && grandeVencedor();
        //na checkCross, não é necessário passar o i como argumento pois ela vai checkar dois parametros[lin] e [col]
        checkCross() && grandeVencedor();
    }
    
}


function checkLinha(i){
    //verifica se o tabuleiro[i][0] existe/não está vazio
    //se existir, e se tabuleiro[i][0] for igual a tabuleiro[i][1] e a tabuleiro[i][2], a função retorna true
    return tabuleiro[i][0] && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]
}

function checkColuna(i){
    //verifica se o tabuleiro[0][i] existe/não está vazio
    //se existir, e se tabuleiro[0][i] for igual a tabuleiro[1][i] e a tabuleiro[2][i], a função retorna true
    return tabuleiro[0][i] && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]
}

function checkCross(){
    //verifica se o tabuleiro[1][1] existe/não está vazio(está presente em ambas as cruzes)
    //se existir, a função checkCross retorna true quer se verifique o que está à esquerda do "ou" ||
    //quer o que se encontra à direita
    return tabuleiro[1][1] && ((tabuleiro[0][0]===tabuleiro[1][1] && tabuleiro[1][1]===tabuleiro[2][2]) || 
        (tabuleiro[0][2]===tabuleiro[1][1] && tabuleiro[1][1]=== tabuleiro[2][0]))
}

function restart(){
    var elements= document.getElementsByClassName("area-jogo");
    for(var i=0;i<elements.length; i++){
        elements[i].style.backgroundColor= "red";
    }
    finished=true;
}

function grandeVencedor() {
    document.getElementById("vencedor").innerHTML = "TERMINOU! O vencedor é o jogador com o " + simbolo + "!!!";
    restart();
}
