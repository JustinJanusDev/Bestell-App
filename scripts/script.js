import { websiteDishes, basket } from "./db.js";
import { createDishCard, createBasketCard } from "./template.js";


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


function getDishbyId(dishId) {
    return websiteDishes
        .flatMap(category => category.dishes)
        .find(dish => dish.dishId === dishId);
}


function addToBasket(dishId) {
    const dish = getDishbyId(dishId);

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

    renderBasket();
    
}


//==================================================
// Calculate the Quantity
//==================================================


function changeQuantity(dishId, change) {
    const basketOrder = basket.find(
        order => order.dishId === dishId
    );

    if(!basketOrder) {
        return;
    }

    basketOrder.quantity += change;

    if(basketOrder.quantity <= 0) {
        removeFromBasket(dishId);
        return;
    }

    renderBasket();
}


//==================================================
// Delete the Menu
//==================================================


function removeFromBasket(dishId) {
    const index = basket.findIndex(
        order => order.dishId === dishId
    );

    if(index === -1) {
        return;
    }

    basket.splice(index, 1);

    renderBasket();
}


//==================================================
// Rendering 
//==================================================











document.addEventListener("click", event => {
    const button = event.target.closest(".add-to-basket");

    if(!button) {
        return;
    }

    const dishId = Number(button.dataset.id);

    addToBasket(dishId);
});
