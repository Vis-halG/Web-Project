// Toggle
const toggleBtn = document.querySelector('.toggleButton');
const dropdownMenu = document.querySelector('.dropdownMenu');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('open');
    });
}

