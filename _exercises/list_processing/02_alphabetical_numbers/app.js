const INTS_TO_NAMES = [
  [0,  'zero'],
  [1,  'one'],
  [2,  'two'],
  [3,  'three'],
  [4,  'four'],
  [5,  'five'],
  [6,  'six'],
  [7,  'seven'],
  [8,  'eight'],
  [9,  'nine'],
  [10, 'ten'],
  [11, 'eleven'],
  [12, 'twelve'],
  [13, 'thirteen'],
  [14, 'fourteen'],
  [15, 'fifteen'],
  [16, 'sixteen'],
  [17, 'seventeen'],
  [18, 'eighteen'],
  [19, 'nineteen'],
];
const NAMES_TO_INTS = INTS_TO_NAMES.map((pair)=> [...pair].reverse());
const MAP_INTS_TO_NAMES = new Map(INTS_TO_NAMES)
const MAP_NAMES_TO_INTS = new Map(NAMES_TO_INTS)
const convertIntToName = (int) => MAP_INTS_TO_NAMES.get(int);
const convertNameToInt = (int) => MAP_NAMES_TO_INTS.get(int);


function alphabeticNumberSort(numbers){
  return numbers.map(convertIntToName)
                .sort()
                .map(convertNameToInt)
}


const arg = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log(alphabeticNumberSort(arg));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]