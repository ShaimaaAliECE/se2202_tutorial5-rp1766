let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById('next-lbl').innerHTML = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    for(i = 0; i < 9 ; i++){
        let grid = 'c' + (i+1);
        
        let newbtn = document.createElement('button');
        document.getElementById(grid).appendChild(newbtn);
        newbtn.innerHTML = '{}'; 
    }
    
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event){

    event.target.innerHTML = nextPlayer;
    if(nextPlayer == 'X'){
        nextPlayer = 'O';
    }
    else if (nextPlayer == 'O'){
        nextPlayer = 'X';
    }
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    let a = event.target.disabled = true;
    
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver()){
        var lbl = document.getElementById('game-over-lbl');
        var head = document.createElement('h1');
        head.innerText = "Game Over";
        lbl.appendChild(head);
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let disbtn = true;
    for(let i = 0; i < btns.length; i++){
        if(btns[i].disabled){
            disbtn = false;
        }
    }
    return disbtn;
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
