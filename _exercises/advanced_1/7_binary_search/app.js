function binarySearch(haystack, needle){
  const halfIndexFloored = Math.floor(haystack.length/2)
  const guess = haystack[halfIndexFloored];
  if (guess === needle) return ['hit', halfIndexFloored];
  const upperHalf = haystack.slice(halfIndexFloored + 1);
  return binarySearch(upperHalf);
}



const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot',
                    'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// binarySearch(yellowPages, 'Apple Store');                // 0

// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6