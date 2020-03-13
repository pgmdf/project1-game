// author: github.com/pgmdf
/* all eventhandlers */


let state = {
  key1: false,
  key2: false
}


// TODO: restrict to only one key value to be picked

document.getElementById('key-value-1').onclick = () => {
  document.getElementById('key-value-submit').className = "btn btn-success mt-2 mb-2"
  document.getElementById('key-value-1').className = "btn btn-secondary mt-2 mb-2"
  state.key1 = true
};

document.getElementById('key-value-2').onclick = () => {
  document.getElementById('key-value-submit').className = "btn btn-success mt-2 mb-2"
  document.getElementById('key-value-2').className = "btn btn-secondary mt-2 mb-2"
  state.key2 = true
};


// UXUI: 
// testing button onclick -> do console.log maybe two buttons clicked are hard to follow
document.getElementById('key-value-submit').onclick = () => {

  if (state.key1) {
    document.getElementById('key-value-1').className = "btn btn-outline-secondary mt-2 mb-2"
    checkWinnerVelocity();
    document.getElementById('key-value-1').className = "btn btn-light mt-2 mb-2"
  }
  if (state.key2) {
    document.getElementById('key-value-2').className = "btn btn-outline-secondary mt-2 mb-2"
    checkWinnerEnergy();
    document.getElementById('key-value-2').className = "btn btn-light mt-2 mb-2"
  }

  // GAMELOGIC: remove played cards  
  //console.log("userCards.length before shift(): " + userCards.length)
  userCards.shift()
  //console.log("userCards.length after shift(): " + userCards.length)
  computerCards.shift()

  // reset key-value-button state  
  state.key1 = false
  state.key2 = false

  // reset submit-button 
  document.getElementById('key-value-submit').className = "btn btn-warning mt-2 mb-2"

  // test for transition - adding transition
  document.getElementsByClassName('transition-test')[0].classList.add('new-card')

  // load new user card as long as there are cards left
  // SOLVED: find end of the game, so exit if card deck = 0
  // SOLVED: another function needed to count down one cards array
  if (userCards.length > 0) {
    startGame()
  } else {
    // TODO: nicer endscreen and a message fitting to the theme / character of the game
    if (userScore > computerScore) {
      console.log("You win!")
    } else {
      console.log("Computer wins, better try next time!")
    }
  }
};


// UXUI: flip image to show which card computer is playing 
// TODO: rename transport-img to open the game for more decks
  document.getElementById('transport-img').onclick = () => { 
    console.log("onclick on picture works")
    document.getElementById('transport-img').src= `${computerCards[0].imgFile}`
    //transition to get back to origin
    //document.getElementById('transport-img').src= `${userCards[0].imgFile}`
  }; 