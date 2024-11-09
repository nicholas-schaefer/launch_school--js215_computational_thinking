let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  const formatNameString = (str) => str.toUpperCase().replace(".", "");

  return bands.map((obj)=>{
    obj.country = 'CANADA';
    obj.name = formatNameString(obj.name);
    return obj
  })

}

const solution = processBands(bands);
console.log(solution)

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]