function countryCurrency(price) {
    return price.toLocalString('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
}


function implementBurgerDishes(indexBurger) {
    return `
    <div class='burger_dishes'>
        <img class='food_image' src=${websiteDishes.burgerDishes[indexBurger]} alt='Photo ${[indexBurger + 1]}'>
        <div class='food_information'>
            <h3 class='food_title'>${websiteDishes.burgerDishes[indexBurger].name}</h3>
            <p class='food_description'>${websiteDishes.burgerDishes[indexBurger].description}</p>
        </div>
        <div>
            <span class='price_dishes'>${websiteDishes.burgerDishes[indexBurger].price}</span>
            <button onclick='moveOrderToBasket(${indexBurger})' class='btn' id='button${indexBurger}'> Add to Basket </button>
        </div>
    </div>
    `
}