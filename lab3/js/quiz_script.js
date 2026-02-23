//Event listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

// shuffleQ1Choices();
function shuffleQ1Choices() {

    //Not currently using this function
    let q1Choices = ["font-color", "color", "text-color", "fontColor"];
    q1Choices = _.shuffle(q1Choices);
    console.log(q1Choices);
    for (let i of q1Choices) {

        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;

        let lElement = document.createElement("label");
        lElement.textContent = i;
        lElement.prepend(radioElement);
        document.querySelector("#q1ChoiceDiv").append(lElement);
    }

    console.log(radioElement);
    console.log(lElement);
}

function gradeQuiz() {
    let userAnswer1 = document.querySelector("#q1").value;
    let userAnswer2 = document.querySelector("#q2").value;
    let userAnswer3 = document.querySelector("#q3").value;
    let userAnswer4 = document.querySelector("#q4").value;
    
    let answer1Txt = document.querySelector("#q1answer");
    if (userAnswer1 == "Red") {
        answer1Txt.innerText = "Your answer was correct";
    } else {
        //print red text
        answer1Txt.innerText = "Your answer was wrong";
    }

    if (userAnswer2) {

    }

    if (userAnswer3) {

    }

    if (userAnswer4) {

    }
}