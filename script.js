document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const toggleIcon = document.getElementById('toggleIcon');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const body = document.querySelector('body');


    toggleButton.addEventListener('click', () => {
        header.classList.toggle('dark-mode-header');
        main.classList.toggle('dark-mode-main');
        body.classList.toggle('dark-mode-body');
        
        if (header.classList.contains('dark-mode-header')) {
            toggleIcon.src = 'images/dark-mode.ico';
            toggleIcon.alt = 'Modo Claro';
        } else {
            toggleIcon.src = 'images/light-mode.ico';
            toggleIcon.alt = 'Modo Oscuro';
        }
    });
});
