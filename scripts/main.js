const mainContainer = document.querySelector('.main-container');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelectorAll('.close-button');

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        mainContainer.classList.toggle('sidebar-visible');
    });
});

overlay.addEventListener('click', () => {
    mainContainer.classList.toggle('sidebar-visible');
});

window.addEventListener('hashchange', () => {
    mainContainer.classList.toggle('sidebar-visible');
})