import { websiteDishes, basket } from "./db.js";
import { createDishCard, createBasketCard } from "./template.js";


//==================================================
// Quick Navigation through the categories
//==================================================





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


function renderBasket() {
    const basketContainer = document.getElementById('basketItems');
    const totalElement = document.getElementById('basketTotal');

    if(!basketContainer || !totalElement) {
        return;
    }

    if(basket.length === 0) {
        basketContainer.innerHTML = `
            <div class="basket_information">
                <span>Nothing here yet.</span>
                <span>Go ahead and choose something delicious!</span>
                <img class="basket_icon" id="basketItems" src="./assets/icons/shopping_cart.svg" alt="">
            </div>
            `
    } else {
        basketContainer.innerHTML = basket.map(order => createBasketCard(order)).join("");
    }

    const total = basket.reduce((sum, order) => {
        return sum + Math.round(order.price * 100) * order.quantity; 
    }, 0);

    totalElement.textContent = (total / 100).toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
    });
}


document.addEventListener("click", event => {
    const addbutton = event.target.closest(".add-to-basket");

    if(addbutton) {
        addToBasket(Number(addbutton.dataset.id));
        return;
    }

    const plusButton = event.target.closest(".basket_plus");
    
    if(plusButton) {
        changeQuantity(Number(plusButton.dataset.id), 1);
        return;
    }

    const minusButton = event.target.closest(".basket_minus");

    if(minusButton) {
        changeQuantity(Number(minusButton.dataset.id), -1);
        return;
    }

    const removeButton = event.target.closest(".basket_remove");

    if(removeButton) {
        removeFromBasket(Number(removeButton.dataset.id));
    }
});


//==================================================
// Delivery Button (Finished the Order)
//==================================================


const orderButton = document.getElementById('submitOrder');
const orderDialog = document.getElementById('orderDialog');
const closeDialogButton = document.getElementById('closeOrderDialog');

if(orderButton && orderDialog) {
    orderButton.addEventListener("click", () => {
        if(basket.length === 0) {
            alert("Your Basket is empty");
            return;
        }

        orderDialog.showModal();
    });
}

if(closeDialogButton && orderDialog) {
    closeDialogButton.addEventListener("click", () => {
        orderDialog.close();
    });
}


renderBasket();