function triangle(side1, side2, side3){
  const msg  = {
    invalid: 'invalid',
    acute: 'acute',
    obtuse: 'obtuse',
    right: 'right'
  };
  const sidesArray = [side1, side2, side3];

  if (sidesArray.some(int => int <= 0)) return msg.invalid;
  if (sidesArray.reduce((sum, int) => sum + int, 0 ) !== 180) return msg.invalid;

  const largestSide = Math.max(...sidesArray);

  switch(true){
    case largestSide === 90: return msg.right;
    case largestSide > 90: return msg.obtuse;
    case largestSide < 90: return msg.acute;
  }



}



console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"