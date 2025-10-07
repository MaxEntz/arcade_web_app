type Suit = "♠" | "♥" | "♦" | "♣";
type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

interface Card {
  suit: Suit;
  rank: Rank;
}

class Deck {
  cards: Card[];

  constructor() {
    this.cards = [];
    const suits: Suit[] = ["♠", "♥", "♦", "♣"];
    const ranks: Rank[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push({ suit, rank });
      }
    }
    this.shuffle();
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  draw(): Card {
    const card = this.cards.pop();
    if (!card)
      throw new Error("Plus de cartes !");
    return card;
  }
}

function getHandValue(hand: Card[]): number {
  let value = 0;
  let aces = 0;

  for (const card of hand) {
    if (card.rank === "A") {
      aces++;
      value += 11;
    } else if (["K", "Q", "J"].includes(card.rank)) {
      value += 10;
    } else {
      value += parseInt(card.rank);
    }
  }
  while (value > 21 && aces > 0) {
    value -= 10;
    aces--;
  }
  return value;
}

function handToString(hand: Card[]): string {
  return hand.map(c => `${c.rank}${c.suit}`).join(" ");
}


// -------------------- Game Logic --------------------
// A faire encore :
// - Jouer vraiment pcq meme si y'a pas d'argent sans piocher c'est pas drole
// - Game logic pour plusieurs joueurs
// - L'assurance si croupier pioche un as visible
// - Le split

function playBlackjack() {
  const deck = new Deck();
  const player: Card[] = [deck.draw(), deck.draw()];
  const dealer: Card[] = [deck.draw(), deck.draw()];
  let playerValue: number = getHandValue(player);
  let dealerValue: number = getHandValue(dealer);

  console.log("=== Blackjack ===");
  console.log(`Vos cartes : ${handToString(player)} (valeur: ${playerValue})`);
  console.log(`Carte visible du croupier : ${dealer[0].rank}${dealer[0].suit}`);

  if (playerValue === 21) {
    console.log("\nBlackjack !");
    return;
  }
  while (getHandValue(player) < 17) {
    player.push(deck.draw());
    playerValue = getHandValue(player);
    console.log(`Vous piochez → ${handToString(player)} (valeur: ${playerValue})`);
  }
  playerValue = getHandValue(player);
  if (playerValue > 21) {
    console.log("Vous avez dépassé 21 ! Le croupier gagne.");
    return;
  }
  console.log(`\nMain du croupier : ${handToString(dealer)} (valeur: ${getHandValue(dealer)})`);
  while (getHandValue(dealer) < 17) {
    dealer.push(deck.draw());
    dealerValue = getHandValue(dealer);
    console.log(`Croupier pioche → ${handToString(dealer)} (valeur: ${dealerValue})`);
  }
  dealerValue = getHandValue(dealer);
  console.log("\n=== Résultat final ===");
  console.log(`Vous : ${handToString(player)} (valeur: ${playerValue})`);
  console.log(`Croupier : ${handToString(dealer)} (valeur: ${dealerValue})`);
  if (dealerValue > 21 || playerValue > dealerValue)
    console.log("Vous gagnez !");
  else if (dealerValue === playerValue)
    console.log("Égalité !");
  else
    console.log("Le croupier gagne !");
}

playBlackjack();
