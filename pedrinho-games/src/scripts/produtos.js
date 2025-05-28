const list = document.querySelector(".games-container")

showProducts()
async function showProducts() {
    const data = await getData()
    data.forEach(game => {
        list.insertAdjacentHTML('beforeend',
            `<li class="game">
                <img src="${game.img}" class="game-image" >

                <h3 class="game-title">
                    ${game.title}
                </h3>

                <span class="game-plataform">
                    ${game.platform}
                </span>

                <div class="game-price">
                    <h4>R$${game.price},00</h4>
                    <button class="btn-default cart-button">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </li>`
        )
    });
}

async function getData() {
    const response = await fetch("../data/data.json")
    const data = await response.json() 
    return data
}