function letterPercentages(input){
  const totalCharsCount = input.length;

  const lowercaseCount = input.match(/[a-z]/g)?.length ?? 0;
  const uppercaseCount = input.match(/[A-Z]/g)?.length ?? 0;
  const neitherCharsCount = input.match(/[^A-Za-z]/g)?.length ?? 0;

  const Percentages = {};

  Percentages.lowercase = calculatePercentage(lowercaseCount, totalCharsCount, 2)
  Percentages.uppercase = calculatePercentage(uppercaseCount, totalCharsCount, 2)
  Percentages.neither = calculatePercentage(neitherCharsCount, totalCharsCount, 2)

  return Percentages;
}

function calculatePercentage(numberOutOfTotal, total, toFixed){
  const percentUnrounded = numberOutOfTotal / total * 100;
  if (Number.isInteger(toFixed)) return percentUnrounded.toFixed(toFixed)
  return String(percentUnrounded);
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }