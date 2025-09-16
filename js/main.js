document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const overlayMenu = document.getElementById('overlay-menu');
    const closeBtn = document.querySelector('.close-btn');

    hamburgerMenu.addEventListener('click', () => {
        overlayMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        overlayMenu.classList.remove('active');
    });
});
