const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard' ,'spock'];

function getShortcuts(array) {
  let shortcuts = [];
  array.forEach(function(valid) {
    shortcuts.push(valid[0]);
  });
  let duplicates = shortcuts.filter((letter, index) => {
    return shortcuts.indexOf(letter) !== index;
  });

  let duplicatesIndices = [];
  if (duplicates.length > 0) {
    duplicates.forEach(function(letter) {
      duplicatesIndices.push(shortcuts.indexOf(letter));
    });
  }
  return duplicatesIndices;
}

let b = getShortcuts(VALID_CHOICES);
console.log(b);
