// author: github.com/pgmdf
/* anything that happens via dom */


/* elements to be triggered by id:
• start-screen
• start-game-button
• key-value-1 … key-value-8
• key-value-submit
• user-score
• computer-score
• card-img
• card-name
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
        // larger screens
        document.getElementById('computer-score-md').innerText = `${computerScore}`
        document.getElementById('user-score-md').innerText = `${userScore}`
}

// reset meta-game-information
function resetMetaGame() {
    computerScore = 0
    userScore = 0
    document.getElementById('computer-score').innerText = `${computerScore}`
    document.getElementById('user-score').innerText = `${userScore}`
}


// display the actual card to play 
// TODO: add transition/animation to the card
function startGame() {
    document.getElementById('card-img').src = `${userCards[0].imgFile}`
    document.getElementById('card-name').innerText = `${userCards[0].name}`
    //document.getElementById('key-value-1').innerHTML = '<i class="fas fa-stopwatch fa-2x pr-4"></i>' + `${userCards[0].velocity}`
    document.getElementById('key-value-1').innerHTML = '<div class="row justify-content-around pr-5 pl-5">' + '<div>' + `${userCards[0].keyname1}:` + '</div>' + '<div>' + `${userCards[0].keyvalue1}` + '</div>' + '</div>'
    document.getElementById('key-value-2').innerHTML = '<div class="row justify-content-around pr-5 pl-5">' + '<div>' + `${userCards[0].keyname2}:` + '</div>' + '<div>' + `${userCards[0].keyvalue2}` + '</div>' + '</div>'
    document.getElementById('key-value-3').innerHTML = '<div class="row justify-content-around pr-5 pl-5">' + '<div>' + `${userCards[0].keyname3}:` + '</div>' + '<div>' + `${userCards[0].keyvalue3}` + '</div>' + '</div>'
    document.getElementById('key-value-4').innerHTML = '<div class="row justify-content-around pr-5 pl-5">' + '<div>' + `${userCards[0].keyname4}:` + '</div>' + '<div>' + `${userCards[0].keyvalue4}` + '</div>' + '</div>'
    document.getElementById('key-value-5').innerHTML = '<div class="row justify-content-around pr-5 pl-5">' + '<div>' + `${userCards[0].keyname5}:` + '</div>' + '<div>' + `${userCards[0].keyvalue5}` + '</div>' + '</div>'
}

// switch to instructions
document.getElementById('help').onclick = () => {
    document.getElementById("instructions").style.height = "100%";
};

// switch to instructions larger screens
document.getElementById('help-md').onclick = () => {
    document.getElementById("instructions-md").style.height = "100%";
};

// close instructions
document.getElementById('close').onclick = () => {
    document.getElementById("instructions").style.height = "0%";
}

// close instructions larger screens
document.getElementById('close-md').onclick = () => {
    document.getElementById("instructions-md").style.height = "0%";
}

// close endscreen
document.getElementById('play-again').onclick = () => {
    document.getElementById("the-winner-is").style.height = "0%";
    resetMetaGame()
    pickRandomCards()
}

// close endscreen larger screens
document.getElementById('play-again-md').onclick = () => {
    document.getElementById("the-winner-is-md").style.height = "0%";
    resetMetaGame()
    pickRandomCards()
}