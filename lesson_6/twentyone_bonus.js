const SUITS = ['Heart', 'Club' , 'Spade', 'Diamond'];
const CARD_KEYS = ['2','3','4','5','6','7','8','9','10','Jack','King','Queen','Ace'];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const TWENTY_ONE = 21;
const DEALER_LIMIT = 17;
const PLAYAGAIN_YES = ["y"];
const PLAYAGAIN_NO = ["n"];
const HIT_COMMAND = ["h"];
const STAY_COMMAND = ["s"];
const BESTOF = 5;
const SCORE = {player : 0, dealer : 0};
let readline = require('readline-sync');

while (true) {
  console.clear();
  displayTurn("Welcome to Twenty-One. Good luck!");
  displayMode();
  let playerTotal = 0;
  let dealerTotal = 0;
  let deck = initializeDeck();
  let playerHand = initializeCards(2, deck);
  let dealerHand = initializeCards(2, deck);
  displayScore();
  if (endMatch()) {
    displayMatchWinner();
    if (playAgain()) {
      resetScore();
      continue;
    } else break;
  }
  console.log("Cards have been dealt!\n");
  displayHands(playerHand, dealerHand, "Dealer");
  displayTurn("Your turn!");
  while (true) {
    playerTotal = evaluateHand(playerHand);
    if (busted(playerTotal)) break;
    if (!stayOrHit()) break;
    hitMe(playerHand, deck);
    console.log("\nYou have: " + showCards(getCards(playerHand)));
  }

  if (busted(playerTotal)) {
    displayBusted("You");
    displayOutcome(playerTotal, dealerTotal, playerHand, dealerHand);
    updateScore(playerTotal, dealerTotal);
    readline.question();
    continue;
  } else {
    console.log("\nYou chose to stay!");
  }

  displayTurn("Dealer's turn!");

  while (true) {
    dealerTotal = evaluateHand(dealerHand);
    if (seventeenStays(dealerTotal) || busted(dealerTotal)) break;
    console.log("Dealer hits!\n");
    hitMe(dealerHand, deck);
  }

  if (busted(dealerTotal)) {
    displayBusted("Dealer");
    displayOutcome(playerTotal, dealerTotal, playerHand, dealerHand);
    updateScore(playerTotal, dealerTotal);
    readline.question();
    continue;
  } else {
    console.log("Dealer chose to stay!");
  }

  displayTurn("Showdown!");
  displayOutcome(playerTotal, dealerTotal, playerHand, dealerHand);
  updateScore(playerTotal, dealerTotal);

  readline.question();
  continue;
}

displayTurn("Thank you for playing Twenty-One! Best of luck!");

///////////////////////////////////////////////////////////////////////////

function displayWinner(playerTotal, dealerTotal) {
  let winner = determineWinner(playerTotal, dealerTotal);
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

function displayOutcome(playerTotal, dealerTotal, player, dealer) {
  console.log("");
  displayHands(player, dealer);
  displayWinner(playerTotal, dealerTotal);
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
  console.log(`${player} busted.`);
}

function displayPlayAgain() {
  console.log("\nPlay again? yes / no");
}

function playAgain() {
  displayPlayAgain();
  let answer = readline.question();
  while (true) {
    if (PLAYAGAIN_YES.includes(answer.toLowerCase()[0])) return true;
    else if (PLAYAGAIN_NO.includes(answer.toLowerCase()[0])) return false;
    else {
      console.log("Cannot recognize your choice. Play again? yes / no");
      answer = readline.question();
    }
  }
}

function busted(total) {
  return total > TWENTY_ONE;
}

function updateScore(playerTotal, dealerTotal) {
  let winner = determineWinner(playerTotal, dealerTotal);
  switch (winner) {
    case "You": SCORE.player += 1;
      break;
    case "Dealer": SCORE.dealer += 1;
      break;
  }
}

function displayMode() {
  let games = "games";
  if (BESTOF === 1) games = games.substr(0,4);
  console.log(`Mode: ${BESTOF} ${games} to win the match.`);
}

function matchWinner() {
  return SCORE.player > SCORE.dealer;
}

function displayMatchWinner() {
  if (matchWinner()) {
    console.log("Congratulations you won the match!\n");
  } else console.log("The match is over! The house won, empty your pockets!\n");
}

function endMatch() {
  return (SCORE.player >= BESTOF || SCORE.dealer >= BESTOF);
}

function resetScore() {
  SCORE.player = 0;
  SCORE.dealer = 0;
}

function displayScore() {
  console.log("");
  console.log("Your score: " + SCORE.player);
  console.log("Dealer score: " + SCORE.dealer);
  console.log("");
}

function seventeenStays(handTotal) {
  if (handTotal >= DEALER_LIMIT) return true;
  else return false;
}

function determineWinner(playerTotal, dealerTotal) {
  if (busted(playerTotal)) return "Dealer";
  else if (busted(dealerTotal)) return "You";
  else if (playerTotal === dealerTotal) return "Both";
  else if (playerTotal > dealerTotal) return "You";
  else return "Dealer";
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

function stayOrHit() {
  console.log("hit or stay?");
  let answer = readline.question();
  while (true) {
    if (HIT_COMMAND.includes(answer.toLowerCase()[0])) return true;
    else if (STAY_COMMAND.includes(answer.toLowerCase()[0])) return false;
    else {
      console.log("Don't take a chance. hit or stay ?");
      answer = readline.question();
    }
  }
}