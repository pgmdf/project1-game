// author: github.com/pgmdf
/* anything that happens via dom */


/* elements to be triggered by id:
• start-screen
• start-game-button
• key-value-1 … key-value-8
• key-value-submit
• user-score
• computer-score
• transport-img
• transport-name
*/

// switch start-button to game-screen
document.getElementById('start-game-button').onclick = () => {
    document.getElementsByTagName('main')[0].className = "visible"
    document.getElementById('start-screen').remove()
    pickRandomCards()
};

// display meta-game-information
function updateMetaGame() {
    document.getElementById('computer-score').innerText = `${computerScore}`
    document.getElementById('user-score').innerText = `${userScore}`
}

// display the actual card to play 
// TODO: add transition/animation to the card
function startGame() {
    document.getElementById('transport-img').src= `${userCards[0].imgFile}`
    document.getElementById('transport-name').innerText = `${userCards[0].name}`
    document.getElementById('key-value-1').innerHTML = '<i class="fas fa-stopwatch fa-2x pr-4"></i>' + `${userCards[0].velocity}`
    document.getElementById('key-value-2').innerHTML = '<i class="fas fa-fire fa-2x pr-4"></i>' + `${userCards[0].energy}`
}

