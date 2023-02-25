document.addEventListener("DOMContentLoaded", ()=>{
   let squares = document.querySelectorAll(".square")
   
   squares.forEach(square => {
       square.addEventListener('click', (event)=>{
           handleClick(event.target.id)
       })
   });
})

function handleClick(position){
    if(board[position] == ''){

       if(handleMove(position)){
        setTimeout(()=>{
            alert("Há um vencedor, é o " + symbols[playerTime])

        }, 10)
       }
        updadeSquare(position)
    }
}

function updadeSquare(position){
    let square = document.getElementById(position.toString());
    square.innerHTML= `<div class="${board[position]}"></div>`;
}