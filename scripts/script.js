//==================================================
// Render Function and EventListenerData
//==================================================


function init() {
    renderCategory();
    renderBasket();
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


function renderMenus() {
    const loadingMenus = document.getElementById('');
    const category = "";

    for (let indexCategory = 0; indexCategory < loadingMenus.length; indexCategory++) {
        category = array[indexCategory];  
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


