// author: github.com/pgmdf
/* all eventhandlers */


let state = {
    key1: false,
    key2: false
}

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


// testing button onclick -> do console.log maybe two buttons clicked are hard to follow
document.getElementById('key-value-submit').onclick = () => {

    if (!state.key1) {
    checkWinnerVelocity();}
    if (!state.key2) {
    checkWinnerEnergy();}

    // start with a new card
    // TODO: find end of the game, so exit if card deck = 0
    pickRandomCards()
  };