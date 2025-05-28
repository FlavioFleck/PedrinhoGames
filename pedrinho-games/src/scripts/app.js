if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]))
}
let users = JSON.parse(localStorage.getItem("users"))


function register() {
    const form = document.querySelector("#register-form")
    const message = document.querySelector("#message");

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const name = document.querySelector("#nome").value
        const lastName = document.querySelector("#sobrenome").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const currentUser = { name: name, lastName: lastName, email: email, password: password, userCart: []}
        users = JSON.parse(localStorage.getItem("users"))
        
        const user = users.find(user => email == user.email)
        if(!user) {
            users.push(currentUser)
            localStorage.setItem("users", JSON.stringify(users))
            localStorage.setItem("loggedIn", true)
            localStorage.setItem("user" , JSON.stringify(currentUser))
            let userCart = []
            localStorage.setItem("userCart", JSON.stringify(userCart))

            message.style.display = "block";
            message.style.color = "#5744ff";
            message.textContent = "Conta criada com sucesso!"
            setTimeout(() => {
                window.location.href = "../paginas/home.html"
            }, 1000);
            
        } else {
            message.style.display = "block"
            message.style.color = "red"
            message.textContent = "Usuário já cadastrado"
        }
    })
}


function login() {
    const form = document.querySelector("#loginForm")
    const message = document.getElementById("mensagem-login")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        const email = document.getElementById("email").value
        const password = document.getElementById("senha").value
        const users = JSON.parse(localStorage.getItem("users"))
        const user = users.find(user => email === user.email && password === user.password)
        const userCart = []

        if(user) {
            localStorage.setItem("loggedIn", "true")
            localStorage.setItem("user", JSON.stringify(user))
            user.userCart.forEach(game => {
                userCart.push(game)
            });
            localStorage.setItem("userCart", JSON.stringify(userCart))

            message.style.display = "block"
            message.style.color = "green"
            message.textContent = "Login realizado com sucesso!"
            setTimeout(() => {
                window.location.href = "../paginas/home.html"
            }, 1000);
        } else {
            message.style.display = "block"
            message.style.color = "red"
            message.textContent  = "Usuário ou senha incorretos."
        }
    })
}


function logout() {
    const userCart = JSON.parse(localStorage.getItem("userCart")) || []
    const users = JSON.parse(localStorage.getItem("users")) || []
    const currentUser = JSON.parse(localStorage.getItem("user"))

    const user = users.find(u => u.email === currentUser.email)

    if (user) {
        user.userCart = userCart
        localStorage.setItem("users", JSON.stringify(users))
    }

    localStorage.removeItem("loggedIn")
    localStorage.removeItem("user")
    localStorage.removeItem("userCart")
    window.location.href = "../paginas/home.html"
}
