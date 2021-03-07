const MADWORDS = {ADJECTIVES : ["quick", "lazy", "sleepy", "noisy", "hungry"],
  NOUNS : ["fox", "dog", "head", "leg", "tail", "cat"],
  VERBS : ["jumps", "lifts", "bites", "licks", "pats"],
  ADVERBS : ["easily", "lazily", "noisily", "excitedly"]};

function madlibs(template) {
  let filled = template;
  const COUNTS = filterPlaceholder(template);
  Object.entries(COUNTS).forEach( function(entries) {
    for (entries[1]; entries[1] > 0; entries[1]--) {
      let regex = new RegExp("\\b" + entries[0] + "\\b");
      filled = filled.replace(regex, randomize((MADWORDS[entries[0]])));
    }
  });
  console.log(filled);
}

function randomize(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function filterPlaceholder(template) {
  const COUNTS = {ADJECTIVES : 0, NOUNS  : 0,  VERBS : 0, ADVERBS : 0, };
  Object.keys(COUNTS).forEach(madword => {
    let regex = new RegExp("\\b" + madword + "\\b",'g');
    COUNTS[madword] = template.match(regex).length;
  });
  return COUNTS;
}

let template1 = "The ADJECTIVES NOUNS VERBS the ADJECTIVES dog, while the dog ADVERBS VERBS the NOUNS sandwich.";

madlibs(template1);
//filterPlaceholder(template1);