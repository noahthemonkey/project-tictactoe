const statusMessage = document.createElement('div')
const contentContainer = document.querySelector('#content')

const gameboard = {
  board: ['square1', 'square2', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8', 'square9']
}




const players =  {
  
    player1: {
      username: '',
      role: 'x'
    },
    player2: {
      username: '',
      role: 'o'

    },

}

const playerStart = () => {
  const player1Input = document.getElementById('player1')
  const player2Input = document.getElementById('player2')
  players.player1.username = player1Input.value
  players.player2.username = player2Input.value
  console.log(players)
  console.log(player1Input.value)
  console.log(player2Input.value)
  statusMessage.textContent = 'its ' + players.player1.username + "'s turn"
  contentContainer.appendChild(statusMessage)

}

let playerPicker = 'x';
let currentPlayer;
let playerName = players.player1.username;



playerTurn = () => {

  switch(currentPlayer) {
        case undefined:
          currentPlayer = 1;
          playerPicker = players.player1.role
          playerName = players.player1.username
      
        case 1:
          playerPicker = players.player1.role
          playerName = players.player2.username
          return currentPlayer = 2;
        case 2:
          playerPicker = players.player2.role
          playerName = players.player1.username
          return currentPlayer = 1, playerPicker = players.player2.role;
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
        playerTurn()
        statusMessage.textContent = 'its ' + playerName + "'s turn"
        console.log('its ' + playerName + "'s turn")
        contentContainer.appendChild(statusMessage)
        
        gameboard.board[index] = playerPicker
        console.log(gameboard.board)
        clickedElement.textContent = playerPicker


    }
  }



  return {}
}





console.log(gameboard.board)
