/*
    Project: Assignment 04: The Rock, Paper, Scissors Game (20 points)
    Date: 10/15/23
    Author: Van Do
*/

/*  The Rock, Paper, Scissors Game (20 points)

    Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

        - Rock destroys scissors.
        - Scissors cut paper.
        - Paper covers rock.

    Our code will break the game into 3 phases:

       1. User makes a choice. How will we collect the user’s choice?
       2. Computer makes a choice. How will we collect the computer’s choice?
       3. A conditional that determines who wins.

    You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

        1. Begin by prompting the user for their choice.
        2. Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
        3. Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
        4. Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
        5. What if the result ends in a tie? Figure out how to handle that as well.
        6. What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

*/

/*  --------------------------------------------------   */


function displayTitle () {
    alert('Welcome to the Rock, Paper, Scissors Game!');
}


function playGame() {
    // User's Choice
    let userChoice = window.prompt('Would you like rock, paper, or scissors?');
    userChoice = userChoice.toLowerCase();
    console.log("User's Choice: " + userChoice);
    if(!(userChoice =='rock' || userChoice == 'paper' || userChoice == 'scissors')) {
        alert('You can only choice rock, paper, or scissors. Try again!');
        window.location ='ex3.html';
    }

    // Computers Choice
    let computerChoice = Math.floor(Math.random() *3 + 1);
    if(computerChoice == 3 ) {
        computerChoice = 'rock';
    } else if (computerChoice == 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log("Computer's Choice: " + computerChoice);


    // Determining Winner
    if (userChoice === computerChoice) {
        alert('Your choice: ' + userChoice + '\n' + "Computer's Choice: " + computerChoice + '\n' + 'The result is a tie!');
    } else if (userChoice == 'rock') {
        if (computerChoice == 'scissors') {
            alert('Your choice: ' + userChoice + '\n' + "Computer's Choice: " + computerChoice + '\n' + 'Rock destroys scissors. You win!');
        } else if (userChoice == 'paper') {
            alert("Your choice: " + userChoice + '\n' + "Computer's Choice: " + computerChoice + '\n' + "Paper covers rock. You lose! Computer wins!");
        }
    } else if (userChoice == 'paper') {
        if(computerChoice == 'scissors') {
            alert('Your choice: ' + userChoice + '\n' + "Computer's Choice: " + computerChoice + '\n' + 'Scissors cut paper. You lose! Computer wins!');
        } else if (userChoice == 'rock') {
            alert('Your choice: ' + userChoice + '\n' + "Computer's Choice: " + computerChoice + '\n' + 'Paper covers rock. You win!');
        }
    } else if (userChoice == 'scissors') {
        if(computerChoice == 'rock') {
            alert('Your choice: ' + userChoice + '\n' + "Computer's Choice: " + computerChoice + '\n' + 'Rock destroys scissors. You lose! Computer wins!');
        } else if (userChoice == 'paper') {
            alert('Your choice: ' + userChoice + '\n' + "Computer's Choice: " + computerChoice + '\n' + 'Scissors cut paper. You win!');
        }
    } 
}


function main() {
    displayTitle()
    let playAgain = 'y';
    do {
       console.log(playGame());
           playAgain = prompt('Do you want to play again? (y/n)');
    } while (playAgain === 'y')
    alert('Thank you for playing the game!');
   }

main();









































