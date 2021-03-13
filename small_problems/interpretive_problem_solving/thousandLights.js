function lightsOn(switches) {
  let lightStatus = Array.from({length: switches }, (_ => "on"));
  lightStatus[0] = undefined;
  for (let pass = 0; pass < switches; pass++) {
    for (let light = 1; light <= switches; light++) {
      if ((light) % pass === 0 && pass > 1) {
        if (lightStatus[light] === "on") lightStatus[light] = "off";
        else lightStatus[light] = "on";
      }
    }
  }
  return lightStatus.map((stat, idx) => (stat === "on" ? idx : undefined)).filter(isTruthy => isTruthy);
}

// LS solution
function lightsOnLS(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum += 1) {
    // rounds: 1..count
    lights = toggleLights(lights, switchNum);
  }

  let result = [];
  for (let idx = 0; idx < count; idx += 1) {
    // indices: 0..count-1
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }

  return result
}

function initializeLights(count) {
  let lights = [];

  for (let switchNum = 0; switchNum < count; switchNum += 1) {
    lights.push(false);
  }

  return lights
}

function toggleLights(lights, round) {
  return lights.map((light, index) => {
   return (index + 1) % round === 0 ? !light : light;
 });
}

console.log(lightsOn(100).join("") === lightsOnLS(100).join(""));
console.log(lightsOn(6).join("") === lightsOnLS(6).join(""));
console.log(lightsOn(78).join("") === lightsOnLS(78).join(""));
console.log(lightsOn(12).join("") === lightsOnLS(12).join(""));