/**  Part 01 */
// Create 3x3 playing board


/** Part 02 */
// create players and store positions
const PLAYER1 = 'player_1';
const PLAYER2 = 'player_2';
var curr_player = PLAYER1;
const Positions = {player_1: 0, player_2: 0};
const message = document.querySelector('.curr_player');
const resetBtn = document.getElementById('reset');
let moves = 0;

// set reference to each position
const topLeft = document.querySelector(".top_row.left");
const topMid = document.querySelector(".top_row.mid");
const topRight = document.querySelector(".top_row.right");
const midLeft = document.querySelector(".mid_row.left");
const midMid = document.querySelector(".mid_row.mid");
const midRight = document.querySelector(".mid_row.right");
const botLeft = document.querySelector(".bot_row.left");
const botMid = document.querySelector(".bot_row.mid");
const botRight = document.querySelector(".bot_row.right");

// Add touch event listeners
// topLeft.addEventListener('touchend', claimPosition.bind(this, topLeft, 1));
// topMid.addEventListener('touchend', claimPosition.bind(this, topMid, 2));
// topRight.addEventListener('touchend', claimPosition.bind(this, topRight, 4));
// midLeft.addEventListener('touchend', claimPosition.bind(this, midLeft, 8));
// midMid.addEventListener('touchend', claimPosition.bind(this, midMid, 16));
// midRight.addEventListener('touchend', claimPosition.bind(this, midRight, 32));
// botLeft.addEventListener('touchend', claimPosition.bind(this, botLeft, 64));
// botMid.addEventListener('touchend', claimPosition.bind(this, botMid, 128));
// botRight.addEventListener('touchend', claimPosition.bind(this, botRight, 256));
// Add click event listeners
topLeft.addEventListener('click', claimPosition.bind(this, topLeft, 1));
topMid.addEventListener('click', claimPosition.bind(this, topMid, 2));
topRight.addEventListener('click', claimPosition.bind(this, topRight, 4));
midLeft.addEventListener('click', claimPosition.bind(this, midLeft, 8));
midMid.addEventListener('click', claimPosition.bind(this, midMid, 16));
midRight.addEventListener('click', claimPosition.bind(this, midRight, 32));
botLeft.addEventListener('click', claimPosition.bind(this, botLeft, 64));
botMid.addEventListener('click', claimPosition.bind(this, botMid, 128));
botRight.addEventListener('click', claimPosition.bind(this, botRight, 256));

message.innerHTML = "Player 1</br>It's your turn.";

// Mark the card the player chooses 
function claimPosition(card, cardValue) {
  card.classList.add(curr_player);
  Positions[curr_player] += cardValue;
  ++moves;
  (moves >= 5) ? gameState(Positions[curr_player]): togglePlayer();
}

//track player state - whos turn is it?
function togglePlayer() {
    if (curr_player == PLAYER1) {
      curr_player = PLAYER2; 
    } else {
      curr_player = PLAYER1;
    }
    message.innerHTML = `${curr_player}</br>It's your turn`;
}

/** Part 03 */
// Create a "reset" button
resetBtn.addEventListener('touchend', reset);
resetBtn.addEventListener('click', reset);

function reset() {
  clearBoard('player_1');
  clearBoard('player_2');
  Positions.player_1 = 0;
  Positions.player_2 = 0;
  moves = 0;
  curr_player = PLAYER1;
  message.innerHTML = "Player 1</br>It's your turn.";
  gameFinished = false;
}

function clearBoard(className) {
  const clearClass = Array.from(document.getElementsByClassName(className));
  clearClass.forEach( cell => cell.classList.remove(className));
}


/** Stretch Goals */
/** Part 01 */
// done


/** Part 02 */
// Add logic to determine a tie
const winValues = [ 7, 56, 448, 73, 146, 292, 273, 84];
let gameFinished = false;
function gameState(player_score) {
  winValues.forEach((value, index) => {
    if (value === player_score) {   
      gameFinished = true;
    }
  });
  gameFinished ? 
    message.innerHTML = `Congratulations ${curr_player}!
    </br>
    YOU WON!
    </br>
    Click "Reset" to play again.`: 
    togglePlayer();
}

/** Part 03 */
// Add logic to determine who wins

