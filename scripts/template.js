function countryCurrency(price) {
    return price.toLocalString('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
}


function navigationToCategoryTemplate(category) {
    return `
    <button class='quick_button' data-target='category${category.id}'> ${category.category} </button>
    `
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


function implementPizzaDishes(indexPizza) {
    return `
    <div class='pizza_dishes'>
        <img class='food_image' src=${websiteDishes.pizzaDishes[indexPizza]} alt='Photo ${[indexPizza + 1]}'>
        <div class='food_information'>
            <h3 class='food_title'>${websiteDishes.pizzaDishes[indexPizza].name}</h3>
            <p class='food_description'>${websiteDishes.pizzaDishes[indexPizza].description}</p>
        </div>
        <div>
            <span class='price_dishes'>${websiteDishes.pizzaDishes[indexPizza].price}</span>
            <button onclick='moveOrderToBasket(${indexPizza})' class='btn' id='button${indexPizza}'> Add to Basket </button>
        </div>
    </div>
    `
}


function implementSaladDishes(indexSalad) {
    return `
    <div class='salad_dishes'>
        <img class='food_image' src=${websiteDishes.saladDishes[indexSalad]} alt='Photo ${[indexSalad + 1]}'>
        <div class='food_information'>
            <h3 class='food_title'>${websiteDishes.saladDishes[indexSalad].name}</h3>
            <p class='food_description'>${websiteDishes.saladDishes[indexSalad].description}</p>
        </div>
        <div>
            <span class='price_dishes'>${websiteDishes.saladDishes[indexSalad].price}</span>
            <button onclick='moveOrderToBasket(${indexSalad})' class='btn' id='button${indexSalad}'> Add to Basket </button>
        </div>
    </div>
    `
}