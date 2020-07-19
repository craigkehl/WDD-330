/**  Part 01 */
// Create 3x3 playing board


/** Part 02 */
// create players and store positions
const PLAYER1 = 'player_1';
const PLAYER2 = 'player_2';
var curr_player = PLAYER1;
const PosPlayer_1 = [];
const PosPlayer_2 = [];
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
topLeft.addEventListener('touchend', claimPosition.bind(this, topLeft, 1));
topMid.addEventListener('touchend', claimPosition.bind(this, topMid, 2));
topRight.addEventListener('touchend', claimPosition.bind(this, topRight, 3));
midLeft.addEventListener('touchend', claimPosition.bind(this, midLeft, 4));
midMid.addEventListener('touchend', claimPosition.bind(this, midMid, 5));
midRight.addEventListener('touchend', claimPosition.bind(this, midRight, 6));
botLeft.addEventListener('touchend', claimPosition.bind(this, botLeft, 7));
botMid.addEventListener('touchend', claimPosition.bind(this, botMid, 8));
botRight.addEventListener('touchend', claimPosition.bind(this, botRight, 9));
// Add click event listeners
topLeft.addEventListener('click', claimPosition.bind(this, topLeft, 1));
topMid.addEventListener('click', claimPosition.bind(this, topMid, 2));
topRight.addEventListener('click', claimPosition.bind(this, topRight, 3));
midLeft.addEventListener('click', claimPosition.bind(this, midLeft, 4));
midMid.addEventListener('click', claimPosition.bind(this, midMid, 5));
midRight.addEventListener('click', claimPosition.bind(this, midRight, 6));
botLeft.addEventListener('click', claimPosition.bind(this, botLeft, 7));
botMid.addEventListener('click', claimPosition.bind(this, botMid, 8));
botRight.addEventListener('click', claimPosition.bind(this, botRight, 9));

/** Part 03 */
// Create a "reset" button
resetBtn.addEventListener('touchend', reset);
resetBtn.addEventListener('click', reset);

// Start Game
reset();

// Mark the card the player chooses 
function claimPosition(card, cardValue) {
  card.classList.add(curr_player);
  ++moves;
  if (curr_player == PLAYER1) { 
    PosPlayer_1.push(cardValue);
      (moves >= 5) ? gameState(PosPlayer_1): togglePlayer();
  } else {
      PosPlayer_2.push(cardValue);
        (moves >= 5) ? gameState(PosPlayer_2): togglePlayer();
  }
}

/** Stretch - Part 02 and 03 */
// Add logic to determine a tie and the winner
const winValues = [ 
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

function gameState(scoreArr) {
  winValues.forEach(function(combo) {
    (scoreArr.includes(combo[0])) ?
      (scoreArr.includes(combo[1])) ?
        (scoreArr.includes(combo[2])) ?   
          gameFinished = true:
          gameFinished = false:
          gameFinished = false:
          gameFinished = false;
    });
    gameFinished ? 
      message.innerHTML = `Congratulations ${curr_player}!
      </br>
      YOU WON!
      </br>
      Click "Reset" to play again.`: 
      (moves >= 9) ? 
        message.innerHTML = "Sorry!</br>It's a tie :(": 
        togglePlayer();
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

function reset() {
  clearBoard('player_1');
  clearBoard('player_2');
  PosPlayer_1.length = 0;
  PosPlayer_2.length = 0;
  moves = 0;
  curr_player = PLAYER1;
  message.innerHTML = "Player 1</br>It's your turn.";
  gameFinished = false;
}

function clearBoard(className) {
  const clearClass = Array.from(document.getElementsByClassName(className));
  clearClass.forEach( cell => cell.classList.remove(className));
}

/************  ? ************/


// function gameState(scoreArr) {
//   winValues.forEach(function(combo, indx, arr) {
//     (PosPlayer_1.includes(arr[indx][0])) ?
//       (PosPlayer_1.includes(arr[indx][1])) ?
//         (PosPlayer_1.includes(arr[indx][2])) ?   
//           gameFinished = true:
//           gameFinished = false:
//           gameFinished = false:
//           gameFinished = false;
//     });
//   gameFinished ? 
//     message.innerHTML = `Congratulations ${curr_player}!
//     </br>
//     YOU WON!
//     </br>
//     Click "Reset" to play again.`: 
//     (moves >= 9) ? 
//       message.innerHTML = "Sorry!</br>It's a tie :(": 
//       togglePlayer();
// }


// const winValues = [ 7, 56, 448, 73, 146, 292, 273, 84];
// let gameFinished = false;
// function gameState(player_score) {
//   winValues.forEach((value, index) => {
//     if (value === player_score) {   
//       gameFinished = true;
//     }
//   });
//   gameFinished ? 
//     message.innerHTML = `Congratulations ${curr_player}!
//     </br>
//     YOU WON!
//     </br>
//     Click "Reset" to play again.`: 
//     togglePlayer();
// }