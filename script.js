function navigationBarToDishes() {
    let navBar = document.getElementById('navigationToDishCategory');

    if(!navBar) {
        return;
    }

    navBar.innerHTML = websiteDishes.map(navigationToCategoryTemplate).join('');
}


function navigationButton(event) {
    let navButton = event.target.closest('[data-target]');

    if (!navButton) {
        return; 
    }

    let dishArea = document.getElementById('navButton.dataset.target');

    if (!dishArea) {
        return;
    }

    dishArea.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}


function renderDishes() {
    let dishSection = document.getElementById('menu');

    if (!dishSection) {
        return;
    }

    dishSection.innerHTML = menuDish.map(menuTemplate).join('');

    navigationBarToDishes();
}


function renderDishes() {
    let foodDishes = document.getElementById('menuSection');
    foodDishes.innerHTML = '';
    for (let indexBurger = 0; indexBurger < websiteDishes.burgerDishes.length; indexBurger++) {
        
        if(websiteDishes[indexBurger]) {
            foodDishes.innerHTML += implementBurgerDishes(indexBurger);
        }
    }
}


function renderDishes() {
    let foodDishes = document.getElementById('menuSection');
    foodDishes.innerHTML = '';
    for (let indexPizza = 0; indexPizza < websiteDishes.pizzaDishes.length; indexPizza++) {
        
        if(websiteDishes[indexPizza]) {
            foodDishes.innerHTML += implementPizzaDishes(indexPizza);
        }
    }
}


function renderDishes() {
    let foodDishes = document.getElementById('menuSection');
    foodDishes.innerHTML = '';
    for (let indexSalad = 0; indexSalad < websiteDishes.saladDishes.length; indexSalad++) {
        
        if(websiteDishes[indexSalad]) {
            foodDishes.innerHTML += implementSaladDishes(indexSalad);
        }
    }
}


