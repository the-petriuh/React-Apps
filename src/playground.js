import React, { useState } from 'react';

function Playground () {
  const [ color, setColor ] = useState('red');

  const handleChange = event => {
    const newColor = event.target.value;
    setColor(newColor);
  }

  return (
    <div>
      <input
        type="text"
        style={{background: color}}
        name="color"
        value={color}
        onChange={handleChange}
      />
    </div>
  )
}

export default Playground;