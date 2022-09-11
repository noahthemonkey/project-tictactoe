const statusMessage = document.createElement('div')
const contentContainer = document.querySelector('#content')

const gameboard = {
  board: ['square1', 'square2', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8', 'square9']
}

const gamePlay = () => {
  let horiCombo1 = gameboard.board[0] + gameboard.board[1] +gameboard.board[2]
  let horiCombo2 = gameboard.board[3] + gameboard.board[4] +gameboard.board[5]
  let horiCombo3 = gameboard.board[6] + gameboard.board[7] +gameboard.board[8]
  
  let verCombo1 = gameboard.board[0] + gameboard.board[3] +gameboard.board[6]
  let verCombo2 = gameboard.board[1] + gameboard.board[4] +gameboard.board[7]
  let verCombo3 = gameboard.board[2] + gameboard.board[5] +gameboard.board[8]


  let diaCombo1 = gameboard.board[0] + gameboard.board[4] +gameboard.board[8]
  let diaCombo2 = gameboard.board[2] + gameboard.board[4] +gameboard.board[6]
  
  if(diaCombo1 == 'xxx' || diaCombo2 == 'xxx' || verCombo1 == 'xxx' || verCombo2 == 'xxx' || verCombo3 == 'xxx' || horiCombo1 == 'xxx' || horiCombo2 == 'xxx' || horiCombo3 == 'xxx'){
    statusMessage.textContent = players.player1.username + " won!"

  }
  else if(diaCombo1 == 'ooo' || diaCombo2 == 'ooo' || verCombo1 == 'ooo' || verCombo2 == 'ooo' || verCombo3 == 'ooo' || horiCombo1 == 'ooo' || horiCombo2 == 'ooo' || horiCombo3 == 'ooo'){
    console.log('noob won!')
    statusMessage.textContent = players.player2.username + " won!"
    resetGame()
  } else {
    

    function ifTie(square){
      return square == 'x' || square == 'o'
    }
    if(gameboard.board.every(ifTie) === true){
      console.log('its a tie!')
      statusMessage.textContent = 'Its a tie!'
      resetGame()
    }

      
      }
    }





const players =  {
  
    player1: {
      username: 'X',
      role: 'x'
    },
    player2: {
      username: 'O',
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



  contentContainer.onclick = e => {

    const clickedElement = document.querySelector(`.${e.target.className}`)
    console.log(clickedElement)

    if(clickedElement.textContent == 'x' || clickedElement.textContent == 'o' ){
      return
    }else{

        const index = gameboard.board.indexOf(e.target.className)
        playerTurn()
        statusMessage.textContent = 'Its ' + playerName + "'s turn"
        console.log('Its ' + playerName + "'s turn")
        contentContainer.appendChild(statusMessage)
        
        gameboard.board[index] = playerPicker
        console.log(gameboard.board)
        clickedElement.textContent = playerPicker
        gamePlay()

    }
  }



  return {}
}


const resetGame = () => {
  let i;
    const squares = document.querySelectorAll(`[class*=square]`)

    squares.forEach(squares => {
      squares.innerHTML = ''
    })

    
  for( i = 0; i < 9; i++){

    squares.textContent = ' '
    gameboard.board[i] = `square${i+1}`

    
    
  }

  statusMessage.textContent = 'Its ' + players.player1.username + "'s turn!"
}


console.log(gameboard.board)
