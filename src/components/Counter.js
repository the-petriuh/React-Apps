/*
  aplicando react hooks
  useSate:
    param:
      valor para a variável de estado
    @return
      um array contendo o valor passado como argumento
      e uma função para alterar o valor (estado) da variável
  useEffect:
    param:
      uma function
      um array com as variáveis que serão monitoradas
*/

import React, { useEffect, useState } from 'react';
import randColor from '../packages/randomcolor';

function Counter()
{
  const [ count, setCount ] = useState(0);
  const [ color, setColor ] = useState('');

  function change(event)
  {
    let newCount;
    const option = event.target.name;

    switch(option)
    {
      case 'increment': newCount = count + 1;
        break;
      case 'decrement': newCount = count - 1;
        break;
      case 'double': newCount = count * 2;
        break;
      case 'divide': newCount = Math.floor(count / 2);
        break;
      case 'reset': newCount = 0;
        break;
      default: newCount = count;
        break;
    }

    setCount(newCount);
  }

  useEffect(() => {
    setColor(randColor())
  }, [count]);

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={change} name="increment">Increment</button>
      <button onClick={change} name="decrement">Decrement</button>
      <button onClick={change} name="double">double</button>
      <button onClick={change} name="divide">divide</button>
      <button onClick={change} name="reset">reset</button>
    </div>
  );
}

export default Counter;