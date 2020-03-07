// author: github.com/pgmdf
/* gamelogic - all classes and functions needed to play the game */

console.log("Here we go")

// set up structure of a card
// name, img, mystery category
// followed by key values that should be compared
class Card {
    constructor(name, img, category, cardindex, keyvalue1, keyvalue2) {
        this.name = name
        this.img = img
        this.category = category
        this.cardindex = cardindex
        this.keyvalue1 = keyvalue1
        this.keyvalue2 = keyvalue2
    }


    // NEW KEY VALUES TO ADD HERE
    // keyvalue1 method
    keyvalue1() {
        return this.keyvalue1
    }

    // keyvalue2 method
    keyvalue2() {
        return this.keyvalue2
    }

}



let userCards 
let userScore = 0
let computerCards
let computerScore = 0

// randomized card decks: computer and user
function pickRandomCards() {
    computerCards = [...cardsArray] // copy
    userCards = []
    for (let i = 0; i < cardsArray.length / 2; i++) {
        let ind = Math.floor(Math.random() * computerCards.length)
        let chosenCard = computerCards.splice(ind, 1)[0]
        // console.log("chosenCard", chosenCard)
        userCards.push(chosenCard)
    }
    console.log(userCards)
    console.log(computerCards)  

    startGame()
    updateMetaGame()
}

// SOLVED: randomize number from 0 to arrays.length
// randomized number including min and max
// function getRandomIntInclusive() {
//     return Math.floor(Math.random() * cardsArray.length);
//     //let result = Math.floor(Math.random() * (max - min +1)) + min;
//     //console.log(result) 
//   }


// winner functions
function checkWinnerVelocity() {
    console.log(userCards[0])
    if (userCards[0].velocity < computerCards[0].velocity) {
        // count score up or down
        computerScore += 5
    } else {
        userScore += 5
    }
    console.log(computerScore)
    console.log(userScore)
    updateMetaGame()
}

function checkWinnerEnergy() {
    if (userCards[0].energy < computerCards[0].energy) {
        // count score up or down
        computerScore += 3
    } else {
        userScore += 3
    }
    updateMetaGame()
}

