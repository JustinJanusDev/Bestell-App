function navigationBarToDishes() {
    let navBar = document.getElementById('navigationToDishCategory');

    if(!navBar) {
        return;
    }

    navBar.innerHTML = websiteDishes.map(navigationToCategoryTemplate).join('');
}


function quickCategoryButton(event) {
    let navBarButton = event.target.closest('[data-target]');

    if(!navBarButton) {
        return;
    }

    let movingNavBar = document.getElementById(navBarButton.dataset.target);
    
    if(!movingNavBar) {
        return;
    }

    movingNavBar.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}


function renderMenu() {
    let menuSection = document.getElementById('delivery_site');

    if(!menuSection) {
        return;
    }

    menuSection.innerHTML = foodCategories.map(getDishTemplate).join('');

    setNavBar();
}


function orderMenu(event) {
    let navButton = event.target.closest('[data-connect-category]');

    if(!navButton) {
        return;
    }

    let websiteDishesCategory = Name(navButton.dataset.connectCategory);

   addToBasket(websiteDishesCategory); 
}


function showMenu() {
    let menuSection = document.getElementById('delivery_site');
    let quickNavSection = document.getElementById('navigationToDishCategory');

    if(!menuSection) {
        return;
    }

    menuSection.addEventListener('click', orderMenu);

    if(quickNavSection) {
        quickNavSection.addEventListener('click', quickCategoryButton);
    }

    renderMenu();
}


document.addEventListener('DOMContentLoaded', () => {
    showMenu();
    filledBasket();
})