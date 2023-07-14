const winsX = 0;
const winsO = 0;
const invalidBoards = 0;

function is_valid_board(board) {
  const xCount = 0;
  const oCount = 0;
  for (const row of board) {
    for (const cell of row) {
      if (cell !== "X" && cell !== "O" && cell !== "-") {
        return false;
      } else if (cell === "X") {
        xCount++;
      } else if (cell === "O") {
        oCount++;
      }
    }
  }
  if (xCount !== oCount + 1) {
    return false;
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] !== board[0][0]) {
      return false;
    }
    if (board[i][-i - 1] !== board[0][0]) {
      return false;
    }
  }
  return true;
}

function get_winner(board) {
  for (const row of board) {
    if (row.includes("X") === 3) {
      return "X";
    } else if (row.includes("O") === 3) {
      return "O";
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] === board[0][0] && board[i][i] !== "-") {
      return board[i][i];
    } else if (board[i][-i - 1] === board[0][0] && board[i][-i - 1] !== "-") {
      return board[i][-i - 1];
    }
  }
  return null;
}

for (const line of process.stdin) {
  const board = line.split("|")[1].split("");
  if (!is_valid_board(board)) {
    invalidBoards++;
    continue;
  }
  const winner = get_winner(board);
  if (winner === "X") {
    winsX++;
  } else if (winner === "O") {
    winsO++;
  }
}

console.log(winsX, winsO, invalidBoards);
