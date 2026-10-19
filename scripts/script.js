import { websiteDishes } from "./db.js";
import { createDishCard } from "./template.js";

const categoryDishContainers = {
    burger: "sectionBurger",
    pizza: "sectionPizza",
    salad: "sectionSalad"
};


function renderCategory(category) {
    const categoryData = websiteDishes.find(
        item => item.category === category
    );

    const dishContainer = document.getElementById(categoryDishContainers[category]);

    if(!categoryData || !dishContainer) {
        return;
    }

    dishContainer.innerHTML = categoryData.dishes.map(
        dish => createDishCard(dish)
    ).join("");
}


websiteDishes.forEach(item => renderCategory(item.category));