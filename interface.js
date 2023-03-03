document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    namePlayers()

    squares.forEach(square => {
        square.addEventListener('click', (event) => {
            handleClick(event.target.id)
        })
    });

    document.querySelector("#novaPart").addEventListener('click', novaPartida);
    document.querySelector("#reiniciar").addEventListener('click', reiniciar);
})

function reiniciar(){
    let jogador1 = document.querySelector("#pj1");
    let jogador2 = document.querySelector("#pj2");
    for(let i = 0; i < board.length; i++){
        board[i] = '';
    }

    playerTime = 0;
    gameOver = false;
    pointPlay1 = 0;
    pointPlay2 = 0;
    jogador1.innerHTML = 0;
    jogador2.innerHTML = 0;
    document.querySelectorAll('.square').forEach(element=>{
        element.innerHTML = '';
    })
}

function novaPartida(){
    for(let i = 0; i < board.length; i++){
        board[i] = '';
    }

    playerTime = 0;
    gameOver = false;
    document.querySelectorAll('.square').forEach(element=>{
        element.innerHTML = '';
    })
}

function namePlayers() {
    document.querySelector("#buttonJogar").addEventListener("click", () => {
        
        playersName[0] = document.querySelector("#play1").value;
        playersName[1] = document.querySelector("#play2").value;
        let players = document.querySelector("#players");
        
        document.querySelector("#namePlayer").style.display = "none";
        
        players.style.display = "inline";
        players.innerHTML = `${playersName[0]} será a Espada e ${playersName[1]} será o Escudo`;

        if(playersName[0] != '' && playersName[1] != ''){
            document.querySelector(".j1 h2").innerHTML = playersName[0];
            document.querySelector(".j2 h2").innerHTML = playersName[1];
        }

        
        setTimeout(() => {
            players.style.display = "none";
        }, 2000);

    })
}

function handleClick(position) {
    if (board[position] == '') {

        if (handleMove(position)) {
            setTimeout(() => {
                
                handleWin();

            }, 10)
        }
        updadeSquare(position)
    }
}

function updadeSquare(position) {
    let square = document.getElementById(position.toString());
    square.innerHTML = `<div class="${board[position]}"></div>`;
}

function handleWin(){
    let jogador1 = document.querySelector("#pj1");
    let jogador2 = document.querySelector("#pj2");
    
    let win = document.querySelector("#win");
    win.innerHTML = `${playersName[playerTime]} VENCEU!!!`
    win.style.display = "inline";

    
    setTimeout(()=>{
        win.style.display = "none";
    }, 2000);
    
    if(playerTime == 0){
        pointPlay1++;
        jogador1.innerHTML = pointPlay1;
    
    }else{
        pointPlay2++;
        jogador2.innerHTML = pointPlay2;
    }
}