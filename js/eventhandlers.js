// author: github.com/pgmdf
/* all eventhandlers */

// define button to be used for comparison
let clickedButton = " "

// looping through buttons

// Get the container element
let btnContainer = document.getElementById("buttons")

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("btn")

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active")

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active"
  });

  // function to identify clicked button
  function reply_click(clicked_id)
  {
      clickedButton = clicked_id

      // change appearance of submit-button
      if (clickedButton != " ") {
        document.getElementById('key-value-submit').className = "btn btn-success mt-1 mb-1"
      }
  }
}

  
// submit your choice and play the game aka call the functions
document.getElementById('key-value-submit').onclick = () => {

  if (clickedButton == "key-value-1") {
    document.getElementById('key-value-1').className = "btn btn-outline-secondary mt-1 mb-1"
    checkWinnerKeyValue1();
    document.getElementById('key-value-1').className = "btn btn-light mt-1 mb-1"
  }
  if (clickedButton == "key-value-2") {
    document.getElementById('key-value-2').className = "btn btn-outline-secondary mt-1 mb-1"
    checkWinnerKeyValue2();
    document.getElementById('key-value-2').className = "btn btn-light mt-1 mb-1"
  }
  if (clickedButton == "key-value-3") {
    document.getElementById('key-value-3').className = "btn btn-outline-secondary mt-1 mb-1"
    checkWinnerKeyValue3();
    document.getElementById('key-value-3').className = "btn btn-light mt-1 mb-1"
  }
  if (clickedButton == "key-value-4") {
    document.getElementById('key-value-4').className = "btn btn-outline-secondary mt-1 mb-1"
    checkWinnerKeyValue4();
    document.getElementById('key-value-4').className = "btn btn-light mt-1 mb-1"
  }
  if (clickedButton == "key-value-5") {
    document.getElementById('key-value-5').className = "btn btn-outline-secondary mt-1 mb-1"
    checkWinnerKeyValue5();
    document.getElementById('key-value-5').className = "btn btn-light mt-1 mb-1"
  }

  // GAMELOGIC: remove played cards  
  console.log("userCards.length before shift(): " + userCards.length)
  userCards.shift()
  console.log("userCards.length after shift(): " + userCards.length)
  computerCards.shift()

  // reset submit-button 
  document.getElementById('key-value-submit').className = "btn btn-warning mt-1 mb-1"

  // test for transition - adding transition
  //document.getElementsByClassName('transition-test')[0].classList.add('new-card')

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
// SOLVED: rename transport-img to open the game for more decks
document.getElementById('card-img').onclick = () => {
  console.log("onclick on picture works")
  document.getElementById('card-img').src = `${computerCards[0].imgFile}`
  //transition to get back to origin
  //document.getElementById('card-img').src= `${userCards[0].imgFile}`
};