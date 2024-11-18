function range({start, end}) {
  if (start === undefined && end === undefined) return
  start ??= 0

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

console.log(range({start: 10, end: 20}));
console.log(range({end:5}));