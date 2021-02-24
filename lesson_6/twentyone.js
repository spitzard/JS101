const SUITS = ['Heart', 'Club' , 'Spade', 'Diamond'];
const CARD_KEYS = ['2','3','4','5','6','7','8','9','10','Jack','King','Queen','Ace'];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const TWENTY_ONE = 21;
const DEALER_LIMIT = 17;
let readline = require('readline-sync');

function initializeCards(number, deck) {
  let hand = {};
  for (let cards = 0; cards < number; cards++) hitMe(hand, deck);
  return hand;
}


function initializeDeck() {
  let deck = {};
  SUITS.forEach(function (suit) {
    let cards = {};
    CARD_KEYS.forEach( function(key, idx) {
      Object.assign(cards, {[key] : CARD_VALUES[idx]});
    });
    deck[suit] = cards;
  });
  return deck;
}

function hitMe(player, deck) {
  let newCard =  drawRandomCard(deck);
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
    return card[0] === 'Ace';
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


function randomize(suitOrCardkey) {
  let randomIndex = Math.floor(Math.random() * suitOrCardkey.length);
  return suitOrCardkey[randomIndex];
}

function drawRandomCard(deck) {
  if (!isDeckEmpty(deck)) {
    let suit = randomize(SUITS);
    let ckey =  randomize(CARD_KEYS);
    let card = deck[suit][ckey];
    while (card === undefined) {
      suit = randomize(SUITS);
      ckey =  randomize(CARD_KEYS);
      card = deck[suit][ckey];
    }
    return Object.assign({}, {[suit] : {[ckey] : deck[suit][ckey]}});
  }
  return {};
}
while (true) {
  console.log("Welcome to twenty one. Good luck!");
  let deck = initializeDeck();
  let playerHand = initializeCards(2, deck);
  let dealerHand = initializeCards(2, deck);
  console.log("Dealer has: " + displayCards(getCards(dealerHand,"Dealer")));
  console.log("You have: " + displayCards(getCards(playerHand)));

  // write the main programm almost all helper functions are in place now

  while (true) {
    if (busted(playerHand)) break;
    console.log("hit or stay?");
    let answer = readline.question();
    if (answer === 'stay') break;
    hitMe(playerHand, deck);
    console.log("You have: " + displayCards(getCards(playerHand)));
  }

  if (busted(playerHand)) {
    console.log("Player busted! The house win!");
    console.log("Play again? yY / nN");
    let answer = readline.question();
    if (answer === "y") continue;
    if (answer === "n") break;
  } else {
    console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
  }

  while (true) {
    if (seventeenStays(dealerHand) || busted(dealerHand)) break;
    console.log("Dealer hits!");
    hitMe(dealerHand, deck);
  }
  console.log(evaluateHand(dealerHand));
  console.log(busted(dealerHand));
  if (busted(dealerHand)) {
    console.log("Dealer busted! You win!");
    console.log("Play again? yY / nN");
    let answer = readline.question();
    if (answer === "y") continue;
    if (answer === "n") break;
    break;
  } else {
    console.log("Dealer chose to stay!");  // if player didn't bust, must have stayed to get here
  }

  console.log("Dealer has: " + displayCards(getCards(dealerHand)));
  console.log("You have: " + displayCards(getCards(playerHand)));

  console.log("The winner is:");
  console.log(evaluateHand(playerHand));
  console.log(evaluateHand(dealerHand));
  let winner = determineWinner(playerHand, dealerHand);
  console.log(winner);
  console.log("Play again? yY / nN");
  let answer = readline.question();
  if (answer === "y") continue;
  if (answer === "n") break;

}

console.log("Thank you for playing!");

function busted(hand) {
  return (evaluateHand(hand)) > TWENTY_ONE;
}

function seventeenStays(hand) {
  if (evaluateHand(hand) >= DEALER_LIMIT) return true;
  else return false;
}

function determineWinner(player, dealer) {
  if (evaluateHand(player) === evaluateHand(dealer)) {
    return "Both";
  } else if (evaluateHand(player) > evaluateHand(dealer)) {
    return "Player";
  } else return "Dealer";
}

function getCards(hand) {
  let cardKeys = [];
  let cards = Object.keys(hand).map(suit => Object.keys(hand[suit]));
  cards.forEach(suit => suit.forEach(card => cardKeys.push(card)));
  return cardKeys;
}

function displayCards(cards, player = "") {
  switch (player) {
    case "Dealer": return cards[0] + " and unkown card.";
    default: return cards.slice(0, cards.length - 1).join(", ") + " and " + cards[cards.length - 1] + ".";
  }
}