const MINUTES = 60;
const SECONDS = 60;
const MAX_ANGLE = 360;

function dms(angle) {
  angle = standardizeAngle(angle);
  let rest = angle % 1;
  let degrees = angle - rest;
  let minutesSeconds = rest * MINUTES;
  rest = minutesSeconds % 1;
  let minutes = (minutesSeconds - rest).toFixed(0);
  let seconds = (rest * SECONDS).toFixed(0);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return degrees + "°" + minutes + "'" + seconds + '"';
}

function standardizeAngle(angle) {
  if (angle < 0) {
    return MAX_ANGLE + (angle % MAX_ANGLE);
  } else return angle % 360;

}
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"


console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"