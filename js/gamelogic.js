// author: github.com/pgmdf

/* GAMELOGIC:   all classes and functions needed to play the game
                set up structure of a card
                name, img, mystery category
                followed by key values that should be compared */

class Card {

    // properties that are individual for every single card
    // attributes //=> [{ name: 'velocity', value: 123 }, { name: 'energy', value: 665 }]
    constructor(name, img, category, cardindex, attributes) {
        this.name = name
        this.img = img
        this.category = category
        this.attributes = attributes
        this.cardindex = cardindex
        this.keyname1 = keyname1
        this.keyvalue1 = keyvalue1
        this.keyname2 = keyname2
        this.keyvalue2 = keyvalue2
        this.keyname3 = keyname3
        this.keyvalue3 = keyvalue3
        this.keyname4 = keyname4
        this.keyvalue4 = keyvalue4
        this.keyname5 = keyname5
        this.keyvalue5 = keyvalue5
        this.keyname6 = keyname6
        this.keyvalue6 = keyvalue6
    }

    // properties that are individual for a specific card deck
    compareAttribute(attributeIdx) {
        return this.attributes[attributeIdx].value
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

// GAMELOGIC: randomized card decks: computer and user
function pickRandomCards() {
    computerCards = [...cardsArray] // copy
    userCards = []
    for (let i = 0; i < cardsArray.length / 2; i++) {
        let ind = Math.floor(Math.random() * computerCards.length)
        let chosenCard = computerCards.splice(ind, 1)[0]
        userCards.push(chosenCard)
    }
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
function checkWinnerKeyValue1() {
    console.log(userCards[0])
    //if (userCards[0].compareAttribute(0) < computerCards[0].compareAttribute(0)) {
    if (userCards[0].keyvalue1 < computerCards[0].keyvalue1) {
        // count score up or down
        computerScore += 5
    } else {
        userScore += 5
    }
    console.log(computerScore)
    console.log(userScore)
    updateMetaGame()
}

function checkWinnerKeyValue2() {
    if (userCards[0].keyvalue2 < computerCards[0].keyvalue2) {
        // count score up or down
        // TODO: end of transition needed; test for transition - adding transition
        document.getElementsByClassName('computer-score')[0].classList.add('score-up')
        computerScore += 3
        document.getElementsByClassName('computer-score')[0].classList.remove('score-up')
    } else {
        // TODO: end of transition needed; test for transition - adding transition
        document.getElementsByClassName('user-score')[0].classList.add('score-up')
        userScore += 3
        document.getElementsByClassName('user-score')[0].classList.remove('score-up')
    }
    updateMetaGame()
}

function checkWinnerKeyValue3() {
    if (userCards[0].keyvalue3 < computerCards[0].keyvalue3) {
        // count score up or down
        // TODO: end of transition needed; test for transition - adding transition
        document.getElementsByClassName('computer-score')[0].classList.add('score-up')
        computerScore += 2
        document.getElementsByClassName('computer-score')[0].classList.remove('score-up')
    } else {
        // TODO: end of transition needed; test for transition - adding transition
        document.getElementsByClassName('user-score')[0].classList.add('score-up')
        userScore += 2
        document.getElementsByClassName('user-score')[0].classList.remove('score-up')
    }
    updateMetaGame()
}

function checkWinnerKeyValue4() {
    if (userCards[0].keyvalue4 < computerCards[0].keyvalue4) {
        // count score up or down
        // TODO: end of transition needed; test for transition - adding transition
        document.getElementsByClassName('computer-score')[0].classList.add('score-up')
        computerScore += 3
        document.getElementsByClassName('computer-score')[0].classList.remove('score-up')
    } else {
        // TODO: end of transition needed; test for transition - adding transition
        document.getElementsByClassName('user-score')[0].classList.add('score-up')
        userScore += 3
        document.getElementsByClassName('user-score')[0].classList.remove('score-up')
    }
    updateMetaGame()
}


// TODO: add some random points
function checkWinnerKeyValue5() {
    if (userCards[0].keyvalue5 < computerCards[0].keyvalue5) {
        // count score up or down
        // TODO: end of transition needed; test for transition - adding transition
        document.getElementsByClassName('computer-score')[0].classList.add('score-up')
        computerScore += 3
        document.getElementsByClassName('computer-score')[0].classList.remove('score-up')
    } else {
        // TODO: end of transition needed; test for transition - adding transition
        document.getElementsByClassName('user-score')[0].classList.add('score-up')
        userScore += 3
        document.getElementsByClassName('user-score')[0].classList.remove('score-up')
    }
    updateMetaGame()
}