let correctUsername = "systemadmin@gmail.com";
let correctPassword = "qwerty";
let correctUserUsername = "user@gmail.com";
let correctUserPassword = "user123";

function login(event) {

    event.preventDefault(); 

    let enteredUsername = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;
    let alertElement = document.getElementById("alert-danger");

    if (enteredUsername == correctUsername && enteredPassword == correctPassword) {
        window.location.href = "sys-admin-ui/index.html";
    } else if (enteredUsername == correctUserUsername && enteredPassword == correctUserPassword) {
        window.location.href = "users-ui/class-advisor-dashboard.html";
    } else {
        alertElement.style.display = "block";
    }
}


document.getElementById("button").addEventListener("click", login);