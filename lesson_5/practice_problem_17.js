// 8-4-4-4-12, 32 hexadecimal characters;

function UUIDcode() {
  console.log(`${hexaNumber(8)}-${hexaNumber(4)}-${hexaNumber(4)}-${hexaNumber(4)}-${hexaNumber(12)}`);
}

function hexaNumber(dig) {
  return Number(Math.floor((16 ** (dig - 1)) * (Math.random() + 1))).toString(16);
}

UUIDcode();

function UUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];
  let uuid = "";

  for (let sec = 0; sec <= sections.length - 1; sec++) {
    for (let digits = 0; digits < sections[sec]; digits++) {
      let randIndex = Math.floor(Math.random() * characters.length);
      uuid = uuid.concat(characters[randIndex]);
    }
    if (sec < sections.length - 1) uuid = uuid.concat("-");
  }
  return uuid;
}

console.log(UUID());