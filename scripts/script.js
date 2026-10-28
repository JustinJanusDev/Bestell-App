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


function menuSection(createDishCard) {
    const burger = categoryBurgerMenu;
    const pizza = categoryPizzaMenu;
    const salad = categorySaladMenu;
}


function renderCategory(websiteDishes) {
    const categoryData = websiteDishes.find(
        item => item.category === category
    );
    const menuDishes = categoryData.dishes;

    for (let indexDish = 0; indexDish < menuDishes.length; indexDish++) {
        menuDishes.innerHTML += categoryData.dishes.join("")
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


