const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]


function fridayThe13ths (year){
  let counterFridayThe13ths = 0

  for (let month = 1; month <= 12; month +=1) {
    const dateObj = new Date(`${month}, 13, ${year}`);
    const day = DAYS[dateObj.getDay()]

    if (day === 'friday') counterFridayThe13ths +=1;
  }
  return counterFridayThe13ths
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2