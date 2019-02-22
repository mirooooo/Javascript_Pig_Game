/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/








let scores = [0, 0];
let roundedScore = 0;
let activePlayer = 0;

// document.querySelector('#current-' + activePlayer).textContent = dice;

// hide the dice in the begining
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Random Number
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2.Dispalay Result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';



    //3. Update the round score IF the rolled number was Not a 1

    if (dice !== 1) {
        // Add Score
        roundedScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundedScore;
    } else {
        // Next Player
       nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () { 
    // Add current score to the Global Score
    scores[activePlayer] += roundedScore;
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];



    // Check if Player won a game 
    if(scores[activePlayer] >= 10) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else{

        // Next Player
        nextPlayer();
    }








 });

// Helper Function DRY Principles
function nextPlayer() {
    // Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundedScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
