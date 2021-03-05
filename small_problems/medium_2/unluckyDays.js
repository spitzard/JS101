function fridayThe13ths(year) {
  let friday13th = [];
  for (let month = 0; month < 12; month++) {
    friday13th.push(new Date(year, month, 13));
  }
  return friday13th.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  },0);
}

console.log(fridayThe13ths(2017));