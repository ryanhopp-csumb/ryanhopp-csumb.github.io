
let zipElement = document.querySelector("#zip");
let usernameEl = document.querySelector("#username");
let passwordEl = document.querySelector("#pWord");

//Event listeners
zipElement.addEventListener("change", displayCity);
zipElement.addEventListener("change", displayLatitude);
zipElement.addEventListener("change", displayLongitude);

usernameEl.addEventListener("change", isUsernameTaken);


displayState();

async function displayState() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("There was an error accessing the API");
        }
    
        const data = await response.json();
        console.log(data);

        for (let i of data) {
            let optionElement = document.createElement("option");
            optionElement.textContent = i.state;
            optionElement.value = i.usps;

            document.querySelector("#state").append(optionElement);
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("There was an error accessing the API (network failure");
        } else {
            alert(err.message);
        }
    }
}

async function displayCity() {

    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("There was an error accessing the API");
        }
    
        let data = await response.json();
        console.log(data);

        document.querySelector("#city").textContent = data.city;

    } catch (err) {
        if (err instanceof TypeError) {
            alert("There was an error accessing the API (network failure");
        } else {
            alert(err.message);
        }
    }

}


async function displayLatitude() {

    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("There was an error accessing the API");
        }
    
        let data = await response.json();
        console.log(data);

        document.querySelector("#lat").textContent = data.latitude;

    } catch (err) {
        if (err instanceof TypeError) {
            alert("There was an error accessing the API (network failure");
        } else {
            alert(err.message);
        }
    }

}

async function displayLongitude () {
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("There was an error accessing the API");
        }
    
        let data = await response.json();
        console.log(data);

        document.querySelector("#long").textContent = data.longitude;

    } catch (err) {
        if (err instanceof TypeError) {
            alert("There was an error accessing the API (network failure");
        } else {
            alert(err.message);
        }
    }
}


async function isUsernameTaken () {
    let username = usernameEl.value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + username;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("There was an error accessing the API");
        }

        let data = await response.json();
        console.log(data);

        if (data.available == true) {
            document.querySelector("#taken").textContent = "This username is available";
        } else {
            document.querySelector("#taken").textContent = "This username is not available";
        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("There was an error accessing the API (network failure");
        } else {
            alert(err.message);
        }
    }
}

async function displayPass () {
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    
}