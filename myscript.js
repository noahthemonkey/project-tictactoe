const gameboard = {
  board: ['square1', 'square2', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8', 'square9']
}


const players =  {
  
    player1: {
      username: 'Mojo',
      role: 'x'
    },
    player2: {
      username: 'Merlin',
      role: 'o'

    },

}

let playerPicker = 'x';
let currentPlayer;
playerTurn = () => {

  switch(currentPlayer) {
    case undefined:
      currentPlayer = 1;
      playerPicker = 'x'
      case 1:
        playerPicker = 'x'
        
        return currentPlayer = 2;
        case 2:
          playerPicker = 'o'
          
        return currentPlayer = 1, playerPicker = 'o';
  }
  console.log(playerPicker)
}



const displayController = () => {
  

  window.onclick = e => {
    
    
    
    
    console.log(e.target.className)
    const clickedElement = document.querySelector(`.${e.target.className}`)
    console.log(clickedElement)

    if(clickedElement.textContent == 'x' || clickedElement.textContent == 'o' ){
      return
    }else{

      const index = gameboard.board.indexOf(e.target.className)

      console.log('its ' + playerPicker + "'s turn")
    playerTurn()
    gameboard.board[index] = playerPicker
    console.log(gameboard.board)
    
    clickedElement.textContent = playerPicker
    
    }
  }



  
  return {}
}





console.log(gameboard.board)

console.log(gameboard.board[1])