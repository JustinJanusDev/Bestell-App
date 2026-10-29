//==================================================
// Render Function and EventListenerData
//==================================================


function init() {
    renderCategory("burger", "sectionBurger");
    renderCategory("pizza", "sectionPizza");
    renderCategory("salad", "sectionSalad");
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


function renderCategory(category, containerId) {
    const categoryData = websiteDishes.find(
        item => item.category === category
    );

    const menuContainer = document.getElementById(containerId);

    if(!categoryData || !menuContainer) {
        console.error("Category or Container can't be founded", category, containerId);
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


