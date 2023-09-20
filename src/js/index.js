let correctUsername = "admin";
let correctPassword = "qwerty";

function login() {

    event.preventDefault(); 

    let enteredUsername = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        window.location.href = "index.html";
    } else {
        window.alert("Invalid input");
    }
}

document.getElementById("button").addEventListener("click", login);