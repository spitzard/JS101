const MINUTES = 60;
const HOURS = 24;
const MINUTES_IN_A_DAY = HOURS * MINUTES;

function timeOfDay(minutes) {
  if (minutes < 0) {
    minutes = (minutes % MINUTES_IN_A_DAY) + MINUTES_IN_A_DAY;
  } else minutes %= MINUTES_IN_A_DAY;
  let HH = Math.floor(minutes / MINUTES);
  let mm = Math.floor(minutes % MINUTES);

  return padZero(HH) + ":" + padZero(mm);
}

function padZero(number) {
  return number < 10 ? "0" + number : number.toString();

}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");