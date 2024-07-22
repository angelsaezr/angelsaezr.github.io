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
            toggleIcon.src = 'images/light-mode.ico';
            toggleIcon.alt = 'Modo Claro';
            toggleIcon.classList.add('invert');
        } else {
            toggleIcon.src = 'images/dark-mode.ico';
            toggleIcon.alt = 'Modo Oscuro';
            toggleIcon.classList.remove('invert');
        }

        if (body.classList.contains('dark-mode-body')) {
            github.src = 'images/github.ico';
            linkedin.src = 'images/linkedin.ico';
            email.src = 'images/email.ico';
            github.classList.add('invert');
            linkedin.classList.add('invert');
            email.classList.add('invert');
        } else {
            github.src = 'images/github.ico';
            linkedin.src = 'images/linkedin.ico';
            email.src = 'images/email.ico';
            github.classList.remove('invert');
            linkedin.classList.remove('invert');
            email.classList.remove('invert');
        }
    });
});
