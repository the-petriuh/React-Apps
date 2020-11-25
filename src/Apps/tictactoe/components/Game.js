import React, { useState } from 'react';
import Board from './Board';

import { calculateWinner } from '../helpers';

const styles = {
  width: '200px',
  margin: '20px auto',
};

function Game()
{
  const [ board, setBoard ] = useState(Array(9).fill(null));
  const [ xIsNext, setXIsNext ] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = index => {
    const boardCopy = [...board];
    // if player clicked in occupies square or the game is won, return
    if (boardCopy[index] || winner) return;
    // Put an X or an O in the clicked square
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  // const jumpTo = () => {

  // }

  return (
    <div>
      <Board squares={board} onClick={handleClick}/>
      <div style={styles}>
        <p>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X': 'O'}`}
        </p>
        <button onClick={() => setBoard(Array(9).fill(null))}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Game;