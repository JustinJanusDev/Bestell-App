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


