const startSessionBtn = document.querySelector("#start-session")
const userBtn = document.querySelector(".fa-circle-user")
const usernameMenu = document.querySelector("#username")
const user = JSON.parse(localStorage.getItem("user"));

if(localStorage.getItem("loggedIn")) {
    startSessionBtn.style.display = "none"
    userBtn.style.display = "block"
    usernameMenu.textContent = user.name
}
