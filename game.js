// Declarano variáveis.
let board = ['', '', '', '', '', '', '', '', '']; // Array que guarda as posições clicadas e o simbolo do jogador que a clicou.
let playerTime = 0; // Jogador da vez.
let symbols = ['x', 'o']; // Classe dos 2 simbolos.
let playersName = ['','']; // Nomes dos jogadores.
let gameOver = false; // Estado do jogo.
let pointPlay1 = 0; // Pontuação do jogador 1.
let pointPlay2 = 0; // Pontuação do jogador 2.
let quantJogadas = 0; // Contador de jogadas.
let seqWins = [ // Sequências de posições do tabuleiro que resulta em vitória.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Função que lida com os movimentos dos jogadores.
function handleMove(position) { 

    if (gameOver) { 
        return
    }

    board[position] = symbols[playerTime]; //Guardando a posição clicada.
    gameOver = isWin(); // Verificando se há um vencedor.
    playerTime = (playerTime == 0) ? 1 : 0; //Trocando de jogador.

    return gameOver
}

// Função que verifica se há um vencedor.
function isWin() {
    for (let i = 0; i < seqWins.length; i++) { // Passando pelo array de sequências vencedoras.
        let sequence = seqWins[i];
        let seq0 = sequence[0];
        let seq1 = sequence[1];
        let seq2 = sequence[2];


        if (board[seq0] == board[seq1] &&
            board[seq0] == board[seq2] &&
            board[seq0] != '') { // Comparando a sequência clicada com as sequências vencedoras.
            return true
        }

    }
    return false
}