
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImg = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

//function to reset the game
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImg.src = "img/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

//function to get a random word from the list in the other js file
const getWord = () => {
    const { word, hint } = wordList[Math.ceil(Math.random() * wordList.length-1)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

//function to end the game and display the appropriate image
const gameOver = (isVictory) => {
    const modalText = isVictory ? `You found the word: ` : 'The correct word was: ';
    gameModal.querySelector("img").src = `img/${isVictory ? 'win' : 'lost'}.png`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats, you found the word!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

//for loop to create and display keyboard buttons for the game
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        wrongGuessCount++;
        hangmanImg.src = `img/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}

getWord();

playAgainBtn.addEventListener("click", getWord);
