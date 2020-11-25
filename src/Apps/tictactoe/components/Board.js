import React from 'react';
import Square from './Square';

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '350px',
  height: '350px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

function Board({ squares, onClick })
{
  return (
    <div style={style}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} /> 
      ))}
    </div>
  );
}

export default Board;