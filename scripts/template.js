function formatPrice(price) {
    return Number(price).toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
    });
}


//==================================================
// Rendering Menus
//==================================================


export function createDishCard(dish) {
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


export function createBasketCard(order) {
    return `
    <article class="basket_card">
        <div class="order_content">
            <div class="oder_information">
                <h3>${order.name}</h3>
                <p>${formatPrice(order.price)}</p>
            </div>
        </div>
        <div class="price_section">
            <div class="quantity_controls">
                <button class="basket_minus" type="button" data-id="${order.dishId}" arial-label="Menge von ${order.name} reduzieren"> - </button>
                <span class="basket_quantity>${order.quantity}</span>
                <button class="basket_plus" type="button" data-id="${order.dishId}" arial-label="Menge von ${order.name} erhöhen"> + </button>
            </div>
            <p class="dish_order_price">${formatPrice(
                Math.round(order.price * 100) * order.quantity / 100
            )}
            </p>
            <button class="basket_remove" type="button" data-id="${order.dishId}">
                <img class="trash_can" src="./assets/icons/trash_can_unclicked.svg" alt="">
            </button>
        </div>
    </article>
    `
}