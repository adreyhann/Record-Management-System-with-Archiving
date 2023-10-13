let correctUsername = "admin@gmail.com";
let correctPassword = "qwerty";
let correctUserUsername = "user@gmail.com";
let correctUserPassword = "user123";

function login(event) {

    event.preventDefault(); 

    let selectedOption = document.getElementById("userType").value;
    let enteredUsername = document.getElementById("username").value;
    let enteredPassword = document.getElementById("password").value;
    let alertElement = document.getElementById("alert-danger");

    if (selectedOption === "admin" && enteredUsername === correctUsername && enteredPassword === correctPassword) {
        window.location.href = "admin-ui/index.html";
    } else if (selectedOption === "Class Advisor" && enteredUsername === correctUserUsername && enteredPassword === correctUserPassword) {
        window.location.href = "users-ui/class-advisor-dashboard.html";
    } else {
        alertElement.style.display = "block";
    }
}


document.getElementById("button").addEventListener("click", login);