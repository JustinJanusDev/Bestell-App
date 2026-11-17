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


function updateDishBadges() {
    for (let category of websiteDishes) {
        for (let dish of category.dishes) {
            
            const order = basket.find(
                item => item.dishId === dish.dishId
            );
            
            const badge = document.getElementById(`orderBadge${dish.dishId}`);

            if(!badge) {
                continue;
            }

            if(order) {
                badge.textContent = order ? order.quantity: "";
            } else {
                badge.hidden = !order;
            }
        }
    }
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


function renderBasket() {
    const basketContainer = document.getElementById('basketItems');
    const basketTotal = document.getElementById('basketTotal');

    updateDishBadges();

    if(!basketContainer || !basketTotal) {
        return;
    }

    if(basket.length === 0) {
        basketContainer.innerHTML = `
        <span> Nothing here yet. </span>
        <span> Go ahead and choose something delicious! </span>
        `;

        basketTotal.innerHTML = "";

        return;
    }

    let basketHTML = "";
    let subtotal = 0;

    for (let i = 0; i < basket.length; i++) {
        basketHTML += moveToBasket(basket[i]);
        subtotal += basket[i].price * basket[i].quantity;
    }

    const taxRate = 0.19;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    basketContainer.innerHTML = basketHTML;

    basketTotal.innerHTML = basketSummary(subtotal, tax, total);
}


//==================================================
// Basket Mobile Menu
//==================================================


function toggleBasket() {
    const basketArea = document.getElementById('basketArea');
    const basketButton = document.querySelector('.basket_toggle');

    basketArea.classList.toggle('open');

    const isOpen = basketArea.classList.contains('open');

    basketButton.setAttribute('aria-expanded', isOpen);
}


//==================================================
// Delivery Button (Finished the Order)
//==================================================


function deliveryButton() {
    let dialogRef = document.getElementById('submitOrder');
    dialogRef.showModal();
    document.body.classList.add('showDelivery');
}


function openCloseDialog() {
    let dialogRef = document.getElementById('submitOrder');
    dialogRef.close();
    document.body.classList.remove('showDelivery');
}


function stopPropagation(event) {
    event.stopPropagation();
}