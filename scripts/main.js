const mainContainer = document.querySelector('.main-container');
const overlay = document.querySelector('.overlay');
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const navLinks = document.querySelectorAll('.nav a');

closeButton.addEventListener('click', () => {
    mainContainer.classList.remove('sidebar-visible');
});

openButton.addEventListener('click', () => {
    mainContainer.classList.add('sidebar-visible');
});

overlay.addEventListener('click', () => {
    mainContainer.classList.remove('sidebar-visible');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainContainer.classList.remove('sidebar-visible');
    });
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

    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
});

// Copy password to clipboard functionality
const copyButton = document.querySelector('.copy-button');
const passwordP = document.querySelector('.password');
const password = passwordP.textContent;

copyButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(password);
        copyButton.textContent = 'Copied!';
    } catch {
        copyButton.textContent = 'Press Ctrl/&#8984; +C to copy';
    }
    setTimeout(() => {
        copyButton.textContent = 'Copy';
    }, 2000);
});