//==================================================
// Render Function
//==================================================


function init() {
    renderCategory("burger", "sectionBurger");
    renderCategory("pizza", "sectionPizza");
    renderCategory("salad", "sectionSalad");

    iniBasketResize();

    renderBasket();
}


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
                badge.textContent = order.quantity;
                badge.hidden = false;
            } else {
                badge.textContent = "";
                badge.hidden = true;
            }
        }
    }
}


//==================================================
// Calculate the Quantity
//==================================================


function changeOrderQuantity(dishId, change) {
    const dishOrder = basket.find(
        item => item.dishId === dishId
    );

    if(!dishOrder) {
        return;
    }

    if(dishOrder.quantity + change >= 1) {
        dishOrder.quantity += change;
    }

    renderBasket();
}


function orderQuantityMore(dishId) {
    changeOrderQuantity(dishId, 1);
}


function orderQuantityLower(dishId) {
    changeOrderQuantity(dishId, -1);
}


function updateBasketBadge() {
    const basketBadge = document.getElementById('basketBadge');
    if(!basketBadge) {
        return;
    }

    let totalQuantity = 0;
    for(let i = 0; i < basket.length; i++) {
        totalQuantity += basket[i].quantity;
    }

    if(totalQuantity > 0) {
        basketBadge.textContent = totalQuantity;
        basketBadge.hidden = false;
    } else {
        basketBadge.textContent = "";
        basketBadge.hidden = true;
    }

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
    updateBasketBadge();

    if(!basketContainer || !basketTotal) {
        return;
    }

    if(basket.length === 0) {
        renderEmptyBasket(basketContainer, basketTotal);
        return;
    }

    renderBasketItems(basketContainer);
    renderBasketTotal(basketTotal);
}


function renderEmptyBasket(basketContainer, basketTotal) {
    basketContainer.innerHTML = `
    <span> Nothing here yet. </span>
    <span> Go ahead and choose something delicious! </span>
    `;

    basketTotal.innerHTML = "";
}


function renderBasketItems(basketContainer) {
    let basketHTML = "";

    for(let i = 0; i < basket.length; i++) {
        basketHTML += moveToBasket(basket[i]);
    }

    basketContainer.innerHTML = basketHTML;
}


function renderBasketTotal(basketTotal) {
    let subtotal = 0;

    for(let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].quantity;
    }

    const taxRate = 0.19;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

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


function iniBasketResize() {
    const basketArea = document.getElementById('basketArea');
    const resizeHandle = document.getElementById('basketResizeHandle');

    if(!basketArea || !resizeHandle) {
        return;
    }

    resizeHandle.addEventListener('pointerdown', (event) => {
        startBasketResize(event, basketArea, resizeHandle);
    });

    resizeHandle.addEventListener('pointermove', (event) => {
        moveBasketResize(event, basketArea, resizeHandle);
    });

    resizeHandle.addEventListener('pointerup', (event) => {
        stopBasketResize(event, resizeHandle);
    });
}


function startBasketResize(event, basketArea, resizeHandle) {
    basketArea.dataset.startY = event.clientY;
    basketArea.dataset.startHeight = basketArea.getBoundingClientRect().height;

    resizeHandle.setPointerCapture(event.pointerId);
}


function moveBasketResize(event, basketArea, resizeHandle) {
    if(!resizeHandle.hasPointerCapture(event.pointerId)) {
        return;
    }

    const startY = Number(basketArea.dataset.startY);
    const startHeight = Number(basketArea.dataset.startHeight);
    const difference = startY - event.clientY;
    const newHeight = Math.min(
        Math.max(startHeight + difference, 220),
        window.innerHeight * 0.9
    );

    basketArea.style.setProperty('--basket-height', `${newHeight}px`);
}


function stopBasketResize(event, resizeHandle) {
    if(resizeHandle.hasPointerCapture(event.pointerId)) {
        resizeHandle.releasePointerCapture(event.pointerId);
    }
}


//==================================================
// Delivery Button (Finished the Order)
//==================================================


function deliveryButton() {
    if(basket.length === 0) {
        return;
    }

    let dialogRef = document.getElementById('submitOrder');
    dialogRef.showModal();
    document.body.classList.add('showDelivery');

    basket.length = 0;

    renderBasket();
}


function openCloseDialog() {
    let dialogRef = document.getElementById('submitOrder');
    dialogRef.close();
    document.body.classList.remove('showDelivery');
}


function stopPropagation(event) {
    event.stopPropagation();
}