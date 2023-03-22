let state;

const gameState = {
  players: ['x', 'o'],
  board: [
    null, null, null,
    null, null, null,
    null, null, null
  ]
// one way I was that after every single instance of placing the X or O
// I should have my program check if it met the victory condition
//looking to get an array
}

    //needs to be in this order
    //event listener after function
const gameArea = document.getElementById('gameBoard');
    // ^ use this for cells

let playerXTurn = true;

function checkWin1(playerIcon) {
  let gameWon = true; //diagonal L to R
  for(let i=0; i<3; i++){
    if(gameState.board[i*4]!=playerIcon){
      gameWon = false;
      break;
    }
  } return gameWon
}

function checkWin2(playerIcon){
  gameWon = true; //diagonal R to L
  for(let i=0; i<3; i++){
    if(gameState.board[(i*2)+2]!=playerIcon){
      gameWon = false;
      break;
    }
  } return gameWon
}

function checkWin3(playerIcon){
  gameWon = true; //0 3 6 down
  for(let i=0; i<3; i++){
    if(gameState.board[(i*3)]!=playerIcon){
      gameWon = false;
      break;
    }
  } return gameWon
}

function checkWin4(playerIcon){
  gameWon = true; //0 1 2 across
    for(let i=0; i<3; i++){
      if(gameState.board[i]!=playerIcon){
        gameWon = false;
        break;
      }
    } return gameWon
}

function checkWin5(playerIcon){
  gameWon = true; //3 4 5 across
    for(let i=0; i<3; i++){
      if(gameState.board[(i+2)+1]!=playerIcon){
        gameWon = false;
        break;
      }
    } return gameWon
}

function checkWin6(playerIcon){
  gameWon = true; //6 7 8 across
    for(let i=0; i<3; i++){
      if(gameState.board[(i+5)+1]!=playerIcon){
        gameWon = false;
        break;
      }
    } return gameWon
}

function checkWin7(playerIcon){
  gameWon = true; //1 4 7 down
    for(let i=0; i<3; i++){
      if(gameState.board[(i*3)+1]!=playerIcon){
        gameWon = false;
        break;
      }
    } return gameWon
}

function checkWin8(playerIcon){
  gameWon = true; //2 5 8 down
    for(let i=0; i<3; i++){
      if(gameState.board[(i*2)+2+i]!=playerIcon){
        gameWon = false;
        break;
      }
    } return gameWon
}



    //onBoardClick is like actually writing with the pen
function onBoardClick(event){
const cellClass = event.target.classList;
  if(cellClass.contains('X_BoardPiece')||cellClass.contains('O_BoardPiece')){
    return;
  } 

  let cellId = event.target.id.substring(5);
  //will store the value in this variable
  // cellId is storing our number and we can plug them into the array (of course
  //we need to start at -1 for each number bc arrays begin at 0
  

  if (playerXTurn) {
    event.target.classList.add('X_BoardPiece')
    //^ we added the X as a class
    //'event''target''classList' all objects
    console.log(event.target.id.substring(5))
    //provides a way to check which cell is clicked
    //crops out the first 5 characters leaving only 1,2 etc
    gameState.board[cellId-1] = 'x'
    const isWinner = checkWin1('x') || checkWin2('x') || checkWin3('x') || checkWin4('x') || checkWin5('x') || checkWin6('x') || checkWin7('x') || checkWin8('x')
    if (isWinner) {
      alert ("Player X is the Winner!")
    } 
    else if (!gameState.board.includes(null)) {
      alert("Draw... Try again?");
    }
    //invokes gamestate
    //has two properties: player and board
    // use '.' to access which one specificially
  }
  else {
    event.target.classList.add('O_BoardPiece')
    console.log(event.target.id.substring(5))
    gameState.board[cellId-1] = 'o'
    const isWinner = checkWin1('o') || checkWin2('o') || checkWin3('o') || checkWin4('o') || checkWin5('o') || checkWin6('o') || checkWin7('o') || checkWin8('o')
    if (isWinner) {
      alert ("Player O is the Winner!")
    }
  }

  console.log(gameState.board)
  playerXTurn = !playerXTurn

  
}

function resetGame() {
  // reset game state
  gameState.board = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
  playerXTurn = true;

  // clear board
  const cells = document.querySelectorAll('.ticTacToeCell');
  cells.forEach(cell => {
    cell.classList.remove('X_BoardPiece');
    cell.classList.remove('O_BoardPiece');
  });
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);




gameArea.addEventListener('click', onBoardClick);