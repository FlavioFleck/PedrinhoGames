document.addEventListener("DOMContentLoaded", () => {
    let userCart;
    if (localStorage.getItem("loggedIn")) {
        if (!localStorage.getItem("userCart")) {
            localStorage.setItem("userCart", JSON.stringify([]))
        }
        userCart = JSON.parse(localStorage.getItem("userCart"))
    }

    const cartQTD = document.querySelector(".cart-qtd")

    if (userCart.length > 0) {
        cartQTD.style.display = "flex"
        cartQTD.textContent = userCart.length
    }

    document.body.addEventListener("click", (e) => {
        const icon = e.target.closest(".cart-button")
        if (icon) {
            const gameDiv = icon.closest(".game")
            if (gameDiv) {
                console.log(gameDiv)
                const title = gameDiv.querySelector(".game-title").textContent.trim()
                const platform = gameDiv.querySelector(".game-plataform").textContent.trim()
                const price = gameDiv.querySelector("h4").textContent.trim()
                const game = { title: title, platform: platform, price: price }

                userCart.push(game)
                localStorage.setItem("userCart", JSON.stringify(userCart))

                const cartIcon = icon.querySelector("i")
                cartIcon.classList.remove("fa-cart-plus")
                cartIcon.classList.add("fa-check")

                cartQTD.style.display = "flex"
                cartQTD.textContent = userCart.length
            }
        }
    });
});









