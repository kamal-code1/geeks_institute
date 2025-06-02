const board = Array(9).fill(null);
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2]
];

let human = 'X';
let ai = 'O';
let currentPlayer = human;
let difficulty = 'easy';
let gameOver = false;

function chooseSymbol(symbol) {
  human = symbol;
  ai = symbol === 'X' ? 'O' : 'X';
  startGame();
}

function setDifficulty(level) {
  difficulty = level;
  startGame();
}

function startGame() {
  board.fill(null);
  gameOver = false;
  document.getElementById('result').textContent = '';
  document.getElementById('restart').style.display = 'none';
  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
    cell.addEventListener('click', handleClick, { once: true });
  });
  if (ai === 'X') aiTurn();
}

function handleClick(e) {
  const index = e.target.id;
  if (!board[index] && !gameOver) {
    board[index] = human;
    updateBoard();
    if (checkWinner(human)) endGame(`${human} wins!`);
    else if (isTie()) endGame("It's a tie!");
    else aiTurn();
  }
}

function aiTurn() {
  if (gameOver) return;
  let move;
  if (difficulty === 'easy') {
    const empty = board.map((val, idx) => val ? null : idx).filter(v => v !== null);
    move = empty[Math.floor(Math.random() * empty.length)];
  } else {
    move = getBestMove();
  }
  board[move] = ai;
  updateBoard();
  if (checkWinner(ai)) endGame(`${ai} wins!`);
  else if (isTie()) endGame("It's a tie!");
}

function getBestMove() {
  // Simple logic: block human if they are about to win
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    const line = [board[a], board[b], board[c]];
    const counts = line.reduce((acc, val) => {
      if (val === human) acc.human++;
      else if (val === null) acc.empty.push(combo[line.indexOf(val)]);
      return acc;
    }, { human: 0, empty: [] });

    if (counts.human === 2 && counts.empty.length === 1) {
      return counts.empty[0];
    }
  }

  // Otherwise play random
  const empty = board.map((val, idx) => val ? null : idx).filter(v => v !== null);
  return empty[Math.floor(Math.random() * empty.length)];
}

function updateBoard() {
  board.forEach((val, i) => {
    document.getElementById(i).textContent = val;
  });
}

function checkWinner(player) {
  return winCombos.some(combo => combo.every(i => board[i] === player));
}

function isTie() {
  return board.every(cell => cell !== null);
}

function endGame(message) {
  gameOver = true;
  document.getElementById('result').textContent = message;
  document.getElementById('restart').style.display = 'inline-block';
}
