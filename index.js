// initialisation
isAlive = false
hasBlackjack = false

let cards = []
let message = ""

// DOM manipulation 
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

// player stats display
let player = {
    name: "Suho",
    chips: 420
}

playerEl.textContent = player.name + ": $" + player.chips

// function that generates a random card A,J,Q,K + 1-10
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 // 1 to 14, there is no 0
    if (randomNumber > 10) {
        return 10 // J, K, Q
    } else if (randomNumber === 1) {
        return 11 // Ace
    } else {
        return randomNumber
    }
}

// executes everytime 'start game' button is clicked
function startGame() {
    isAlive = true // changes from false to true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    // show player their cards
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

     // recording sum of cards
     sumEl.textContent = "Sum: " + sum

    // message display
    if (sum < 21) {
        message = "Do you want to draw a new card?"
        // isAlive remains true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    // displaying appropriate message
    messageEl.textContent = message
}

// 'new card' button functionality
function newCard() {
    // only executes if player hasn't got Blackjack & sum(cards) < 21
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard) //adding newCard to array of cards
        renderGame()
    }
}