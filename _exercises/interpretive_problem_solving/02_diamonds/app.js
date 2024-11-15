function diamond(n){
  if (n % 2 ===0) return
  const CHARS = {
    featured: ' ',
    background: '*',
  }

  const lines = {
    top: [],
    middle: [CHARS['featured'].repeat(n)],
    bottom: [],
  }

  const arrayBackgroundChars = Object.freeze(new Array(n).fill(CHARS['background']));
  const halfRowCountFloored = Math.floor(n/2);

  for (let i = halfRowCountFloored; i > 0; i -=1){
    const lineString = [...arrayBackgroundChars].fill(CHARS['featured'], i, n - i).join('');
    lines.top.push(lineString);
    lines.bottom.unshift(lineString);
  }

  const arrayAllLines = [].concat(lines['top'], lines['middle'], lines['bottom']);
  return arrayAllLines.join('\n');
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));