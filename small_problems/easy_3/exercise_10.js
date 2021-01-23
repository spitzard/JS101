const CENTURY_ENDINGS = ["st","nd","rd","th"];

function century(year) {

  let century = Math.ceil(year / 100);

  console.log(century);
  let lastDigit = century % 10;
  let tenthDigit = ((century - lastDigit) / 10) % 10;
  let digits = century.toString().length;
  let ending = "";

  if (tenthDigit !== 1 || digits === 1) {
    if (lastDigit === 1) {
      ending = CENTURY_ENDINGS[0];
    } else if (lastDigit === 2) {
      ending = CENTURY_ENDINGS[1];
    } else if (lastDigit === 3) {
      ending = CENTURY_ENDINGS[2];
    } else  ending = CENTURY_ENDINGS[3];
  } else ending = CENTURY_ENDINGS[3];

  console.log(century + ending);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"