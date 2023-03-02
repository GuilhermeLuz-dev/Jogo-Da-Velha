document.addEventListener("DOMContentLoaded", ()=>{
   let squares = document.querySelectorAll(".square");
   namePlayers()
   
   squares.forEach(square => {
       square.addEventListener('click', (event)=>{
           handleClick(event.target.id)
       })
   });
})

function namePlayers(){
    document.querySelector("#buttonJogar").addEventListener("click", ()=>{
        let namePlayer1 =  document.querySelector("#play1").value;
        let namePlayer2 =  document.querySelector("#play2").value;
        document.querySelector("#namePlayer").style.display = "none";
        let players = document.querySelector("#players");
        players.style.display = "inline";
        players.innerHTML = `${namePlayer1} será a Espada e ${namePlayer2} será o Escudo`;
        setTimeout(()=>{
            players.style.display = "none";
        }, 2000);
       
    })
}

function handleClick(position){
    if(board[position] == ''){

       if(handleMove(position)){
        setTimeout(()=>{
            alert("Há um vencedor, é o " + symbols[playerTime])
            handleWin();
        }, 10)
       }
        updadeSquare(position)
    }
}

function updadeSquare(position){
    let square = document.getElementById(position.toString());
    square.innerHTML= `<div class="${board[position]}"></div>`;
}

// function handleWin(){
//     let win = document.querySelector("#win");
//     win.innerHTML = `${}`
// }