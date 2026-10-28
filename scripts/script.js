//==================================================
// Render Function and EventListenerData
//==================================================


function init() {
    renderCategory();
}


function setEventListener() {
    const navButton = document.querySelector('');
    const orderButton = document.querySelector('');
    const quantityPlus = document.querySelector('');
    const quantityMinus = document.querySelector('');
    const removeButton = document.querySelector('');

    navButton.addEventListener('click', moveToSection);
    orderButton.addEventListener('click', addToBasket);
    quantityPlus.addEventListener('click', orderQuantityMore);
    quantityMinus.addEventListener('click', orderQuantityLower);
    removeButton.addEventListener('click', deleteOrder);
}


//==================================================
// Rendering Menus
//==================================================


function renderCategory(category) {
    const renderMenu = document.getElementById('menu_content');
    for (let indexDishes = 0; indexDishes < category.length; indexDishes++) {
        renderMenu.innerHTML += createDishCard[indexDishes];
    }
}


//==================================================
// Add Menus to Basket 
//==================================================





//==================================================
// Calculate the Quantity
//==================================================





//==================================================
// Delete the Menu
//==================================================





//==================================================
// Rendering 
//==================================================





//==================================================
// Delivery Button (Finished the Order)
//==================================================


