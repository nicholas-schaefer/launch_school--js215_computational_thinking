function star(starsCount) {
  const halfStarsCountFloored = Math.floor(starsCount / 2);
  const blankArray = Object.freeze(new Array(starsCount).fill(' '));

  const star= {
    topLines: [],
    middleLine: ['*'.repeat(starsCount)],
    bottomLines: [],
  }

  for (let i = halfStarsCountFloored; i > 0; i -=1 ){
    const lineArray = [...blankArray];
    lineArray[halfStarsCountFloored -i] = '*';
    lineArray[halfStarsCountFloored] = '*';
    lineArray[halfStarsCountFloored + i] = '*';
    const lineString = lineArray.join('');

    star['topLines'].push(lineString);
    star['bottomLines'].unshift(lineString);
  }
  const starArray = [].concat(star['topLines'], star['middleLine'], star['bottomLines'] )
  return starArray.join('\n')
}

console.log(star(9));