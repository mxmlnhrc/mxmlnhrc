const menu = document.querySelector('.menu');
const nav = document.querySelector('.navbar');

// Set Initial State Of Menu
let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        nav.classList.add('nav-active');

        // Set Menu State
        showMenu = true;
    } else {
        nav.classList.remove('nav-active');

        // Set Menu State
        showMenu = false;
    }
}