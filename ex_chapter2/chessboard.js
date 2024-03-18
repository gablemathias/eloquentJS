// Creates a string that represents any given 8x8 grid
// Similar to a chessboard

// " #"
// "# " 2x2 grid

// " # "
// "# #" 3x3 grid
// " # "

let count = 8;

function chessBoard(boardSize) {
  let board = ""

  for(let x = 0; x < boardSize; x++) {
    for(let y = 0; y < boardSize; y++){
      if((y+x) % 2 == 0) {
        board += " "
      } else {
        board += "#"
      }
    }
    board += "\n"
  }
  return board;
}

console.log(chessBoard(count));
