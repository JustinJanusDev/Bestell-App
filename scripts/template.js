export function createDishCard(dish) {
    return `
    <article class="dish_card">
        <img class="dish_image" src="${dish.imageUrl}" alt="${dish.name}">
        <div class="dish_information">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <p class="dish_price">${Number(dish.price).toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
            })}
            </p>
        </div>
    </article>
    `;
}