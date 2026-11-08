//==================================================
// Render Function
//==================================================


function init() {
    renderCategory("burger", "sectionBurger");
    renderCategory("pizza", "sectionPizza");
    renderCategory("salad", "sectionSalad");

    renderBasket();
}


//==================================================
// Rendering Menus
//==================================================


function renderCategory(category, containerId) {
    const categoryData = websiteDishes.find(
        item => item.category === category
    );

    const menuContainer = document.getElementById(containerId);

    if(!categoryData || !menuContainer) {
        console.error("Category or Container can't be found", category, containerId);
        return;
    }

    let dishesHTML = "";

    for (let i = 0; i < categoryData.dishes.length; i++) {
        dishesHTML += createDishCard(categoryData.dishes[i]);
    }

    menuContainer.innerHTML = dishesHTML;
}


//==================================================
// Add Menus to Basket 
//==================================================


function getDishById(dishId) {
    return websiteDishes
        .flatMap(category => category.dishes)
        .find(dish => dish.dishId === dishId);
}


function addMenuToBasket(dishId) {
    const movingDish = getDishById(dishId);

    if(!movingDish) {
        console.error("Dish can't be found", dishId);
        return;
    }

    const dishOrder = basket.find(
        item => item.dishId === dishId
    );

    if(dishOrder) {
        dishOrder.quantity++;
    } else {
        basket.push({
            ...movingDish,
            quantity: 1
        });
    }

    renderBasket();
}


//==================================================
// Calculate the Quantity
//==================================================


function orderQuantityMore(dishId) {
    const dishOrder = basket.find(
        item => item.dishId === dishId
    );

    if(!dishOrder) {
        return; 
    }

    dishOrder.quantity++;

    renderBasket();
}


function orderQuantityLower(dishId) {
    const dishOrder = basket.find(
        item => item.dishId === dishId
    );

    if(!dishOrder) {
        return;
    }

    if(dishOrder.quantity > 1) {
        dishOrder.quantity--;
    }

    renderBasket();
}


//==================================================
// Delete the Menu
//==================================================


function deleteOrder(dishId) {
    const dishIndex = basket.findIndex(
        item => item.dishId === dishId
    );

    if(dishIndex === -1) {
        return;
    }
    
    basket.splice(dishIndex, 1);

    renderBasket();
}


//==================================================
// Rendering 
//==================================================





//==================================================
// Delivery Button (Finished the Order)
//==================================================


