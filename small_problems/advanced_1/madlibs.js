const ADJECTIVES = ["quick", "lazy", "sleepy", "noisy", "hungry"];
const NOUNS = ["fox", "dog", "head", "leg", "tail", "cat"];
const VERBS = ["jumps", "lifts", "bites", "licks", "pats"];
const ADVERBS = ["easily", "lazily", "noisily", "excitedly"];
const KEYS = ["_ADJECTIVE_", "_NOUN_", "_VERB_", "_ADVERB_" ];

function madlibs(template) {
  let newU = template;
  template.split(" ").forEach(_ => {
    newU = newU.replace(/_ADJECTIVE_/, randomize(ADJECTIVES));
    newU = newU.replace(/_NOUN_/, randomize(NOUNS));
    newU = newU.replace(/_VERB_/, randomize(VERBS));
    newU = newU.replace(/_ADVERB_/, randomize(ADVERBS));
  });
  console.log(newU);
}


function randomize(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let template1 = "The _ADJECTIVE_ _NOUN_ _VERB_ the _ADJECTIVE_ dog, while the dog _ADVERB_ _VERB_ the _NOUN_ sandwich.";

madlibs(template1);