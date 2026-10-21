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
            <p class="dish_price">${Number(dish.price).toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
            })}
            </p>
            <button class="order_button add-to-basket" type="button" data-id="${dish.dishId}">Add to Basket</button>
        </div>
    </article>
    `;
}