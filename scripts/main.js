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

// Print receipt functionality
const printButton = document.getElementById('print-receipt');

printButton.addEventListener('click', () => {
    window.print();
});

// Add dates to calendar functionality
const addToCalendarButton = document.getElementById('add-to-calendar');

addToCalendarButton.addEventListener('click', () => {
    const checkIn = addToCalendarButton.dataset.checkIn;
    const checkOut = addToCalendarButton.dataset.checkOut;

    if (!checkIn || !checkOut) return;

    const calendarUrl = new URL('https://calendar.google.com/calendar/render');
    calendarUrl.search = new URLSearchParams({
        action: 'TEMPLATE',
        text: 'Maison Soleil Reservation',
        dates: `${checkIn}/${checkOut}`,
        ctz: 'Europe/Paris',
        details: 'Reservation at Maison Soleil',
        location: 'Maison Soleil · 12 Rue des Oliviers · Cassis',
    });

    window.open(calendarUrl, '_blank');
});

// Copy password to clipboard functionality
const copyButton = document.querySelector('.copy-button');
const passwordP = document.querySelector('.password');
const password = passwordP.textContent;

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(password);
})