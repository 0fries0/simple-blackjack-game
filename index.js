
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const credit = document.querySelector("#credits");

const player = {
     name : "Ritika",
     chips : 140
};



credit.textContent = player.name + " : $"+ player.chips;
console.log(cards);


function startGame() {
   isAlive = true;
   let firstCard = getRandomCard();
   let secondCard = getRandomCard();
   cards = [firstCard, secondCard];
   sum = 0;
   sum += firstCard + secondCard;
  
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got BlackJack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){  let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();}

}

function getRandomCard() {
  let rand = Math.floor(Math.random() * 13) + 1;
  if (rand === 1) return 11;
  if (rand > 10) return 10;
  return rand;
}
