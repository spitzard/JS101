const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;


function beforeMidnight(timeHHmm) {
  let time = timeFromFormat(timeHHmm);
  let before = ((24 - time.hours) * MINUTES_PER_HOUR) - time.minutes;
  return before % MINUTES_PER_DAY;
}

function afterMidnight(timeHHmm) {
  let time = timeFromFormat(timeHHmm);
  let after = (time.hours * MINUTES_PER_HOUR) + time.minutes;
  return after % MINUTES_PER_DAY;
}

function timeFromFormat(timeHHmm) {
  let hours = Number(timeHHmm.split(":")[0]);
  let minutes = Number(timeHHmm.split(":")[1]);
  return {hours : hours, minutes : minutes};
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
