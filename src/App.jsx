import { useState } from 'react';
import Board from './components/Board';

import './App.css';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const resetGame = (i) => {
    console.log("Resetando o jogo...");
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[stepNumber];
    const squares = [...current];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...historyCopy, squares]);
    setStepNumber(historyCopy.length);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current);
  
  let statusClass = 'status-next-player';
  if (winner === 'X') statusClass = 'status-winner-x';
  else if (winner === 'O') statusClass = 'status-winner-o';

  return (
    <div className="game">
    <h1 className='jogo-da-velha'>Jogo da Velha</h1>
    <Board squares={current} onClick={handleClick} />
    <div className={`status ${winner ? 'status-winner' : 'status-next-player'}`}>
      {winner ? `Vencedor: ${winner}` : `Próximo jogador: ${xIsNext ? 'X' : 'O'}`}
    </div>
    <button className="reset-button" onClick={resetGame}>
      Reiniciar Jogo
    </button>
  </div>
  );
}

export default App;
