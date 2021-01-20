function twice(number) {
  let digits = number.toString().length;
  let numbers = number.toString().split("");
  let midIndex = digits / 2;
  if (!Number.isInteger(midIndex)) return number * 2;

  if (numbers.slice(0,midIndex).join("") === numbers.slice(midIndex,digits).join("")) {

    return Number(numbers.join(""));
  } else return number * 2;
}


console.log(twice(12312));
