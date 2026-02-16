//event listeners
document.querySelector("#guessBtn").addEventListener("click", guess);

//global variables
let randomNumber = Math.floor(Math.random() * 99) + 1;
console.log(randomNumber);

let guessCounter = 0;

function guess () {
    let userGuess = document.querySelector("#userGuess").value;
    //value is only used for input elements

    let message = document.querySelector("#message");

    guessCounter++;

    if (guessCounter < 7) {

        if (userGuess < 1 || userGuess > 99) {
            message.textContent = "Please enter a whole number between 1 and 99";
            message.style.color = "red";
            return;
        }

        document.querySelector("#previousGuesses").textContent += ` ${userGuess} `;

        if (userGuess > randomNumber) {
            message.textContent = "Guess was too high";
            message.style.color = "DarkOrange";
        }
        else if (userGuess < randomNumber) {
            message.textContent = "Guess was too low";
            message.style.color = "darkblue";
        }
        else {
            message.textContent = "You did it! The guess was right!";
            message.style.color = "green";
            document.querySelector("#previousGuesses").style.color = "green";
        }

    } else {
        message.textContent = "You lost the game! The random number was " + randomNumber + ".";
        message.style.color = "red";
        document.querySelector("#previousGuesses").style.color = "red";
    }

}
