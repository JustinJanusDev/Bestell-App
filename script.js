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