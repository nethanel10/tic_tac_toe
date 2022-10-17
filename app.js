let board = [
            0, 0, 0,
            0, 0, 0, //* 0: empty; 1: x; 2: O;
            0, 0, 0
            ]

const initGame = () => {

  //*init the first player turn
  for(let i = 0; i<9; i++) {
    Array.from(document.getElementById('board').children)[i].setAttribute("onClick", `javascript: turn(1, ${i+1});`)
  }
  document.getElementById("feedback").innerHTML = `Player 1 turn`

  //*set up the game clock
  clockInit()
}

const turn = (player, pos) => {
  if(board[pos-1] !== 0) return turn(player, pos)
  board[pos-1] = player
  updateBoard(pos, player)
  statusChecker()
}

const updateBoard = (pos, player) => {
  //*change the board by the selected pos
  Array.from(document.getElementById('board').children)[pos-1].innerHTML = player === 1 ? "X" : "O"

  //*bind the next move to the opposite player
  const oppositePlayer = player === 1 ? 2 : 1
  for(let i = 0; i<9; i++) {
    Array.from(document.getElementById('board').children)[i].setAttribute("onClick", `javascript: turn(${oppositePlayer}, ${i+1});`)
  }

  //*change the feedback to the opposite player turn
  document.getElementById("feedback").innerHTML = `Player ${oppositePlayer} turn`
}

const statusChecker = () => {
  const winningTemplate = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
    [1, 5, 9],
    [3, 5, 7]
  ]

  //*check for win
  for(let i = 0; i<winningTemplate.length; i++) {
    if(board[winningTemplate[i][0] - 1] === 1 && board[winningTemplate[i][1] - 1] === 1 && board[winningTemplate[i][2] - 1] === 1) return announce(1)
    if(board[winningTemplate[i][0] - 1] === 2 && board[winningTemplate[i][1] - 1] === 2 && board[winningTemplate[i][2] - 1] === 2) return announce(2)
  }
  
  //*check for draw
    var count = 0;
    board.forEach((v) => (v === 0 && count++));
    if(count === 0) return announce(0)

}

const announce = (status) => {
  //*print by status.
  //*status=0: draw; status=1: player 1; status=2: player2;
  let feedback;
  switch(status) {
    case 0:
      feedback = "withdraw."
    break;
    case 1:
      feedback = "player 1 won"
    break
    case 2:
      feedback = "player 2 won"
    break
    default: 
      feedback = "internal err."
  }

  document.getElementById("feedback").innerHTML = feedback
  endGame()
}

const endGame = () => {
  for(let i = 0; i<9; i++) {
    Array.from(document.getElementById('board').children)[i].setAttribute("onClick", `javascript: alert("please restart the game to play again.")`)
  }

  //*clear all the previus timers
  clearTimeouts()
}

const restart = () => {
  for(let i = 0; i<9; i++) {
    Array.from(document.getElementById('board').children)[i].innerHTML = ""
  }
  board = [
    0, 0, 0,
    0, 0, 0, //* 0: empty; 1: x; 2: O;
    0, 0, 0
  ]
  initGame( )
}

const clockInit = () => {

  //*clear all the previus timers
  clearTimeouts()

  //*set a new timer
  var totalSeconds = 0;
  setInterval(setTime, 1000);

  function setTime() {
    totalSeconds++
    document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(totalSeconds / 60));
  }

  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
}

const clearTimeouts = () => {
  let id = window.setTimeout(function() {}, 0);

  while (id--) {
      window.clearTimeout(id);
  }
}
initGame()