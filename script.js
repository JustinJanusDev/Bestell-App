function renderAllDishes() {
    renderDishes();
    renderBurgerMenu();
    renderPizzaMenu();
    renderSaladMenu();
}


function insertBurgerDishes() {
    let contentRef = document.getElementById('burgerMenuSection');

    for (let indexBurger = 0; indexBurger < websiteDishes.burgerDishes.length; indexBurger++) {
        contentRef.innerHTML += implementBurgerDishes(indexBurger)
    }
}