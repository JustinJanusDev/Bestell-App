//==================================================
// Import Currency
//==================================================


function formatPrice(price) {
    return Number(price).toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
    });
}


//==================================================
// Rendering Menus
//==================================================


function createDishCard(dish) {
    return `
    <article class='dish_card'>
        <section class='dish_card_body'>
            <img class='dish_image' src='${dish.imageUrl}' alt='${dish.name}'>
            <div class='dish_information'>
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
            </div>
        </section>
        <section class='price_order_section'>
            <p class='dish_price'>${formatPrice(dish.price)}</p>
            <button class='order_button' type='button' data-id='${dish.dishId}'>Add to Basket</button>
        </section>
    </article>
    `
}


//==================================================
// Add Menus to Basket 
//==================================================


function moveToBasket(dish) {
    return `
    <article class='basket_dish_card'>
        <section class='basket_dish_body'>
            <div class='dish_name'>
                <h3>${dish.name}</h3>
            </div>
        </section>
        <section class='quantity_price'>
            <button class='remove_dishes' type='button' data-id='${dish.dishId}'>
                <img class='trash_can' src='./assets/icons/trash_can_unclicked.svg' alt='trash can icon'>
            </button>
            <p class='price_of_dish'>${formatPrice(dish.price)}</p>
        </section>
    </article>
    `
}