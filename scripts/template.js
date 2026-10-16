function implementBurgerDishes(indexBurger) {
    return `
    <div class='burger_dishes'>
        <img src=${websiteDishes.burgerDishes[indexBurger]} alt='Photo ${[indexBurger + 1]}'>
        <h3>${websiteDishes.burgerDishes.name[indexBurger]}</h3>
        <p>${websiteDishes.burgerDishes.descreption[indexBurger]}</p>
        <div>
            <button onclick='moveOrderToBasket(${indexBurger})' class='btn'> Add to Basket </button>
        </div>
    </div>
    `
}