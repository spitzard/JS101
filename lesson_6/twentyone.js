const SUITS = ['heart', 'club' , 'spade', 'diamond'];
const SUIT_KEYS = ['two','three','four','five','six','seven','eight','nine','ten','jack','king','queen','ace'];
const SUIT_VALUES = [1, 2, 3, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const TWENTY_ONE = 21;
let deck = {};
let playerHand = {};
let dealerHand = {};

//SUITS.forEach(suit => SUIT_KEYS.forEach((key, idx) => console.log(suit + " " + key + " " + SUIT_VALUES[idx])));


SUITS.forEach(function (suit) {
  let cards = {};
  SUIT_KEYS.forEach( function(key, idx) {
    Object.assign(cards, {[key] : SUIT_VALUES[idx]});
  });
  deck[suit] = cards;
});

function hitMe(player) {
  let newCard =  drawRandomCard();
  removeCardFromDeck(newCard,deck);
  let suit = Object.keys(newCard)[0];
  if (!Object.keys(player).includes(suit)) {
    player[suit] = newCard[suit];
  }
  Object.assign(player[suit], newCard[suit]);
}

function countCardValues(hand) {
  let count = [];
  Object.keys(hand).forEach(suit => {
    let card = Object.values(hand[suit]);
    card.forEach(card => count.push(card));
  });
  return count.reduce((acc, val) => Number(acc) + Number(val));
}

function hasAce(hand) {
  return Object.keys(hand).filter(suit => {
    let card = Object.keys(hand[suit]);
    return card[0] === 'ace';
  }).length;
}

function evaluateHand(hand) {
  let handValue =  countCardValues(hand);
  let aces = hasAce(hand);
  if ( aces === 0) {
    return handValue;
  } else {
    while (aces > 0) {
      if (handValue > TWENTY_ONE) {
        handValue -= 10;
      }
      aces -= 1;
    }
    return handValue;
  }
}

function isDeckEmpty(deck) {
  let count = SUITS.reduce( function(acc, val, idx) {
    val = Object.values(deck[SUITS[idx]]).length;
    return val + acc;
  },0);
  return count === 0;
}

function removeCardFromDeck(card, deck) {
  delete deck[Object.keys(card)][Object.keys(Object.values(card)[0])];
}

function drawRandomCard() {
  let card = {};
  let val = 0;
  let randIdx = Math.floor(Math.random() * SUITS.length);
  let randIdx2 = Math.floor(Math.random() * SUIT_KEYS.length);
  let suit = [SUITS[randIdx]];
  let key =  [SUIT_KEYS[randIdx2]];
  val = deck[suit][key];
  if (!isDeckEmpty(deck)) {
    while (val === undefined) {
      randIdx = Math.floor(Math.random() * SUITS.length);
      randIdx2 = Math.floor(Math.random() * SUIT_KEYS.length);
      suit = [SUITS[randIdx]];
      key =  [SUIT_KEYS[randIdx2]];
      val = deck[suit][key];
    }
  }
    return Object.assign(card, {[suit] : {[key] : deck[SUITS[randIdx]][SUIT_KEYS[randIdx2]]}});
}

for (let i = 0; i < 3; i++) {
  if (isDeckEmpty(deck)) break;
  hitMe(playerHand);
  hitMe(dealerHand);
  console.log(playerHand);
  console.log("Player value: " + evaluateHand(playerHand));
  console.log(dealerHand);
  console.log("Dealer value: " + evaluateHand(dealerHand));

}


//console.log(playerHand);
//console.log('Player');

//console.log('Dealer');
//console.log(dealerHand);

//console.log(count);

/*dealerHand.heart = {};
Object.assign(dealerHand.heart, {two : 2});
Object.assign(dealerHand.heart, {three : 3});
Object.assign(dealerHand.heart, {four : 4});

console.log(dealerHand);
*/