//==================================================
// Quick Navigation through the categories
//==================================================


function quickNavbar(nav) {
    return`
    <nav class="navigation">
        <button class="quick_navigation" type="button" data-id="${nav.category[category]}">Burger</button>
        <button class="quick_navigation" type="button" data-id="${nav.category[category]}">Pizza</button>
        <button class="quick_navigation" type="button" data-id="${nav.category[category]}">Salad</button>
    </nav>
    `
}


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
    <article class="dish_card">
        <div class="dish_main_content">
            <img class="dish_image" src="${dish.imageUrl}" alt="${dish.name}">
            <div class="dish_information">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
            </div>
        </div>
        <div class="side_information">
            <p class="dish_price">${formatPrice(dish.price)}
            </p>
            <button class="order_button add-to-basket" type="button" data-id="${dish.dishId}">Add to Basket</button>
        </div>
    </article>
    `;
}


//==================================================
// Add Menus to Basket 
//==================================================


function createBasketCard(order) {
    return `
    <article class="basket_card">
        <div class="order_content">
            <div class="order_information">
                <h3>1x ${order.name}</h3>
                <div class="button_quantity>
                    <button class="basket_remove" type="button" data-id="${order.dishId}">
                        <img class="trash_can" src="./assets/icons/trash_can_unclicked.svg" alt="">
                    </button>
                    <button class="basket_minus" type="button" data-id="${order.dishId}" arial-label="Menge von ${order.name} reduzieren"> - </button>
                    <button class="basket_plus" type="button" data-id="${order.dishId}" arial-label="Menge von ${order.name} erhöhen"> + </button>
                </div>
            </div>
        </div>
        <div class="price_section">
            <p class=dish_order_price">${formatPrice(Math.round(order.price * 100) * order.quantity / 100)}</p>
        </div>
    </article>
    `
}