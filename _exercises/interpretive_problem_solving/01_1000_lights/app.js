function lightsOn(switches) {
  const switchBoard = createSwitchBoard({switchesCount: switches, defaultSwitchState: false})
  const updatedSwitchBoard = updateSwitchBoard({switchBoard: switchBoard, rounds: switches });

  const lightStatus = { on: [], off: []}

  Array.from(updatedSwitchBoard).forEach(([lightSwitch, isOn])=>{
    isOn ? lightStatus.on.push(lightSwitch) : lightStatus.off.push(lightSwitch)
  })
  return lightStatus.on
}

function updateSwitchBoard({switchBoard, rounds}){
  for (let i = 1; i <= rounds; i +=1){
    lightToSwitch = i;
    while (lightToSwitch <= rounds){
      switchBoard.set(lightToSwitch, !switchBoard.get(lightToSwitch))
      lightToSwitch += i;
    }
  }
  return switchBoard
}

function createSwitchBoard({switchesCount, defaultSwitchState} = {}){
  const switchBoard = new Map();
  for (let i = 1; i <= switchesCount; i +=1){
    switchBoard.set(i, defaultSwitchState)
  }
  return switchBoard
}

console.log(lightsOn(5));        // [1, 5]
// Detailed result of each round for `5` lights
// Round 1: all lights are on                                     1, 2, 3, 4, 5    1
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on    1, 3, 5          2
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on        1, 4             3
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on    1, 5             4
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on        1                5

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Generate Array listing switches that need to be toggled
// Transfrom Array into indexes that need to be toggled ( -1 on everything)