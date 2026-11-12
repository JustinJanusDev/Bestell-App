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
            <button class='order_button' type='button' data-id='${dish.dishId}' onclick='addMenuToBasket(${dish.dishId})'>Add to Basket</button>
        </section>
    </article>
    `
}


//==================================================
// Add Menus to Basket 
//==================================================


function moveToBasket(order) {
    return `
    <article class='basket_dish_card'>
        <section class='basket_dish_body'>
            <div class='dish_name_delete_icon'>
                <h3>${order.quantity}x ${order.name}</h3>
                ${order.quantity > 1 ? `
                    <button class='remove_dishes' type='button' onclick='deleteOrder(${order.dishId})'>
                        <img class='trash_can' src='./assets/icons/trash_can_unclicked.svg' alt='Delete Button'></img>
                    </button>
                ` : ""}
            </div>
            <div class='basket_dish_body_bottom'> 
            <div class='order_quantity'>
                ${order.quantity  === 1 ? `
                    <button class='remove_dishes' type='button' onclick='deleteOrder(${order.dishId})'>
                        <img class='trash_can' src='./assets/icons/trash_can_unclicked.svg' alt='Delete Button'></img>
                    </button>
                    ` : `
                    <button class='take_away_dishes' type='button' onclick='orderQuantityLower(${order.dishId})'> - </button>
                `}
                <h3 class='quantity_number'> ${order.quantity} </h3>
                <button class='add_dish_order' type='button' onclick='orderQuantityMore(${order.dishId})'> + </button>
            </div>
            <div>
                <p class='price_of_dish'> ${formatPrice(order.price * order.quantity)} </p>
            </div>
        </section>
    </article>
    `
}


function basketSummary(subtotal, tax, total) {
    return `
    <section class='total_price'>
        <div class='subtotal'>
            <h3> Subtotal </h3>
            <span> ${formatPrice(subtotal)} </span>
        </div>
        <div class='tax'>
            <h3> Tax </h3>
            <span> ${formatPrice(tax)} </span>
        </div>
        <div class='seperation'></div>
        <div class='total'>
            <h3> Total </h3>
            <span> ${formatPrice(total)} </span>
        </div>
        <button class='submit_order_button' id='submitOrder' type='button'> Order Now </button>
    </section>
    `
}


//==================================================
// Dialog Window
//==================================================


function submitButton() {
    return `
    <dialog id='submitOrder' onclick='openDeliveryWindow'>
    
    `
}