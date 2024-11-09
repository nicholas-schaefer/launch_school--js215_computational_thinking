function totalArea(rectangles){

  return rectangles.reduce((sum, [height, width])=>{
    return sum += height * width;
  },0);

}


function totalSquareArea(rectangles){
  let squares = rectangles.filter( ([height, width]) => height === width);
  let areas = squares.map(([height, width]) => height * width);

  return areas.reduce((sum, area)=>{
    return sum += area;
  },0);
}


let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

const solution1 = totalArea(rectangles);    // 141
console.log(solution1);

const solution2 = totalSquareArea(rectangles);    // 141
console.log(solution2);