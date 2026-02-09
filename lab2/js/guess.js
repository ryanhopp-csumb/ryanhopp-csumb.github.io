//event listeners
document.querySelector("#guessBtn").addEventListener("click", guess);

//global variables
let randomNumber = Math.floor(Math.random() * 99) + 1;

let guessCounter = 0;

function guess () {
    let userGuess = document.querySelector("#userGuess").value;
    //value is only for input elements

    let message = document.querySelector("#message");

    if (guessCounter < 7) {

        document.querySelector("#previousGuesses").textContent += ` ${userGuess} `;

        if (userGuess > randomNumber) {
            message.textContent = "Guess was too high";
        }
        else if (userGuess < randomNumber) {
            message.textContent = "Guess was too low";
        }
        else {
            message.textContent = "You did it! The guess was right!";
            document.querySelector("#previousGuesses").style.color = "green";
        }

        guessCounter += 1;
    }

}
