
var tabuleiro = ["","","","","","","","",""];
var simbolo = "X"

var tabVazio= true;

var cenas;
function jogada(cenas){
    tabVazio= false;
    var block = "block_" + cenas;
    document.getElementById(block).innerHTML = simbolo;
    tabuleiro[cenas]= simbolo;
    if( simbolo === "X"){
        simbolo= "O";
        
        
    }else if (simbolo === "O"){
        simbolo = "X"
        
    }
    console.log(tabuleiro)
    checkWinner()
    
    

}

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
 


function restart(){
    var elements= document.getElementsByClassName("area-jogo");
    for(var i=0;i<elements.length; i++){
        elements[i].style.backgroundColor= "red";
    }

}

function grandeVencedor() {
    var counter;
    if(simbolo ==="X"){
        counter= "O";
    }else {
        counter="X";
    }
    document.getElementById("vencedor").innerHTML = "ACABOU! O vencedor é o jogador com o " + counter + "!!!";
}
