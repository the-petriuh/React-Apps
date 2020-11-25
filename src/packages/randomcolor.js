function randomColor()
{
  const symbols = '0123456789ABCDEF';
  let color = '#';
  let randomSymbol = '';

  for (let i = 0; i < 6; i++)
  {
    randomSymbol = symbols[Math.floor(Math.random() * 16)];
    color += randomSymbol;
  }

  return color;
}

export default randomColor;