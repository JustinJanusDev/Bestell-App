import { websiteDishes, basket } from "./db.js";
import { createDishCard } from "./template.js";


//==================================================
// Rendering Menus
//==================================================


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


//==================================================
// Add Menus to Basket 
//==================================================


function addToBasket(dishId) {
    const dish = websiteDishes
        .flatMap(item => item.dishes)
        .find(dish => dish.dishId === dishId);

    if(!dish) {
        return;
    }

    const basketOrder = basket.find(
        item => item.dishId === dishId
    ); 

    if(basketOrder) {
        basketOrder.quantity++;
    } else {
        basket.push({
            ...dish,
            quantity: 1
        });
    }

    console.log("Current basket:", basket);
    
}


document.addEventListener("click", event => {
    const button = event.target.closest(".add-to-basket");

    if(!button) {
        return;
    }

    const dishId = Number(button.dataset.id);

    addToBasket(dishId);
});