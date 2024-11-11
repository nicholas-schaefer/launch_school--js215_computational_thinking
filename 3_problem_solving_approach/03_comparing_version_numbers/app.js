function compareVersions(version1, version2) {
  if (!validVersionInput(version1) || !validVersionInput(version2)) return null;

  const v1Array = version1.split('.');
  const v2Array = version2.split('.');
  const v1ArrayInitialLength = v1Array.length;
  const v2ArrayInitialLength = v2Array.length;

  const maxLength = Math.max(v1ArrayInitialLength, v2ArrayInitialLength)

  v1Array.length = maxLength
  v2Array.length = maxLength

  const v1FilledArray = [...v1Array].fill('0', v1ArrayInitialLength, maxLength).map(str => parseInt(str, 10));
  const v2FilledArray = [...v2Array].fill('0', v2ArrayInitialLength, maxLength).map(str => parseInt(str, 10));

  for (let idx = 0; idx < maxLength; idx += 1) {
    const [int1, int2] = [v1FilledArray[idx], v2FilledArray[idx]];
    if (int1 === int2) continue;
    return int1 > int2 ? 1 : -1;
  }
  return 0
}

function validVersionInput(versionString) {
  if (typeof versionString !== 'string') return false
  if (!versionString) return false
  const firstChar = versionString[0];
  const lastChar = versionString.slice(-1);

  if ([firstChar, lastChar].includes('.')) return false
  if (versionString.includes('..')) return false

  const regexpAnyNonDigits = /\D/
  if (regexpAnyNonDigits.test(versionString.replace(/\./g, ''))) return false

  return true
}

function compareVersionsTESTS() {
  //less than
  console.log(compareVersions('0.1', '1') === -1)
  console.log(compareVersions('0.1', '1.0') === -1)
  console.log(compareVersions('0.1', '1.00') === -1)

  //greater than
  console.log(compareVersions('1', '0.1') === 1)
  console.log(compareVersions('1.0', '0.1') === 1)
  console.log(compareVersions('1.00', '0.1') === 1)

  //equal
  console.log(compareVersions('0.1', '0.1') === 0)
  console.log(compareVersions('0.1', '0.1.0') === 0)
  console.log(compareVersions('0.1.0.0', '0.1') === 0)
}

function validVersionInputTESTS() {
  //valid
  console.log(validVersionInput('1.2') === true)
  console.log(validVersionInput('1.2.3') === true)

  //invalid argument type provided (Not String)
  console.log(validVersionInput(1.2) === false)
  console.log(validVersionInput(null) === false)

  //invalid multiple periods together
  console.log(validVersionInput('1..2') === false)
  console.log(validVersionInput('1...2') === false)

  //invalid starts or ends with period
  console.log(validVersionInput('.12') === false)
  console.log(validVersionInput('12.') === false)
  console.log(validVersionInput('.12.') === false)

  //invalid any characters other than digits and . is present
  console.log(validVersionInput('1.2)') === false)
  console.log(validVersionInput('1!2') === false)
  console.log(validVersionInput('1.>2') === false)
}

function allTests(){
  validVersionInputTESTS()
  console.log('---')
  compareVersionsTESTS()
}
allTests();