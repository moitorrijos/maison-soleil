const mainContainer = document.querySelector('.main-container');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelectorAll('.close-button');

function toggleSidebar() {
    mainContainer.classList.toggle('sidebar-visible');
    overlay.classList.toggle('visible');
}

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        toggleSidebar();
    });
});

overlay.addEventListener('click', () => {
    toggleSidebar();
});

window.addEventListener('hashchange', () => {
    toggleSidebar();
})