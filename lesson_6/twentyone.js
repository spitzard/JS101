const SUITS = ['Heart', 'Club' , 'Spade', 'Diamond'];
const CARD_KEYS = ['2','3','4','5','6','7','8','9','10','Jack','King','Queen','Ace'];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const TWENTY_ONE = 21;
const DEALER_LIMIT = 17;
const PLAYAGAIN_YES = ["yes", "y"];
const PLAYAGAIN_NO = ["no", "n"];
let readline = require('readline-sync');

while (true) {
  console.clear();
  displayTurn("Welcome to twenty one. Good luck!");

  let deck = initializeDeck();
  let playerHand = initializeCards(2, deck);
  let dealerHand = initializeCards(2, deck);
  console.log("Cards have been dealt!\n");
  displayHands(playerHand, dealerHand, "Dealer");
  displayTurn("Your turn!");
  while (true) {
    if (busted(playerHand)) break;
    console.log("hit or stay?");
    let answer = readline.question();
    if (answer === 'stay') break;
    hitMe(playerHand, deck);
    console.log("\nYou have: " + showCards(getCards(playerHand)));
  }

  if (busted(playerHand)) {
    displayBusted("You");
    if (playAgain()) continue;
    else break;
  } else {
    console.log("\nYou chose to stay!");
  }

  displayTurn("Dealer's turn!");

  while (true) {
    if (seventeenStays(dealerHand) || busted(dealerHand)) break;
    console.log("Dealer hits!\n");
    hitMe(dealerHand, deck);
  }

  if (busted(dealerHand)) {
    displayBusted("Dealer");
    if (playAgain()) continue;
    else break;
  } else {
    console.log("Dealer chose to stay!");
  }

  displayTurn("Showdown!");

  displayHands(playerHand, dealerHand);

  let winner = determineWinner(playerHand, dealerHand);
  displayWinner(winner);
  if (playAgain()) continue;
  else break;
}

displayTurn("Thank you for playing!");

///////////////////////////////////////////////////////////////////////////

function displayWinner(winner) {
  switch (winner) {
    case "Both": console.log("\nIt is a tie!");
      break;
    case "You": console.log(`\n${winner} win. Congratulations!`);
      break;
    case "Dealer": console.log(`\n${winner} wins. Better luck next time!`);
      break;
  }
}

function displayHands(player, dealer, unknownCard = "") {
  console.log("Dealer has: " + showCards(getCards(dealer),unknownCard));
  console.log("You have: " + showCards(getCards(player)));
}

function displayTurn(Message) {
  let count = Message.length;
  let border = "=";
  console.log("");
  console.log(border.repeat(count));
  console.log(Message);
  console.log(border.repeat(count));
  console.log("");
}

function displayBusted(player) {
  let wins = "The house wins!";
  if (player === "Dealer") wins = "You win!";
  console.log(`${player} busted. ${wins}`);
}

function displayPlayAgain() {
  console.log("\nPlay again? yes / no");
}

function playAgain() {
  displayPlayAgain();
  let answer = readline.question();
  while (true) {
    if (PLAYAGAIN_YES.includes(answer.toLowerCase())) return true;
    else if (PLAYAGAIN_NO.includes(answer.toLowerCase())) return false;
    else {
      console.log("Cannot recognize your choice. Play again? yes / no");
      answer = readline.question();
    }
  }
}

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
    return "You";
  } else return "Dealer";
}

function getCards(hand) {
  let cardKeys = [];
  let cards = Object.keys(hand).map(suit => Object.keys(hand[suit]));
  cards.forEach(suit => suit.forEach(card => cardKeys.push(card)));
  return cardKeys;
}

function showCards(cards, unknownCard = "") {
  switch (unknownCard) {
    case "Dealer": return cards[0] + " and unkown card.";
    default: return cards.slice(0, cards.length - 1).join(", ") + " and " + cards[cards.length - 1] + ".";
  }
}

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