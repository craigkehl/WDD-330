/**  Part 01 */
// Create 3x3 playing board


/** Part 02 */
// create players
const PLAYER1 = 'player_1';
const PLAYER2 = 'player_2';
var curr_player = PLAYER1;
const message = document.querySelector('.curr_player');
const resetBtn = document.getElementById('reset');

// add touchend listeners to each square
const topLeft = document.querySelector(".top_row.left");
const topMid = document.querySelector(".top_row.mid");
const topRight = document.querySelector(".top_row.right");
const midLeft = document.querySelector(".mid_row.left");
const midMid = document.querySelector(".mid_row.mid");
const midRight = document.querySelector(".mid_row.right");
const botLeft = document.querySelector(".bot_row.left");
const botMid = document.querySelector(".bot_row.mid");
const botRight = document.querySelector(".bot_row.right");

topLeft.addEventListener('touchend', claimPosition.bind(this, topLeft));
topMid.addEventListener('touchend', claimPosition.bind(this, topMid));
topRight.addEventListener('touchend', claimPosition.bind(this, topRight));
midLeft.addEventListener('touchend', claimPosition.bind(this, midLeft));
midMid.addEventListener('touchend', claimPosition.bind(this, midMid));
midRight.addEventListener('touchend', claimPosition.bind(this, midRight));
botLeft.addEventListener('touchend', claimPosition.bind(this, botLeft));
botMid.addEventListener('touchend', claimPosition.bind(this, botMid));
botRight.addEventListener('touchend', claimPosition.bind(this, botRight));


// Mark the card the player chooses track player state - whos turn is it?
function claimPosition(card) {
  card.classList.add(curr_player);
  togglePlayer();
}

function togglePlayer() {
    if (curr_player == PLAYER1) {
      curr_player = PLAYER2; 
    } else {
      curr_player = PLAYER1;
    }
    message.textContent = curr_player;
}

/** Part 03 */
// Create a "reset" button
resetBtn.addEventListener('touchend', reset);

function reset() = {
  
topLeft.classList.remove('player_1');
topLeft.classList.remove('player_2');
topMid.classList.remove('player_1');
topMid.classList.remove('player_2');
topRight.classList.remove('player_1');
topRight.classList.remove('player_2');
midLeft.classList.remove('player_1');
midLeft.classList.remove('player_2');
midMid.classList.remove('player_1');
midMid.classList.remove('player_2');
midMid.classList.remove('player_1');
midMid.classList.remove('player_2');

}



/** Stretch Goals */
/** Part 01 */
// Style the board to look like a standard tic-tack-toe board


/** Part 02 */
// Add logic to determine a tie


/** Part 03 */
// Add logic to determine who wins

