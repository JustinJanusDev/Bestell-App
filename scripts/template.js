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


function createDishCard(indexDishes) {
    return `
    <article class='dish_card'>
        <section class='dish_card_body'>
            <img class='dish_image' src='${indexDishes.imageUrl}' alt='${indexDishes.name}'>
            <div class='dish_information'>
                <h3>${indexDishes.name}</h3>
                <p>${indexDishes.description}</p>
            </div>
        </section>
        <section class='price_order_section'>
            <p class='dish_price'>${formatPrice(indexDishes.price)}</p>
            <button class='order_button' type='button' data-id='delivery'>Add to Basket</button>
        </section>
    </article>
    `
}


//==================================================
// Add Menus to Basket 
//==================================================


