// Declarando variáveis 
let aviso = document.querySelector("#aviso");
let jogador1 = document.querySelector("#pj1");
let jogador2 = document.querySelector("#pj2");
let squares = document.querySelectorAll(".square");

document.addEventListener("DOMContentLoaded", () => { //Função que inicia a lógica do joga logo após o carregamento completo da página.

    namePlayers() //Pegando os nomes dos jogadores.

    squares.forEach(square => { // Adicionando evento de click em cada quadro do tabuleiro do jogo.
        square.addEventListener('click', (event) => {
            handleClick(event.target.id) // função que lhe dar com o click em cada quadro.
        })
    });
})

// Adicionando eventos de click nos botões Nova Partida e Reiniciar.
document.querySelector("#novaPart").addEventListener('click', novaPartida);
document.querySelector("#reiniciar").addEventListener('click', reiniciar);

// Função que reinicia todo o jogo, inclusive zerando o placar.
function reiniciar() {

    for (let i = 0; i < board.length; i++) {
        board[i] = '';
    }

    playerTime = 0;
    gameOver = false;
    pointPlay1 = 0;
    pointPlay2 = 0;
    jogador1.innerHTML = 0;
    jogador2.innerHTML = 0;
    quantJogadas = 0;
    document.querySelectorAll('.square').forEach(element => {
        element.innerHTML = '';
    })
}

// Função que inicia uma nova partida mantendo o placar.
function novaPartida() {
    for (let i = 0; i < board.length; i++) {
        board[i] = '';
    }

    playerTime = 0;
    gameOver = false;
    quantJogadas = 0;
    document.querySelectorAll('.square').forEach(element => {
        element.innerHTML = '';
    })
}

// Função que pega os nomes dos jogadores os expões na tela, informando os simbolos de cada jogador.
function namePlayers() {
    document.querySelector("#buttonJogar").addEventListener("click", () => {

        playersName[0] = document.querySelector("#play1").value;
        playersName[1] = document.querySelector("#play2").value;
        
        if (playersName[0] != '' && playersName[1] != '') { //Verificando se os jogadores adicionaram seus nomes.
            document.querySelector(".j1 h2").innerHTML = playersName[0];
            document.querySelector(".j2 h2").innerHTML = playersName[1];
        } else { // Caso não tenha adicionando seus nomes, são dados aos jogadores nomes padrão. 
            playersName[0] = "Jogador 1";
            playersName[1] = "Jogador 2";
        }

        document.querySelector("#namePlayer").style.display = "none";

        aviso.firstElementChild.innerHTML = `${playersName[0]} será a Espada e ${playersName[1]} será o Escudo!`; //Tela de aviso informando o simbolo de cada jogador.
        aviso.style.display = "inline";

        setTimeout(() => {
            aviso.firstElementChild.innerHTML = `${playersName[1]} inicia o jogo!` //Tela de aviso informando quem iniciará a partida.
        }, 2000);
        setTimeout(() => {
            aviso.style.display = "none";
        }, 3000);



    })
}

// Função que lida com o click nos quadros.
function handleClick(position) {
    if (board[position] == '') { // Verificando se o quadro clicado está vazio.
        quantJogadas++ // Contador de jogadas.
        if (handleMove(position)) { //Verificando se a função detectou uma vitória.
            setTimeout(() => {

                handleWin(); // lidando com a vitória.

            }, 10)
        }

        if (quantJogadas >= 9) { // Verificando a quantidade de jogadas para detectar empate.
            aviso.firstElementChild.innerHTML = "Deu empate inicie uma nova partida";
            aviso.style.display = "inline";
            setTimeout(() => {
                aviso.style.display = "none"
            }, 2000);
        }

        updadeSquare(position); //Atualizando o tabuleiro depois das verificações.
    }
}

// Função que atualiza o tabuleiro.
function updadeSquare(position) {
    let square = document.getElementById(position.toString()); // Pegando o quadro que acaba de ser clicado.
    square.innerHTML = `<div class="${board[position]}"></div>`; // Adicionando um simbolo de acordo com o jogador da vez.
}

// Função que lida com a vitória.
function handleWin() {
    aviso.innerHTML = `${playersName[playerTime]} VENCEU!!!` // Informando na tela o jogador vencedor.
    aviso.style.display = "inline";

    setTimeout(() => {
        aviso.style.display = "none";
    }, 2000);

    //Aumentando 1 ponto para o jogador vencedor e expondo no placar. 
    if (playerTime == 0) { 
        pointPlay1++;
        jogador1.innerHTML = pointPlay1;

    } else {
        pointPlay2++;
        jogador2.innerHTML = pointPlay2;
    }
}